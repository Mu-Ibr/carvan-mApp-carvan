import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Table } from 'src/app/Table.model';
import { Order } from '../Order.model';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.page.html',
  styleUrls: ['./kitchen.page.scss'],
})
export class KitchenPage implements OnInit {

  tables: Table[];
  orderedList: Order[];

  constructor(private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
    this.tables = this.tableservice.getTables();
    this.orderedList = this.orderservice.getOrders();
    this.orders();
  }

  removeItem(order: Order){
    let index = this.orderedList.indexOf(order);
    if(index > -1){
      this.orderedList.splice(index, 1);
    }
  }

  orders(){
    
  }

  // printOrder(tableNum: number, ordered: String[]){
  //   this.orderedList.push(ordered);
  // }
}