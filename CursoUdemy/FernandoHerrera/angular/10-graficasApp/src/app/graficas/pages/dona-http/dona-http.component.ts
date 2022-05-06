import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'],
    datasets:
      [
        // { data: [350, 450, 100, 24], backgroundColor: ['#738290', '#f59b00', '#E4F0D0', '#00ffee'], hoverBackgroundColor: 'red' },
        // { data: [50, 150, 120, 98], backgroundColor: ['#738290', '#f59b00', '#E4F0D0', '#00ffee'], hoverBackgroundColor: 'red' },
        // { data: [250, 130, 70, 36], backgroundColor: ['#738290', '#f59b00', '#E4F0D0', '#00ffee'], hoverBackgroundColor: 'red' }
      ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getSocialUsers()
    //   .subscribe(data => {
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);
    //     this.doughnutChartData = {
    //       labels: labels,
    //       datasets: [{ data: values }],
    //     };
    //   });

    this.graficasService
      .getSocialUsersDonaData()
      .subscribe(({ labels, datasets }) => {
        this.doughnutChartData = { labels, datasets };
      });
  }
}
