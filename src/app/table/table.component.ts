import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from "../domain/book"
import * as fromActions from "../actions/book.actions"
import { IComponentHistory, IHistoryData } from '../domain/component-history';
import { addHistory } from '../actions/history.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, IComponentHistory {
  books$: Observable<Book[]> = this.store.select(state => state.books);

  constructor(private store: Store<{ books: Book[]}>, private historyStore: Store<{ history: IHistoryData[]}>) { }
  historyText: String = "Book list";

  ngOnInit(): void {
    this.store.dispatch(fromActions.requestGetAll());
    this.historyStore.dispatch(addHistory({component: this.historyText}));
  }

  remove(index: number){
    this.store.dispatch(fromActions.requestRemoveBook({id: index}));
  }
}