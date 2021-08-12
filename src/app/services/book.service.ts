import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Book } from '../domain/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string = "http://localhost:3000/books"

  constructor(private http: HttpClient) { }

  getAllBooks() : Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }

  removeBook(index: number) {
    return this.http.delete<Book[]>(this.url + "/" + index);
  }

  addBook(book: Book) : Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  getById(id: number) : Observable<Book>{
    return this.http.get<Book>(this.url + "/" + id);
  }

  getByAuthor(author: String) : Observable<Book[]>{
    let query = '/?author=' + author;
    return this.http.get<Book[]>(this.url + query);
  }
}
