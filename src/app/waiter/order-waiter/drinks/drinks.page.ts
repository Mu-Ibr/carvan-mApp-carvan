import { Component, OnInit } from '@angular/core';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  drinks: WaiterMenuItem[];
  constructor(private menu: WaiterMenuService) { }

  ngOnInit() {
    this.drinks = this.menu.Drinks;
  }

}
