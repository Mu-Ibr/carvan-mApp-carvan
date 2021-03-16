import { Component, OnInit } from '@angular/core';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';
import { Table } from 'src/app/Table.model'
import { Order } from 'src/app/Order.model';


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  drinks: WaiterMenuItem[];
  constructor(private menu: WaiterMenuService, 
    private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
    this.drinks = this.menu.Drinks;
  } 
  
  add_to_menu(item:string){

  }
  

}
