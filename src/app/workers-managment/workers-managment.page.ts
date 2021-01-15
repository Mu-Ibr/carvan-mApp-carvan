import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../workers.service';
import {Worker} from '../Worker.model'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workers-managment',
  templateUrl: './workers-managment.page.html',
  styleUrls: ['./workers-managment.page.scss'],
})
export class WorkersManagmentPage implements OnInit {
  workers: Worker[];
  worker: Worker;
  constructor(
    private workerService: WorkersService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.workers = this.workerService.getAllWorkers();
  }


}
