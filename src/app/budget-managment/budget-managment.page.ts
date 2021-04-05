import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ExpensesService } from '../expenses.service';
import { OrderService } from '../order.service';
import { TableService } from '../table.service';


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
  dialyNeedSum: number;

  constructor(
    private inventory: InventoryService,
    private expenseservice: ExpensesService,
    private orderIncome: TableService,
    private orderItems: OrderService) { }

  ionViewDidEnter() {
    this.createBarChartExpense();
    this.createBarChartIncome();
  }

  createBarChartExpense() {
    let wages=this.expenseservice.getWages(), inven=this.inventory.getSumofAll();
    let electricity=this.expenseservice.getElectricity(), water=this.expenseservice.getWater();
    let others=this.expenseservice.getOthers();
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['שכר העובדים', 'מלאי', 'חשמל', 'מים', 'אחר'],
        datasets: [{
          label: '',
          data: [wages, inven, electricity, water, others],
          backgroundColor: ['white','blue','green','orange', 'grey'], 
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
    let stuffed=this.orderItems.getStuffed(), appetizers=this.orderItems.getAppetizers();
    let mainMeal=this.orderItems.getMainmeal(), others=this.orderItems.getOthers();
    this.bars2 = new Chart(this.barChart2.nativeElement, {
      type: 'pie',
      data: {
        labels: ['ממולאים', 'מנות ראשונות', 'מנות עיקריות', 'אחר'],
        datasets: [{
          label: '',
          data: [stuffed, appetizers, mainMeal, others],
          backgroundColor: ['blue','green','orange', 'grey'], 
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
    this.dialyNeedSum = this.dailySum();
  }

  expenseSum(){
    this.expenses = (this.expenseservice.getSumofAll()) + (this.inventory.getSumofAll());
  }

  incomeSum(){
    this.income = this.orderIncome.getTotalIncomeOfOrders();
  }

  dailySum(){
    return 0;
  }
  
} 

