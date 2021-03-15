import { Component, OnInit } from '@angular/core';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';

@Component({
  selector: 'app-main-meal',
  templateUrl: './main-meal.page.html',
  styleUrls: ['./main-meal.page.scss'],
})
export class MainMealPage implements OnInit {
  mainMeal: WaiterMenuItem[];
  constructor(private menu: WaiterMenuService) { }

  ngOnInit() {
    this.mainMeal = this.menu.MainMeal;
  }

}
