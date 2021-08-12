import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addHistory } from '../actions/history.actions';
import { Book } from '../domain/book';
import { IComponentHistory, IHistoryData } from '../domain/component-history';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit, IComponentHistory {
  books$: Observable<Book[]>;
  author: String;

  constructor(private route: ActivatedRoute, private store: Store<{ books: Book[]}>, private historyStore: Store<{ history: IHistoryData[]}>, private router: Router) { }
  historyText: String;

  ngOnInit(): void {
    this.author = this.route.snapshot.paramMap.get('author');
    this.books$ =  this.store.select(state => state.books.filter(book => book.author == this.author));

    this.historyText = this.author;
    this.historyStore.dispatch(addHistory({component: this.historyText}));
  }

}
