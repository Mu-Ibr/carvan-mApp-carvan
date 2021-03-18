import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ExpensesService } from '../expenses.service';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-budget-managment',
  templateUrl: './budget-managment.page.html',
  styleUrls: ['./budget-managment.page.scss'],
})
export class BudgetManagmentPage implements OnInit {

  @ViewChild('barChart') barChart;
  @ViewChild('barChart2') barChart2;

  bars: any;
  bars2: any;
  expenses: number;
  income: number;
  total: number;

  constructor(
    private inventory: InventoryService,
    private expenseservice: ExpensesService,
    private orderIncome: OrderService) { }

  ionViewDidEnter() {
    this.createBarChartExpense();
    this.createBarChartIncome();
  }

  createBarChartExpense() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['אלכוהול', 'בשרים', 'חשמל', 'מים'],
        datasets: [{
          label: '',
          data: [2.5, 3.8, 5, 6.9],
          backgroundColor: ['white','blue','green','black'], 
          borderColor: 'red',
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
  
  createBarChartIncome() {
    this.bars2 = new Chart(this.barChart2.nativeElement, {
      type: 'pie',
      data: {
        labels: ['אלכוהול', 'בשרים', 'סלטים'],
        datasets: [{
          label: '',
          data: [2.5, 3.8, 6.9],
          backgroundColor: ['blue','green','black'], 
          borderColor: 'red',
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
    this.expenseSum();
    this.incomeSum();
    this.total = this.income - this.expenses;
  }

  expenseSum(){
    this.expenses = (this.expenseservice.getSumofAll()) + (this.inventory.getSumofAll());
  }

  incomeSum(){
    this.income = this.orderIncome.getTotalIncomeOfOrders();
  }

} 

