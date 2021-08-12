import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { addHistory, historyList } from '../actions/history.actions'
import { IHistoryData } from '../domain/component-history';

@Injectable()
export class HistoryEffects {

  constructor(private actions$: Actions, private router: Router) {}

  addToHistory$ = createEffect(() => this.actions$.pipe(
    ofType(addHistory),
    map((history) => historyList({history: {url: this.router.url.replace("%20", " "), historyDisplay: history.component}})),
    catchError(() => EMPTY)
    )
  );
}
