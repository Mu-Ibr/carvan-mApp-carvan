import { Injectable } from '@angular/core';
import { Order } from './Order.model';
import { Table } from './Table.model';
import { WaiterMenuItem } from './WaiterMenuItem.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: Order[] = [];
  totalIncomeOfOrders: number;

  constructor() {
    this.totalIncomeOfOrders = 0;
   }
  
  addOrder(table:Table, totalSum:number, items:String){
    this.order.push(new Order(table,totalSum,items));
    this.sumofOrders(totalSum);
  }

  getTotalIncomeOfOrders(){
    return this.totalIncomeOfOrders;
  }

  private sumofOrders(totalSum: number){
    this.totalIncomeOfOrders+=totalSum;
  }

  getOrders(){
    return [...this.order];
  }
}
