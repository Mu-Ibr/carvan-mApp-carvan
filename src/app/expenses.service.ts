import { Injectable } from '@angular/core';
import { getDateOnly } from '@mobiscroll/angular/dist/js/core/util/datetime';
//import { timeStamp } from 'console';
import { Expense } from './Expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expensesArr: Expense[] = [];
  private expFixedCosts: Expense[] = [];
  private expLoans: Expense[] = [];
  private expWages: Expense[] = [];
  private expOthers: Expense[] = [];
  sumofAll: number;
  private fixedCosts: number;
  private loans: number;
  private wages: number;
  private others: number;
  private month: number;
  private expenseMonthly: number[] = [];

  constructor() {
    this.sumofAll=0;
    this.fixedCosts = 0;
    this.loans = 0;
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
  
  getExpFixedCosts(){
    return [...this.expFixedCosts];
  }
  
  getExpLoans(){
    return [...this.expLoans];
  }
  
  getExpWages(){
    return [...this.expWages];
  }
  
  getExpOthers(){
    return [...this.expOthers];
  }
  
  getExpenseMonthly(){
    return [...this.expenseMonthly];
  }

  getSumofAll(){
    return this.sumofAll;
  }

  getFixedCosts(){
    return this.fixedCosts;
  }

  getLoans(){
    return this.loans;
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

  addFixedCosts(item, sum: number){
    this.expFixedCosts.push(item);
    this.fixedCosts+=sum;
  }
  
  addLoans(item, sum: number){
    this.expLoans.push(item);
    return this.loans+=sum;
  }

  addWages(item, sum: number){
    this.expWages.push(item);
    return this.wages+=sum;
  }

  addOthers(item, sum: number){
    this.expOthers.push(item);
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
