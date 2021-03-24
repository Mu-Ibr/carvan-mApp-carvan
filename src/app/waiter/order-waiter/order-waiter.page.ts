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

  private menu: String[];
  ordered: Order[];
  table: Table;
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
    this.table.orderedItems = [];
    this.orderMessage = this.table.orderedItems;
    this.menuDiv = document.getElementById("menu");
    this.menuDiv.setAttribute("style"," display: flex;flex-direction: column;justify-content: center;align-items: center; text-align: center; min-height: 100vh;");
  }  

  printOrder(){
    if(this.table.orderedItems==null)
      return;
    this.str = "";
    for(let item of this.table.orderedItems){
      this.str = this.str + "<h5>"+item+"</h5>"+"\n";
    }
    this.str = this.str + "<h4>סהכ: "+this.table.totalSum+"</h4>";
    this.menuDiv.innerHTML = this.str;
    document.body.appendChild(this.menuDiv);
  }

  submitOrder(){
    this.menuDiv.remove();
    this.printMenu;
    this.notify.toast({
      message: "ההזמנה נשלחה למטבח"
    });
    this.totalOfSum;
  }

  totalOfSum(){
  }

  removeTable(){
    this.menuDiv.remove();
    this.tableservice.removeTable(this.tableNum);
    this.getback();
  }

  getback(){
    this.router.navigate(['./waiter']);
  }

  printMenu(menuItems: WaiterMenuItem[]){
    // this.str = "<div id = 'buttons'>\n";
    // for(let menuitem of menuItems){
    //   this.str = this.str + "<ion-button menuitemid='"+menuitem.id+"' (click)='addItem("+menuitem+")'>"+menuitem.name+" "+menuitem.price+" "+"</ion-button>"+"\n";
    //   document.addEventListener('click', (evt)=> this.addItem(menuitem));  
    // }
    // this.str = this.str + "</div>";
    // this.menuDiv.innerHTML = this.str;
    // console.log(this.str);
    // document.body.appendChild(this.menuDiv); 
    for (let menuitem of menuItems) {
      const button = document.createElement("button");
      button.innerText = menuitem.name+" "+menuitem.price;
      button.addEventListener("click", (evt)=> this.addItem(menuitem));
      this.menuDiv.appendChild(button);
    }
  }

  addItem(menuitem: WaiterMenuItem){
     this.table.orderedItems.push(menuitem.name);
     console.log(menuitem.name + " price: "+ menuitem.price);
     this.table.totalSum+=menuitem.price;
  }
}
