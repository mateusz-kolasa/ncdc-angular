import { Action, createReducer, on } from '@ngrx/store';
import { IHistoryData } from '../domain/component-history';
import * as Actions from "../actions/history.actions"


export const initialState: IHistoryData[] = [];

export const historyReducer = createReducer(
  initialState,
  on(Actions.addHistory,
    (state, action) => state),
  on(Actions.historyList, 
    (state, action) => state = [action.history, ...state].slice(0, 15)),
    );

