import { Component, OnInit } from '@angular/core';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';
import { Table } from 'src/app/Table.model'
import { Order } from 'src/app/Order.model';


@Component({
  selector: 'app-main-meal',
  templateUrl: './main-meal.page.html',
  styleUrls: ['./main-meal.page.scss'],
})
export class MainMealPage implements OnInit {
  mainMeal: WaiterMenuItem[];
  constructor(private menu: WaiterMenuService, 
    private tableservice: TableService,
    private orderservice: OrderService) { }

  ngOnInit() {
    this.mainMeal = this.menu.MainMeal;
  }
   
  add_to_menu(item:string){

  }
  

}
