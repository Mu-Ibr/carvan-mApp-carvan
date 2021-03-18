import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../Expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {

  expenses: Expense[];
  sum: number;

  constructor(
    private exepnseService: ExpensesService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.expenses = this.exepnseService.getExpenses();
    this.sum = this.exepnseService.getSumofAll();
  }

  
  async addNewExpense() {
    const alert = await this.alertController.create({
      header: 'הוסף',
      inputs: [
        {
          name: 'nameFor',
          id: 'nameFor',
          type: 'text',
          placeholder: 'למען'
        },
        {
          name: 'amount',
          id: 'amount',
          type: 'number',
          placeholder: 'סכום'
        },
        {
          name: 'dueDate',
          id: 'dueDate',
          type: 'date',
          placeholder: 'לתאריך'
        },
        {
          name:'type',
          id:'type',
          type: 'text',
          placeholder:'סוג'
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
            if(!data.amount)
              data.amount = 0;
            this.expenses.push(new Expense(data.nameFor, data.amount, data.dueDate, data.type));
            this.exepnseService.expensesArr.push(new Expense(data.nameFor, data.amount, data.dueDate, data.type));
            this.exepnseService.addSum(parseInt(data.amount));
            this.sumExpenses();
          }
        }
      ]
    });
    await alert.present();
  }

  removeItem(item){
    let index = this.expenses.indexOf(item);
    if(index > -1){
      this.exepnseService.removeSum(item.amount);
      this.expenses.splice(index, 1);
      this.exepnseService.expensesArr.splice(index, 1);
    }
    this.sum = this.exepnseService.getSumofAll();
  }
  
  sumExpenses(){
    this.sum = this.exepnseService.getSumofAll();
  }

}
