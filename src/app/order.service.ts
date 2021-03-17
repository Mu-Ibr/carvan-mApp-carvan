import { Injectable } from '@angular/core';
import { Order } from './Order.model';
import { Table } from './Table.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: Order[] = [];
  totalSumOfOrders: number;

  constructor() { }
  
  addOrder(table:Table, totalSum:number, items:string[]){
    this.order.push(new Order(table,totalSum,items));
    this.sumofOrders(totalSum);
  }

  getTotalSumOfOrders(){
    return this.totalSumOfOrders;
  }

  private sumofOrders(totalSum: number){
    this.totalSumOfOrders+=totalSum;
  }

  getOrders(){
    return [...this.order];
  }
}
