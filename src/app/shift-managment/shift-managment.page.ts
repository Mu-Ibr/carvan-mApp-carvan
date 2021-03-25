/*import { Component, OnInit } from '@angular/core';
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

}*/
import { Component, OnInit } from '@angular/core';
import { setOptions, Notifications, MbscEventcalendarView, MbscCalendarEvent  } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
import { WorkersService } from '../workers.service';
import { Worker } from '../Worker.model'

setOptions({
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: false,
    dragToCreate: false,
    dragToMove: false,
    dragToResize: false
});


@Component({
    selector: 'app-shift-managment',
    templateUrl: './shift-managment.page.html',
    styleUrls: ['./shift-managment.page.scss'],
    providers: [Notifications]
})
export class ShiftManagmentPage implements OnInit {
  constructor(private http: HttpClient, private notify: Notifications, private workersService: WorkersService) {}

    myEvents: MbscCalendarEvent[] = [];
    filteredEvents: MbscCalendarEvent[] = [];
    selected: number[] = [];
    calView: MbscEventcalendarView = {
        calendar: { labels: true }
    };
    workers: Worker[];
    
    ngOnInit(): void {
      this.workers = this.workersService.workers;
       /*this.http.jsonp < MbscCalendarEvent[] > ('https://trial.mobiscroll.com/custom-events/', 'callback').subscribe((resp) => {
          this.myEvents = resp;
          this.filterEvents(resp, this.selected);
        });*/
    }

    filterEvents = (events: MbscCalendarEvent[], selected: number[]) => {
        const ev = [];
        for (const value of events) {
            const item = value;
            if (selected.indexOf(item.participant) > -1) {
              if(item.participant === selected)
                item.color = 'grey';  
              ev.push(item);
            }
        }
        this.filteredEvents = ev;
    }

    filter(): void {
        this.filterEvents(this.myEvents, this.selected);
        this.notify.toast({
            message: 'Showing '+' schedule'
        });
    }
}
