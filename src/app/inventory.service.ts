import { Injectable } from '@angular/core';
import { Inventory } from './inventory.model'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventories: Inventory[]=[]
  sumOfAll: number;

  constructor() { }
  
  getSumOfAll(){
    return this.sumOfAll;
  }

  getAllInventory(){
    return [...this.inventories];
  }

  amount(item){
    return item.amount;
  }
  
  sum(prev, next){
    return prev + next;
  }

  totalSumInventory(){
    this.inventories.map(this.amount).reduce(this.sum);
    this.sumOfAll = this.inventories.map(item => item.amount).reduce((prev, next) => prev + next);
  }
}
