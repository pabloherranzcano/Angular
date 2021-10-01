import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../pages/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[] = [];
  @Input() toggleCapital: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
