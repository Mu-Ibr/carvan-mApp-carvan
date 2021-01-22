import { Component, OnInit } from '@angular/core';
import { Table } from '../Table.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.page.html',
  styleUrls: ['./waiter.page.scss'],
})
export class WaiterPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }

  table: Table;

  ngOnInit() { }

  SelectClicked(tableNum){
    this.table = new Table(tableNum,"waiter");
    this.router.navigate(['/order-waiter']);
  }

}
