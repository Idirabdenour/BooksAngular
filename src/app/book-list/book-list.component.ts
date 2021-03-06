import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/Book.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscription: Subscription;

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
    this.bookSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books
      }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();
  }

  onNewBook(){
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(Book: Book){
    this.booksService.removeBook(Book);
  }

  onViewBook(id: number){
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(){
    this.bookSubscription.unsubscribe();
  }
}
