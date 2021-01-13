import { Component, OnInit } from '@angular/core';
import {Worker} from './Worker.model'
@Component({
  selector: 'app-workers-managment',
  templateUrl: './workers-managment.page.html',
  styleUrls: ['./workers-managment.page.scss'],
})
export class WorkersManagmentPage implements OnInit {
  workers: Worker[] = [
    {
      id:'w1',
      name:'Muhammad',
      imageUrl: 'https://avatars0.githubusercontent.com/u/35499309?s=400&u=2a9f6da2bf22666f2b60ec781c5d02c70beb2213&v=4',
      type: 'Manager'
    },
    {
      id:'w2',
      name:'Mussa',
      imageUrl: 'https://www.theguardian.com/us-news/2020/may/09/obama-leaked-conversation-us-rule-of-law-at-risk-flynn-case-dropped#img-1',
      type: 'Manager'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
