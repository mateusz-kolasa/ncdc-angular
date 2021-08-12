import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../domain/book';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  books$: Observable<Book[]>;
  author: String;

  constructor(private route: ActivatedRoute, private store: Store<{ books: Book[]}>) { }

  ngOnInit(): void {
    this.author = this.route.snapshot.paramMap.get('author');
    this.books$ =  this.store.select(state => state.books.filter(book => book.author == this.author));
  }

}
