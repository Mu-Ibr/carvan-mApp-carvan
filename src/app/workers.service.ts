import { Injectable } from '@angular/core';
import { Worker } from './Worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  public workers: Worker[] = [
    {
      id:'r1',
      name: 'מוחמד איברהים',
      imageUrl: 'https://avatars0.githubusercontent.com/u/35499309?s=400&u=2a9f6da2bf22666f2b60ec781c5d02c70beb2213&v=4',
      type: 'מנהל',
      hireYear: 2002,
      phone: '0508783678',
      address: 'abu gosh'
    }
  ]

  constructor() {}


  getAllWorkers(){
    return [...this.workers];
  }

  addWorker(worker:Worker){
    this.workers.push(worker);
  }

  removeWorker(worker: Worker){
    let index = this.workers.indexOf(worker);
    if(index > -1){
      this.workers.splice(index, 1);
    }
  }

  getWorker(workerId: string){
    return {
      ...this.workers.find(work=>{
        return work.id === workerId;
      })
    }
  }
}
