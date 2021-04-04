import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core'
import { TableService } from '../table.service';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.page.html',
  styleUrls: ['./sales-report.page.scss'],
})
export class SalesReportPage implements OnInit {


  @ViewChild('barChart') barChart;

  bars: any;
  income: number;
  totalOfClientsPerDay: number;
  averageIncomePerPerson: number;
  totalofTablesPerDay: number;

  constructor(private tablesService: TableService,
    private orderService: OrderService) { }

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
    this.income= this.tablesService.getTotalIncomeOfOrders();
    this.totalOfClientsPerDay= this.tablesService.getNumberOfClinetsPerDay();
    this.totalofTablesPerDay= this.tablesService.getNumberofTablesPerDay();
    if(this.totalOfClientsPerDay>0){
      this.averageIncomePerPerson = (this.income/this.totalOfClientsPerDay);
    }
    else{
      this.averageIncomePerPerson = 0;
    }
  }

}
