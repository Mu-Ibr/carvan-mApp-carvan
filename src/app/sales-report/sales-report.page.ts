import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core'


@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.page.html',
  styleUrls: ['./sales-report.page.scss'],
})
export class SalesReportPage implements OnInit {


  @ViewChild('barChart') barChart;

  bars: any;
  constructor() { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['קינוחים','סלטים','טייקאוי','בשרים'],
        datasets: [{
          label: '',
          data: [2.5, 3.8, 5, 6.9],
          backgroundColor: ['grey','blue','orange','green'], 
          borderColor: 'white',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ngOnInit() {
  }

}
