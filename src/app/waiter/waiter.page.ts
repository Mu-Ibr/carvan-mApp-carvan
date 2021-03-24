import { Component, OnInit, Query } from '@angular/core';
import { Table } from '../Table.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TableService } from '../table.service';
import { Order } from '../Order.model';
import { OrderService } from '../order.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.page.html',
  styleUrls: ['./waiter.page.scss'],
})
export class WaiterPage implements OnInit {
  tables: Table[];
  tableN: Table;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private tableservice: TableService) {}

  ngOnInit() {
    this.tables = this.tableservice.getTables();
   }

  SelectClicked(tabNum){
    this.tableservice.addTable(tabNum,"waiter", true,[],0); 
    this.router.navigate(['/order-waiter'], {queryParams: {id: tabNum}});
  }

}
