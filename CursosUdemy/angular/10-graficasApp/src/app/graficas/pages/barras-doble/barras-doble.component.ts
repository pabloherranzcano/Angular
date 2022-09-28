import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {

  public proveedoresData: ChartData<'bar'> = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
      { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
    ]
  };

  public productData: ChartData<'bar'> = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
      { data: [200, 300, 400, 300, 100], label: 'Carros', backgroundColor: 'blue' },
    ]
  }

}
