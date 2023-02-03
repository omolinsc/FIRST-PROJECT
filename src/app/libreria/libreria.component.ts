import { ILibreria } from './../models/ilibreria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent implements OnInit {

  public libros : ILibreria[] = [];

  ngOnInit(): void {
    this.libros = [
      {
        name: 'default',
        image: 'https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg',
      },
      {
        name: 'El Código DaVinci',
        image: 'https://kbimages1-a.akamaihd.net/54253aaa-b7b5-44ec-8893-2a313c7928ed/1200/1200/False/the-da-vinci-code-abridged-edition.jpg',
      },
      {
        name: 'Origen',
        image: 'https://m.media-amazon.com/images/I/91xopljHIWL.jpg',
      },
      {
        name: 'Inferno',
        image: 'https://www.elsotano.com/imagenes_grandes/9786070/978607071643.JPG',
      },
      {
        name: 'El Símbolo Perdido',
        image: 'https://www.planetadelibros.com.mx/usuaris/libros/fotos/145/m_libros/144243_portada_el-simbolo-perdido_dan-brown_201505260958.jpg',
      },
      {
        name: "Guardias Guardias",
        image: "https://m.media-amazon.com/images/I/91WcB0PUYFL.jpg",
      },
    ];
  }

  addBook(libro: ILibreria){
    this.libros.push(libro);
  }

}
