import { Injectable } from '@angular/core';
import { Order } from './Order.model';
import { Table } from './Table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private tables: Table[] = [];

  constructor() {
    for(let i=0; i<25; i++){
      this.tables.push(new Table(i+1,"",false,null,0));  
    }
  }

  addTable(num:number, name:string, isTaken:boolean, ordered: string[], totalSum: number){
    for(let table of this.tables){
      if(table.tableNum == num){
        table.isTaken = isTaken;
        table.waiterName = name;
        table.orderedItems = ordered;
        table.totalSum = totalSum;
        break;
      }
    }
  }

  isTaken(tableNum: number){
    for(let table of this.tables){
      if(table.tableNum == tableNum){
        if(table.isTaken == true)
          return true;
      }
    }
    return false;
  }

  getTables(){
    return[...this.tables];
  }

  getTableByNumber(tableNum: number){
    for(let table of this.tables){
      if(table.tableNum == tableNum){
          return table;
          break;
      }
    }
    return null;
  }
  
  removeTable(tableNum: number){
    for(let table of this.tables){
      if(table.tableNum == tableNum){
        table.isTaken = false;
        table.waiterName = "";
        table.orderedItems = [];
        table.totalSum = 0;
        break;
      }
    }
  }
}
