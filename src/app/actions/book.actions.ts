import { createAction, props } from '@ngrx/store';
import { Book } from '../domain/book';
 
export const requestAddBook = createAction(
  '[Book] Add Book Request',
  props<{ book: Book }>()
);

export const addBook = createAction(
  '[Book] Add Book Success',
  props<{ book: Book }>()
);

export const requestGetOne = createAction(
    '[Book] Get One Book Request',
    props<{ id: number }>()
);

export const getOne = createAction(
  '[Book] Get One Book Success',
  props<{ book: Book }>()
);

export const requestGetByAuthor = createAction(
  '[Book] Get By Author Request',
  props<{ author: String }>()
);

export const getByAuthor = createAction(
    '[Book] Get By Author Success',
    props<{ books: Book[] }>()
);
 
export const requestRemoveBook = createAction(
  '[Book] Delete Book Request',
  props<{ id: number }>()
);

export const removeBook = createAction(
  '[Book] Delete Book Success',
  props<{ id: number }>()
);
 
export const requestGetAll = createAction(
  '[Book] Get All Request'
);

export const getAll = createAction(
  '[Book] Get All Success',
  props<{ books: Book[] }>()
);