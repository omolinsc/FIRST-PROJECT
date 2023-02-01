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
      nombre: "Tamara",
      edad: 24,
      alive: false,
      monstros: [
        {
          name: "Luz",
          superpoder: "irse cuando Tamara la necesita",
        },
        {
          name: "Sombra",
          superpoder: "hace que se enciendan las velas de casa",
        }
      ]
    }
  ]

}
