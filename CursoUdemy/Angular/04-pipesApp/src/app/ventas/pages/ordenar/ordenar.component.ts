import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Capitán América',
      vuela: false,
      color: Color.azul
    },
  ]

  toggleMayus(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.orderBy = valor;
    console.log(valor);
  }


}
