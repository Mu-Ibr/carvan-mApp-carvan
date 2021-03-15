import { Component, OnInit } from '@angular/core';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.page.html',
  styleUrls: ['./desserts.page.scss'],
})
export class DessertsPage implements OnInit {
  desserts : WaiterMenuItem[];
  constructor(private menu: WaiterMenuService) { }

  ngOnInit() {
    this.desserts = this.menu.Desserts;
  }

}
