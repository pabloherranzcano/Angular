import { Pipe, PipeTransform } from '@angular/core';
import { Color, Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = 'sin valor'): Heroe[] {
    let sortedHeroes: Heroe[] = [...heroes];

    switch (orderBy) {
      case ('nombre'):
        return sortedHeroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case ('vuela'):
        return sortedHeroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
      case ('color'):
        return sortedHeroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return sortedHeroes;
    }
  }
}
