import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IComponentHistory, IHistoryData } from '../domain/component-history';
import { addHistory } from '../actions/history.actions'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, IComponentHistory {

  constructor(private router: Router, private store: Store<{ history: IHistoryData[]}>) { }
  historyText: String = "Home page";

  ngOnInit(): void {
    this.store.dispatch(addHistory({component: this.historyText}));
  }
}
