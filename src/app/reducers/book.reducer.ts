import { createReducer, on } from '@ngrx/store';
import * as Actions from "../actions/book.actions"
import { Book } from '../domain/book';

export const initialState: Book[] = [];

export const bookReducer = createReducer(
  initialState,
  on(Actions.requestGetAll,
    (state, action) => state = []),
  on(Actions.getAll, 
    (state, action) => state = action.books),
  on(Actions.requestRemoveBook, 
    (state, action) => state),
  on(Actions.removeBook, 
    (state, action) => state = state.filter(item => item.id != action.id)),
);

