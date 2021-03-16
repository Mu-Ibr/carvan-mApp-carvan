import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';
import { Table } from 'src/app/Table.model'
import { Order } from 'src/app/Order.model';



@Component({
  selector: 'app-order-waiter',
  templateUrl: './order-waiter.page.html',
  styleUrls: ['./order-waiter.page.scss'],
})
export class OrderWaiterPage implements OnInit {

  private menu: String[];
  tables: Table[];
  table: Table;
  orders: Order[];
  order: Order;

  constructor(
    private route: ActivatedRoute, 
    private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
  }  

  printOrder(){
    
  }

  submitOrder(){
    
  }

}
