import { Component, OnInit } from '@angular/core';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';
import { Table } from 'src/app/Table.model'
import { Order } from 'src/app/Order.model';


@Component({
  selector: 'app-soupd',
  templateUrl: './soupd.page.html',
  styleUrls: ['./soupd.page.scss'],
})
export class SoupdPage implements OnInit {
  soups : WaiterMenuItem[];
  constructor(private menu: WaiterMenuService, 
    private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
    this.soups = this.menu.Soups;
  }
   
  add_to_menu(item:string){

  }
  

}
