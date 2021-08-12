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
  on(Actions.requestAddBook, 
    (state, action) => state),
  on(Actions.addBook, 
    (state, action) => state = [...state, action.book]),
  on(Actions.requestGetOne, 
    (state, action) => state),
  on(Actions.getOne, 
    (state, action) => {
      const index = state.findIndex(b => b.id == action.book.id);
      if (index == -1)
        state = [...state, action.book];
      else
          state = replaceAt(state, index, action.book);

        return state;
    }),
  on(Actions.requestGetByAuthor, 
    (state, action) => state),
  on(Actions.getByAuthor, 
    (state, action) => {
      action.books.forEach(element => {
        const index = state.findIndex(b => b.id == element.id);
        if (index == -1)
          state = [...state, element];
        else 
          state = replaceAt(state, index, element);
      });

      return state;
    }),
);

function replaceAt(state, index, book) {
  const array = state.slice(0);
  array[index] = book;
  return array;
}