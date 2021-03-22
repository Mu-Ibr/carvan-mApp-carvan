import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  private menu: String[];
  tables: Table[];
  orders: string[];
  ordered: Order[];
  table: Table;
  totalSum: number;
  tableNum: any;
  appetizers: WaiterMenuItem[];
  soupd: WaiterMenuItem[];
  stuffed: WaiterMenuItem[];
  mainMeal: WaiterMenuItem[];
  drinks: WaiterMenuItem[];
  desserts: WaiterMenuItem[];
  menuDiv: any;
  str: string;
  orderMessage: string[];

  constructor(
    private route: ActivatedRoute, 
    private tableservice: TableService,
    private orderservice: OrderService,
    private waiterMenu: WaiterMenuService,
    private notify: Notifications) { }

  ngOnInit() {
    this.tableNum = this.route.snapshot.queryParamMap.get('id')||0;;
    this.ordered = this.orderservice.getOrders();
    this.appetizers = this.waiterMenu.Appetizers;
    this.soupd = this.waiterMenu.Soups;
    this.stuffed = this.waiterMenu.Stuffed;
    this.mainMeal = this.waiterMenu.MainMeal;
    this.drinks = this.waiterMenu.Drinks;
    this.desserts = this.waiterMenu.Desserts;
    if(this.tableservice.isTaken(this.tableNum) == true){
      this.orderMessage = this.tableservice.getOrderedItems(this.tableNum);
      this.table = this.tableservice.getTableByNumber(this.tableNum);
    }
    else
      this.addTable();
    this.menuDiv = document.createElement("div");
    this.menuDiv.id = 'menu';
    this.menuDiv.setAttribute("style"," display: flex;flex-direction: column;justify-content: center;align-items: center; text-align: center; min-height: 100vh;");
  }  

  addTable(){
    this.str = "";
    this.totalSum = 0;
    this.orderMessage = [];
    this.tableservice.addTable(this.tableNum, "waiter", true, this.orderMessage);
  }

  printOrder(){
  }

  submitOrder(){
    this.menuDiv.remove();
    this.notify.toast({
      message: "ההזמנה נשלחה למטבח"
    });
    this.totalOfSum();
    this.orderservice.addOrder(this.table, this.totalSum, this.orderMessage);
  }

  totalOfSum(){
  }

  printMenu(menuItems: WaiterMenuItem[]){
    this.str = "";
    for(let menuitem of menuItems){
      this.str = this.str + "<ion-button>"+menuitem.name+" "+menuitem.price+" "+"</ion-button>"+"\n"
    }
    this.menuDiv.innerHTML = this.str;
    document.body.appendChild(this.menuDiv);
  }
}
