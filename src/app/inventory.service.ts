import { Injectable } from '@angular/core';
import { Inventory } from './inventory.model'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventories: Inventory[]=[
    {
      itemName: 'Hummus',
      amount: 20,
      total: 600
    }, 
    {
      itemName: 'Coca-Cola',
      amount: 10,
      total: 300
    }
  ]

  constructor() { }
  
  getAllInventory(){
    return [...this.inventories];
  }
}
