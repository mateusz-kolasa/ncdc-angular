import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addHistory } from '../actions/history.actions';
import { Book } from '../domain/book';
import { IComponentHistory, IHistoryData } from '../domain/component-history';
import * as fromActions from "../actions/book.actions"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, IComponentHistory {
  book$: Observable<Book>;
  
  constructor(private route: ActivatedRoute, private store: Store<{ books: Book[]}>, private historyStore: Store<{ history: IHistoryData[]}>) { }
  historyText: String;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(fromActions.requestGetOne({id: id}));
    this.book$ =  this.store.select(state => state.books.find(book => book.id == id));
    
    this.historyText = "Book: " + id;
    this.historyStore.dispatch(addHistory({component: this.historyText}));
  }

}
