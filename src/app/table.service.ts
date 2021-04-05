import { Injectable } from '@angular/core';
import { Order } from './Order.model';
import { Table } from './Table.model';
import { WaiterMenuItem } from './WaiterMenuItem.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private tables: Table[] = [];
  private numberOfClinetsPerDay: number;
  private numberofTablesPerDay: number;
  private numberOfCashPayment: number;
  private numberOfCreditCardPayment: number;
  private numberOfCoupon: number;
  private totalIncomeOfOrders: number;

  constructor() {
    for(let i=0; i<28; i++){
      this.tables.push(new Table(i+1,"",false,null,0,0));  
    }
    this.numberOfClinetsPerDay = 0;
    this.numberofTablesPerDay = 0;
    this.totalIncomeOfOrders = 0;
    this.numberOfCashPayment = 0;
    this.numberOfCoupon = 0;
    this.numberOfCreditCardPayment = 0;
  }

  addTable(num:number, name:string, isTaken:boolean, ordered: WaiterMenuItem[], totalSum: number, numberOfClients: number){
    for(let table of this.tables){
      if(table.tableNum == num){
        table.isTaken = isTaken;
        table.waiterName = name;
        table.orderedItems = ordered;
        table.totalSum = totalSum;
        table.numberOfClients = numberOfClients;
        break;
      }
    }
    this.numberofTablesPerDay++;
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
  
  getNumberOfClinetsPerDay(){
    return this.numberOfClinetsPerDay;
  } 

  getNumberofTablesPerDay(){
    return this.numberofTablesPerDay;
  }
  
  getTotalIncomeOfOrders(){
    return this.totalIncomeOfOrders;
  }

  getNumberOfCreditCardPayment(){
    return this.numberOfCreditCardPayment;
  }

  getNumberofCoupon(){
    return this.numberOfCoupon;
  }

  getNumberOfCashPayment(){
    return this.numberOfCashPayment;
  }

  addNumberOfCreditCardPayment(){
    this.numberOfCreditCardPayment++;
  }

  addNumberofCoupon(){
    this.numberOfCoupon++;
  }

  addNumberOfCashPayment(){
    this.numberOfCashPayment++;
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
        this.totalIncomeOfOrders+=table.totalSum;
        this.numberOfClinetsPerDay+=table.numberOfClients;
        table.isTaken = false;
        table.waiterName = "";
        table.orderedItems = null;
        table.totalSum = 0;
        table.numberOfClients = 0;
        break;
      }
    }
  }
}
