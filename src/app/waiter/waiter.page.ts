import { Component, OnInit } from '@angular/core';
import { Table } from '../Table.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TableService } from '../table.service';
import { Order } from '../Order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.page.html',
  styleUrls: ['./waiter.page.scss'],
})
export class WaiterPage implements OnInit {
  table: Table[];
  tableN: Table;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
    this.table = this.tableservice.table;
   }

  SelectClicked(tableNum){
    this.tableN = new Table(tableNum,"waiter",true);
    this.tableservice.addTable(tableNum,"waiter", true); 
    this.orderservice.addOrder(this.tableN, 0, []);
    this.router.navigate(['/order-waiter']);
  }

}
