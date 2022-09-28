import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // i18nSelect

  nombre: string = 'Pablo';
  genero: string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Alberto', 'Raquel'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': `tenemos # clientes esperando.`
  }

  // Funciones

  cambiarCliente() {
    let random = Math.floor(Math.random() * this.clientes.length);
    this.nombre = this.clientes[random];

    if (this.nombre == 'María' || this.nombre == 'Raquel') {
      this.genero = 'femenino';
    } else {
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
    // this.clientes.length -= 1;
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // KeyValue Pipe
  persona = {
    nombre: 'Pablo',
    edad: 29,
    residencia: 'Madrid, España'
  }

  // Async Pipe
  miObservable = interval(2000) // 0, 1, 2, 3, 4, 5, 6...

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve ('Tenemos data de promesa');
    }, 3500);
  });

}
