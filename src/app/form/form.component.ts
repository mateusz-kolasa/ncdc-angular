import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../domain/book';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromActions from "../actions/book.actions"
import { Router } from '@angular/router';
import { IComponentHistory, IHistoryData } from '../domain/component-history';
import { addHistory } from '../actions/history.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, IComponentHistory {
  bookForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(7)]),
    author: new FormControl('', Validators.required)
  });

  constructor(private location: Location, private router: Router, private store: Store<{ books: Book[]}>, private historyStore: Store<{ history: IHistoryData[]}>) { }
  historyText: String = "Create";

  ngOnInit(): void {
    this.historyStore.dispatch(addHistory({component: this.historyText}));
  }

  onSubmit(){
    this.store.dispatch(fromActions.requestAddBook({book: this.bookForm.value}));
    this.router.navigate(['table']);
  }

  goBack(){
    this.location.back();
  }
}
