import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from "../domain/book"
import * as fromActions from "../actions/book.actions"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  books$: Observable<Book[]> = this.store.select(state => state.books);

  constructor(private store: Store<{ books: Book[]}>) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.requestGetAll());
  }

  remove(index: number){
    this.store.dispatch(fromActions.requestRemoveBook({id: index}));
  }
}