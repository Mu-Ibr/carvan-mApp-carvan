import { Injectable } from '@angular/core';
import { getDateOnly } from '@mobiscroll/angular/dist/js/core/util/datetime';
//import { timeStamp } from 'console';
import { Expense } from './Expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  expensesArr: Expense[] = [];
  sumofAll: number;
  private electricity: number;
  private water: number;
  private wages: number;
  private others: number;
  private month: number;
  private expenseMonthly: number[] = [];

  constructor() {
    this.sumofAll=0;
    this.electricity = 0;
    this.water = 0;
    this.wages = 0;
    this.others = 0;
    this.month = 0;
    for(let i=0; i<12; i++){
      this.expenseMonthly[i]=0;
    }
   }

   getExpenses(){
    return [...this.expensesArr];
  }
  getExpenseMonthly(){
    return [...this.expenseMonthly];
  }

  getSumofAll(){
    return this.sumofAll;
  }

  getElectricity(){
    return this.electricity;
  }

  getWater(){
    return this.water;
  }

  getWages(){
    return this.wages;
  }

  getOthers(){
    return this.others;
  }

  getMonth(){
    return this.month;
  }

  addElectricity(sum: number){
    this.electricity+=sum;
  }
  
  addWater(sum: number){
    return this.water+=sum;
  }

  addWages(sum: number){
    return this.wages+=sum;
  }

  addOthers(sum: number){
    return this.others+=sum;
  }

  addMonth(){
    this.month++;
  }

  addExpenseMonth(sum: number){
    this.expenseMonthly[this.month] += sum;
  }

  addSum(amount){
    this.sumofAll = this.sumofAll + amount;
  }

  removeSum(amount){
    this.sumofAll = this.sumofAll - amount;
  }
  
}
