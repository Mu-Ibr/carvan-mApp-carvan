import { Injectable } from '@angular/core';
import { Inventory } from './inventory.model'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventories: Inventory[] = [
    {
      itemName: 'חומוס',
      amount: 20,
      total: 500
    },
    {
      itemName: 'טחינה',
      amount: 30,
      total: 700
    }
  ];


  constructor() { }
  getAllInventory(){
    return [...this.inventories];
  }
}
