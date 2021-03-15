import { Component, OnInit } from '@angular/core';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';
import { WaiterMenuService } from 'src/app/waiter-menu.service';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.page.html',
  styleUrls: ['./appetizers.page.scss'],
})
export class AppetizersPage implements OnInit {
  appetizers : WaiterMenuItem[];
  constructor(private menu: WaiterMenuService) { }

  ngOnInit() {
    this.appetizers = this.menu.Appetizers;
  }



}
