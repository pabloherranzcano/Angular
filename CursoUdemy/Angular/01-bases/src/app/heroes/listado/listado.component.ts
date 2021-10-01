import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America', 'Deadpool'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
