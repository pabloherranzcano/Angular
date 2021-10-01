import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'MichAeL joRdAn';
  valor: number = 1000;
  obj = {
    nombre: 'Michael',
    apellido: 'Jordan'
  };

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
