import { Component, OnInit } from '@angular/core';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';

@Component({
  selector: 'app-stuffed',
  templateUrl: './stuffed.page.html',
  styleUrls: ['./stuffed.page.scss'],
})
export class StuffedPage implements OnInit {
  stuffed : WaiterMenuItem[];
  constructor(private menu: WaiterMenuService) { }

  ngOnInit() {
    this.stuffed = this.menu.Stuffed;
  }

}
