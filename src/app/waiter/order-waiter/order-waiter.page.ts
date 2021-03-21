import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';
import { Table } from 'src/app/Table.model'
import { Order } from 'src/app/Order.model';
import { Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-order-waiter',
  templateUrl: './order-waiter.page.html',
  styleUrls: ['./order-waiter.page.scss'],
})
export class OrderWaiterPage implements OnInit {

  private menu: String[];
  tables: Table[];
  orders: string[];
  ordered: Order[];
  totalSum: number;
  tableNum: any;

  constructor(
    private route: ActivatedRoute, 
    private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
    this.tableNum = this.route.snapshot.queryParamMap.get('id')||0;;
    this.ordered = this.orderservice.getOrders();
    this.totalSum = 0;
    console.log(this.tableNum);
  }  

  printOrder(tableNum: number){
    for(const table of this.tables){
      if(table.num == tableNum){
        this.orders = table.ordered;
        break;
      }
    }
  }

  submitOrder(tableNum: number){
    var tab;
    for(const table of this.tables){
      if(table.num == tableNum){
        tab = table;
        break;
      }
    }
    this.orderservice.addOrder(tab,this.totalSum,this.orders);
    this.ordered = this.orderservice.getOrders();
  }

}
