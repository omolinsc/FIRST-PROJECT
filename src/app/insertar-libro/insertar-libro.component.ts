import { ILibreria } from './../models/ilibreria';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insertar-libro',
  templateUrl: './insertar-libro.component.html',
  styleUrls: ['./insertar-libro.component.scss']
})
export class InsertarLibroComponent {

  @Output() newBook = new EventEmitter();

  addNewBook(book: ILibreria) {
    console.log(book);
    this.newBook.emit(book);
  }
}
