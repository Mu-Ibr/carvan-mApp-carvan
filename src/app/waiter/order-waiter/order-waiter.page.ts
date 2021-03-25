import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';
import { Table } from 'src/app/Table.model'
import { Order } from 'src/app/Order.model';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';
import { Toast } from '@capacitor/core';
import { Notifications } from '@mobiscroll/angular';




@Component({
  selector: 'app-order-waiter',
  templateUrl: './order-waiter.page.html',
  styleUrls: ['./order-waiter.page.scss'],
})
export class OrderWaiterPage implements OnInit {

  menu: WaiterMenuItem[];
  ordered: Order[];
  table: Table;
  tableNum: any;
  appetizers: WaiterMenuItem[];
  soupd: WaiterMenuItem[];
  stuffed: WaiterMenuItem[];
  mainMeal: WaiterMenuItem[];
  drinks: WaiterMenuItem[];
  desserts: WaiterMenuItem[];
  printorder: String[];
  displayMenu: boolean;
  displayOrder: boolean;
  totalSum: number;

  constructor(
    private route: ActivatedRoute, 
    private tableservice: TableService,
    private orderservice: OrderService,
    private waiterMenu: WaiterMenuService,
    private notify: Notifications,
    private router: Router) { }
    

  ngOnInit() {
    this.tableNum = this.route.snapshot.queryParamMap.get('id')||0;;
    this.ordered = this.orderservice.getOrders();
    this.appetizers = this.waiterMenu.Appetizers;
    this.soupd = this.waiterMenu.Soups;
    this.stuffed = this.waiterMenu.Stuffed;
    this.mainMeal = this.waiterMenu.MainMeal;
    this.drinks = this.waiterMenu.Drinks;
    this.desserts = this.waiterMenu.Desserts;
    this.table = this.tableservice.getTableByNumber(this.tableNum);
    if(this.table.orderedItems == null)
      this.table.orderedItems = [];
    else
      this.printorder = this.table.orderedItems;
    this.menu = this.appetizers;
    this.displayMenu = true;
    this.displayOrder = false;
    this.totalSum = this.table.totalSum;
  }  

  printOrder(){
    if(this.table.orderedItems==null)
      return;
    this.printorder = this.table.orderedItems;
    this.totalSum = this.table.totalSum;
    this.displayMenu = false;
    this.displayOrder = true;
  }

  submitOrder(){
    this.printOrder;
    this.notify.toast({
      message: "ההזמנה נשלחה למטבח"
    });
    this.totalOfSum;
    this.orderservice.addOrder(this.tableNum,0,this.table.orderedItems.toString());
  }

  totalOfSum(){
  }

  removeTable(){
    this.tableservice.removeTable(this.tableNum);
    this.getback();
  }

  getback(){
    this.router.navigate(['./waiter']);
  }

  printMenu(menuItems: WaiterMenuItem[]){
    this.menu = menuItems;
    this.displayOrder = false;
    this.displayMenu = true;
  }

  addItem(menuitem: WaiterMenuItem){
     this.table.orderedItems.push(menuitem.name);
     this.table.totalSum+=menuitem.price;
  }

  removeItem(item: string){
    let index = this.table.orderedItems.indexOf(item);
    if(index > -1){
      this.table.orderedItems.splice(index, 1);
    }
  }
}
