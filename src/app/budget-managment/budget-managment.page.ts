import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { InventoryService } from '../inventory.service';


@Component({
  selector: 'app-budget-managment',
  templateUrl: './budget-managment.page.html',
  styleUrls: ['./budget-managment.page.scss'],
})
export class BudgetManagmentPage implements OnInit {

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;

  expenses: number;
  income: number;
  total: number;

  constructor(private inventory: InventoryService) { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['אלכוהול', 'בשרים', 'חשמל', 'מים'],
        datasets: [{
          label: '',
          data: [2.5, 3.8, 5, 6.9],
          backgroundColor: 'rgb(38, 194, 129)', 
          borderColor: 'rgb(38, 194, 129)',
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
  
generateColorArray() {
  this.colorArray = [];
  for (let i = 0; i < 4; i++) {
    this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
  }
}

  ngOnInit() {
   // this.expenses = this.inventory.getSumOfAll();
    this.expenses = 0;
    this.income = 0;
    this.total = this.income - this.expenses;
  }

} 

