import { ILibreria } from './models/ilibreria';
import { IPersona } from './models/ipersona';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // ejemplos de tipos de datos simples
  public title: string = 'primer-proyecto-angular';
  public edad: number = 5;
  public alive: boolean = true;

  // creamos una variable para trabajar eventos
  // con la ! le aseguramos que en un futuro le daremos un valor
  // con el ? podremos darselo o no
  public interruptor: boolean = false;

  
  // interruptor
  pressInterruptor () {
    this.interruptor ? this.interruptor = false : this.interruptor = true;
    console.log("works?")
  }

  // los tipos de las funciones dependen del dato que retorna. De no retornar nada será tipo VOID
  saludar (): void {
    console.log("hola");
  }

  calcularEdad(): number {
    return this.edad + 5;
  }

  // arrays de tipos de datos simples
  public arrayEdades: number[] = [5, 4, 4, 4, 4];
  public arrayNombres: string[] = ["pepe", "juan"];

  public personas: IPersona[] = [
    {
      nombre: "Oriol",
      edad: 37,
      alive: true
    },
    {
      nombre: "Marcos",
      edad: 24,
      alive: false,
      monstros: [
        {
          name: "Luz",
          superpoder: "irse cuando se la necesita",
        },
        {
          name: "Sombra",
          superpoder: "desaparece cuando se enciende la luz",
        }
      ]
    }
  ]

  sonMessage () {
    console.log("Mi hijo me está enviando un mensaje");
  }

}
