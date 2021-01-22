import { Injectable } from '@angular/core';
import { Order } from './Order.model';
import { Table } from './Table.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: Order[];

  constructor() { }
  
  addOrder(table:Table, totalSum:number, items:string[]){
    this.order.push(new Order(table,totalSum,items));
  }

  getOrders(){
    return [...this.order];
  }
}
