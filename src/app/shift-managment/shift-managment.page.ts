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
 
  dateRange: { from: string; to: string; };
  type: 'string';
  workers: Worker[];
  add_to_schedule :Worker[];
  
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor(private workersService: WorkersService) { 
    this.add_to_schedule = [];
  }
  ngOnInit() {
    this.workers = this.workersService.getAllWorkers();
  }

  addToSchedule(worker: Worker){
    this.add_to_schedule.push(worker);
  }

}