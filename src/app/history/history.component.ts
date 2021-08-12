import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IComponentHistory, IHistoryData } from '../domain/component-history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history$: Observable<IHistoryData[]> = this.store.select(state => state.history);

  constructor(private store: Store<{ history: IHistoryData[]}>) { }

  ngOnInit(): void { 
  }
}
