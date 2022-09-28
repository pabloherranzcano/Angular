import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  
  @Input() horizontal: boolean = false;
  @Input() barChartData: ChartData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#D43017', hoverBackgroundColor: 'lightgray'},
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#5CD0AA', hoverBackgroundColor: 'lightgray'},
      { data: [28, 18, 44, 93, 32, 42, 51], label: 'Series C', backgroundColor: '#F5C84B', hoverBackgroundColor: 'lightgray'}
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {},
      y: {}
    }
  };

  public barChartType: ChartType = 'bar';
  
  
  constructor() {}

  ngOnInit(): void {
    if ( this.horizontal ) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }

}
