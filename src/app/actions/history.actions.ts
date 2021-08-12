import { createAction, props } from '@ngrx/store';
import { IComponentHistory, IHistoryData } from '../domain/component-history';

export const addHistory = createAction(
  '[History] Add History',
  props<{ component: String }>()
);

export const historyList = createAction(
  '[History] Get History',
  props<{ history: IHistoryData }>()
);