import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { requestGetAll, getAll, requestRemoveBook, removeBook, requestAddBook, addBook, requestGetOne, getOne, requestGetByAuthor, getByAuthor } from '../actions/book.actions';
import { BookService } from "../services/book.service"

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookService: BookService) {}

  loadAllBooks$ = createEffect(() => this.actions$.pipe(
    ofType(requestGetAll),
    mergeMap(() => this.bookService.getAllBooks()
      .pipe(
        map(data => getAll({books: data})),
        catchError(() => EMPTY)
      ))
    )
  );

  removeBook$ = createEffect(() => this.actions$.pipe(
    ofType(requestRemoveBook),
    mergeMap((data) => this.bookService.removeBook(data.id)
      .pipe(
        map(() => removeBook({id: data.id})),
        catchError(() => EMPTY)
      ))
    )
  );

  addBook$ = createEffect(() => this.actions$.pipe(
    ofType(requestAddBook),
    mergeMap((data) => this.bookService.addBook(data.book)
      .pipe(
        map((data) => addBook({book: data})),
        catchError(() => EMPTY)
      ))
    )
  );

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(requestGetOne),
    mergeMap((data) => this.bookService.getById(data.id)
      .pipe(
        map((data) => getOne({book: data})),
        catchError(() => EMPTY)
      ))
    )
  );

  getByAuthor$ = createEffect(() => this.actions$.pipe(
    ofType(requestGetByAuthor),
    mergeMap((data) => this.bookService.getByAuthor(data.author)
      .pipe(
        map((data) => getByAuthor({books: data})),
        catchError(() => EMPTY)
      ))
    )
  );
}
