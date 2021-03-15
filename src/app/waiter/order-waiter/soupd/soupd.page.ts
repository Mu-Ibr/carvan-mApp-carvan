import { Component, OnInit } from '@angular/core';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';

@Component({
  selector: 'app-soupd',
  templateUrl: './soupd.page.html',
  styleUrls: ['./soupd.page.scss'],
})
export class SoupdPage implements OnInit {
  soups : WaiterMenuItem[];
  constructor(private menu: WaiterMenuService) { }

  ngOnInit() {
    this.soups = this.menu.Soups;
  }

}
