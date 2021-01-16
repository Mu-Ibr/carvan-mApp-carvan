import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkersService } from 'src/app/workers.service';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.page.html',
  styleUrls: ['./worker-profile.page.scss'],
})
export class WorkerProfilePage implements OnInit {

  constructor() {
   }

  ngOnInit() {  }

}
