import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { WorkersService } from '../workers.service';
import { Worker } from '../Worker.model'

@Component({
  selector: 'app-shift-managment',
  templateUrl: './shift-managment.page.html',
  styleUrls: ['./shift-managment.page.scss'],
})
export class ShiftManagmentPage implements OnInit {

  constructor(){}
  
  ngOnInit() {}
}