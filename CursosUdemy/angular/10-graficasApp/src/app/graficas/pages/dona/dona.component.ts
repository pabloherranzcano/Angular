import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100, 24], backgroundColor: ['#738290', '#f59b00', '#E4F0D0', '#00ffee'], hoverBackgroundColor: 'red' },
      { data: [50, 150, 120, 98], backgroundColor: ['#738290', '#f59b00', '#E4F0D0', '#00ffee'], hoverBackgroundColor: 'red' },
      { data: [250, 130, 70, 36], backgroundColor: ['#738290', '#f59b00', '#E4F0D0', '#00ffee'], hoverBackgroundColor: 'red' }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
