import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
import { Expense } from './Expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  expensesArr: Expense[] = [];
  sumofAll: number;

  constructor() {
    this.sumofAll=0;
   }

  getExpenses(){
    return [...this.expensesArr];
  }


  getSumofAll(){
    return this.sumofAll;
  }

  addSum(amount){
    this.sumofAll = this.sumofAll + amount;
  }

  removeSum(amount){
    this.sumofAll = this.sumofAll - amount;
  }
  
}
