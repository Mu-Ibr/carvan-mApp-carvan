import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../inventory.model';
import { AlertController } from '@ionic/angular';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-inventory-managment',
  templateUrl: './inventory-managment.page.html',
  styleUrls: ['./inventory-managment.page.scss'],
})
export class InventoryManagmentPage implements OnInit {
  inventories: Inventory[];
  sum: number;
  constructor(
    private inventoryService: InventoryService,
    private alertController: AlertController,
    private expenseService: ExpensesService
    ) { }

  ngOnInit() {
    this.inventories = this.inventoryService.getAllInventory();
    this.sum = this.inventoryService.getSumofAll();
  }

  async addNewItem() {
    const alert = await this.alertController.create({
      header: 'הוסף פריט להזמנה',
      inputs: [
        {
          name: 'itemName',
          id: 'name',
          type: 'text',
          placeholder: 'שם הפריט'
        },
        {
          name: 'amount',
          id: 'amount',
          type: 'number',
          placeholder: 'כמות להזמנה'
        },
        {
          name: 'total',
          id: 'total',
          type: 'number',
          placeholder: 'עלות הזמנת הפריט בשקלים '
        }
      ],
      buttons: [
        {
          text: 'ביטול',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'אשר',
          handler: data=>{
            if(!data.total)
              data.total = 0;
            if(!data.amount)
              data.amount = 0;
            this.inventories.push(new Inventory(data.itemName, data.amount, data.total));
            this.inventoryService.inventories.push(new Inventory(data.itemName, data.amount, data.total));
            this.inventoryService.addSum(parseInt(data.total));
            this.expenseService.addExpenseMonth(parseInt(data.total));
            this.sumExpenses();        
          }
        }
      ]
    });
    await alert.present();
  }

  removeItem(item){
    let index = this.inventories.indexOf(item);
    if(index > -1){
      this.inventoryService.removeSum(item.total);
      this.inventories.splice(index, 1);
      this.inventoryService.inventories.splice(index, 1);
    }
    this.sum = this.inventoryService.getSumofAll();
  }
  
  sumExpenses(){
    this.sum = this.inventoryService.getSumofAll();
  }
}
