import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core'
import { ExpensesService } from '../expenses.service';
import { InventoryService } from '../inventory.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.page.html',
  styleUrls: ['./cash-flow.page.scss'],
})
export class CashFlowPage implements OnInit {


  @ViewChild('barChart') barChart;

  bars: any;
  expenses: number;
  incomes: number;

  constructor(
    private expenseservice: ExpensesService,
    private inventoryservice: InventoryService,
    private orderIncome: OrderService) { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['מרץ', 'פברואר', 'ינואר', 'דצמבר'],
        datasets: [{
          label: 'תזרים מזומנים ל3 החודשים האחרונים',
          data: [1, 6, 4, 9],
          backgroundColor: ['black','grey','blue','green'], 
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
   this.sumExpenses();
   this.sumIncome();
  }

  sumExpenses(){
    this.expenses = (this.expenseservice.getSumofAll())+(this.inventoryservice.getSumofAll());
  }

  sumIncome(){
    this.incomes = this.orderIncome.getTotalIncomeOfOrders();
    }
}
