import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../inventory.model';

@Component({
  selector: 'app-inventory-managment',
  templateUrl: './inventory-managment.page.html',
  styleUrls: ['./inventory-managment.page.scss'],
})
export class InventoryManagmentPage implements OnInit {
  inventories: Inventory[];
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventories = this.inventoryService.getAllInventory();
  }

  addNewItem(){
    this.inventories.push(new Inventory("item",0,0));
  }
}
