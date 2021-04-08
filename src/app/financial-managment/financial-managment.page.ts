import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-financial-managment',
  templateUrl: './financial-managment.page.html',
  styleUrls: ['./financial-managment.page.scss'],
})
export class FinancialManagmentPage implements OnInit {

  totalIncome:number;
  taxes: number;
  inventories: number;
  wages: number;
  fixedCosts: number;
  equipment: number;
  commissionCreditCard: number;
  refundLoans: number;
  profit: number;

  constructor(private incomes: TableService) { }

  ngOnInit() {
    this.totalIncome = this.incomes.getTotalIncomeOfOrders();
    this.calculate(this.totalIncome);
  }

  calculate(income){
    this.taxes = (income*0.18);
    income-=this.taxes;
    this.inventories = (income*.30);
    income-=this.inventories;
    this.wages = (income*0.25);
    income-=this.wages;
    this.fixedCosts = (income*0.25);
    income-=this.fixedCosts;
    this.equipment = (income*0.02);
    income-=this.equipment;
    if(this.incomes.getNumberOfCreditCardPayment() > 0)
      this.commissionCreditCard = ((this.totalIncome/this.incomes.getNumberOfCreditCardPayment())*0.18);
    else
    this.commissionCreditCard = 0;
    this.refundLoans = 0;
    this.profit = income;
  }
  
}
