import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-shift-managment',
  templateUrl: './shift-managment.page.html',
  styleUrls: ['./shift-managment.page.scss'],
})
export class ShiftManagmentPage implements OnInit {
 
  dateRange: { from: string; to: string; };
  type: 'string';
  
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor() { }
  ngOnInit() {
  }

}
