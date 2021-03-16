import { Component, OnInit } from '@angular/core';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';
import { Table } from 'src/app/Table.model'
import { Order } from 'src/app/Order.model';


@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.page.html',
  styleUrls: ['./appetizers.page.scss'],
})
export class AppetizersPage implements OnInit {
  appetizers : WaiterMenuItem[];
  constructor(private menu: WaiterMenuService,
    private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
    this.appetizers = this.menu.Appetizers;
  }
  
  add_to_menu(item:string){

  }
  
}
