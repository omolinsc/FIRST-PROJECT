import { IPersona } from './../../models/ipersona';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public name: string = "ORIOL";

public cambiarNombre = (): void => {
  this.name = "SANTI";
};

  constructor() {
    const numero = 5;
    console.log("ME ESTOY CONSTRUYENDO");
  }

  // ejemplo de función : si no retorna nada pondremos el tipo VOID
  // string[] : es una array de strings
  public function = (numero:number, nombre:string): string[] => {
    return ["Pepe", "Oriol", "Joan"];
  }

  ngOnInit(): void {
    console.log("YA ME PUEDES VER");
  }

  // este evento será lanzado por cada cambio en las propiedades del componente.
  ngOnChanges(): void {
    console.log("ESTOY CAMBIANDO");
  }

  // este evento se ejecuta justo antes de destruir un componente, nos será útil para "hacer limpieza" y no dejarnos cables sueltos.
  ngOnDestroy(): void {
    console.log("ME HAS DESTRUIDO");
  }

  // testeando los INPUTS
  @Input() public personitas!: IPersona[];
  @Output() sonEvent = new EventEmitter();

  recogeTexto(texto: string){
    console.log(texto);
    this.sonEvent.emit(texto);
  }

}
