import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../domain/book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  book$: Observable<Book>;
  
  constructor(private route: ActivatedRoute, private store: Store<{ books: Book[]}>) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book$ =  this.store.select(state => state.books.find(book => book.id == id));
  }

}
