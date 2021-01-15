import { Injectable } from '@angular/core';
import { Worker } from './Worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private workers: Worker[] = [
    {
      id:'w1',
      name:'מוחמד איברהים',
      imageUrl: 'https://avatars0.githubusercontent.com/u/35499309?s=400&u=2a9f6da2bf22666f2b60ec781c5d02c70beb2213&v=4',
      type: 'מנהל'
    },
    {
      id:'w2',
      name:'מוסא אבו גוש',
      imageUrl: 'https://www.theguardian.com/us-news/2020/may/09/obama-leaked-conversation-us-rule-of-law-at-risk-flynn-case-dropped#img-1',
      type: 'מנהל'
    }
  ]
  constructor() {}

  getAllWorkers(){
    return [...this.workers];
  }

  getWorker(workerId: string){
    return {
      ...this.workers.find(work=>{
        return work.id === workerId;
      })
    }
  }

  deleteWorker(workerId: string){
    this.workers = this.workers.filter(worker => {
      return worker.id !== workerId;
    });
  }
}
