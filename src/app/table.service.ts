import { Injectable } from '@angular/core';
import { Order } from './Order.model';
import { Table } from './Table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private _tables: Table[] = [];
  private orderedItems: Order[] = [];

  constructor() {
    for(let i=0; i<25; i++){
      this._tables.push(new Table(i+1,"",false,null));  
    }
  }


  addTable(num:number, name:string, isTaken:boolean, ordered: string[]){
    for(let table of this._tables){
      if(table.num == num){
        table.isTaken = isTaken;
        table.name = name;
        table.ordered = ordered;
        this.addOrderedItems(num, ordered);
        break;
      }
    }
  }

  isTaken(tableNum: number){
    for(let table of this._tables){
      if(table.num == tableNum){
        if(table.isTaken == true)
          return true;
      }
    }
    return false;
  }

  get table(){
    return[...this._tables];
  }

  getTableByNumber(tableNum: number){
    for(let table of this._tables){
      if(table.num == tableNum){
          return table;
          break;
      }
    }
    return null;
  }
  
  getAllOrderedItems(){
    let str = [];
    for(let orders of this.orderedItems){
      if(orders.orderItem)
        str.push(orders.orderItem);
    }
    return str;
  }

  getOrderedItems(tableNum: number){
    for(let order of this.orderedItems){
      if(order.table.num == tableNum){
        return order.table.ordered;
      }
    }
  }

  addOrderedItems(tableNum: number, orderItem: string[]){
    for(let order of this.orderedItems){
      if(order.table.num == tableNum){
        order.table.ordered = orderItem;
      }
    }
  }

  removeTable(tableNum: number){
    for(let table of this._tables){
      if(table.num == tableNum){
        table.isTaken = false;
        table.name = "";
        table.ordered = null;
        break;
      }
    }
  }
}
