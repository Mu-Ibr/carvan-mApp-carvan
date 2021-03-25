import { Injectable } from '@angular/core';
import { Inventory } from './inventory.model'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventories: Inventory[]=[]
  sumOfAll: number;

  constructor() {
    this.sumOfAll=0;
   }
  
  getSumofAll(){
    return this.sumOfAll;
  }

  addSum(amount){
    this.sumOfAll = this.sumOfAll + amount;
  }

  removeSum(amount){
    this.sumOfAll = this.sumOfAll - amount;
  }
  
  getAllInventory(){
    return [...this.inventories];
  }

}
