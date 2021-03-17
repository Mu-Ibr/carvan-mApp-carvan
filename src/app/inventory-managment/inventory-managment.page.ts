import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../inventory.model';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.inventories = this.inventoryService.getAllInventory();
    this.sum = 0;
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
            this.inventories.push(new Inventory(data.itemName, data.amount, data.total));
            this.sumInventory(data.amount);
          }
        }
      ]
    });
    await alert.present();
  }

  removeItem(item){
    let index = this.inventories.indexOf(item);
    if(index > -1){
      this.inventories.splice(index, 1);
    }
  }

  sumInventory(amount){
    this.sum += amount;
  }

}
