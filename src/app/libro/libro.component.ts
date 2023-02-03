import { ILibreria } from './../models/ilibreria';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent {

  @Input() libros!: ILibreria[];
  @Input() librosFiltered!: ILibreria[];

  buscar(value: string) {
    console.log(this.librosFiltered);
    this.librosFiltered = this.libros.filter((libro: ILibreria) => libro.name.toLowerCase().includes(value.toLowerCase()));
  }

}
