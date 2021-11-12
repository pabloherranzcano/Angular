import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `

   <h1>{{ titulo }}</h1>

    <button (click)="acumular(base)"> + {{ base }} </button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)"> - {{ base }} </button>

  `
})

export class ContadorComponent {
  public titulo: string = 'Contador App';
  public numero: number = 10;

  // sumar(){
  //   this.numero += 1;
  // }

  // restar(){
  //   this.numero -= 1;
  // }

  acumular(valor: number){
    this.numero += valor;
  }

  // Tarea: base: number = 5;
  base: number = 5;
}
