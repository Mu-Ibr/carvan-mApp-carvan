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
  orders: Order[];
  constructor(private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
    this.tables = this.tableservice.getTables();
  }

  removeItem(tableNum: number){
    this.tableservice.removeTable(tableNum);
  }

}
