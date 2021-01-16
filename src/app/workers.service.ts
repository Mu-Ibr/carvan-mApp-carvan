import { Injectable } from '@angular/core';
import { Worker } from './Worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private _workers: Worker[] = [
    {
      id:'r1',
      name: 'Muhammad Ibrahim',
      imageUrl: 'https://avatars0.githubusercontent.com/u/35499309?s=400&u=2a9f6da2bf22666f2b60ec781c5d02c70beb2213&v=4',
      type: 'Manager'
    }
  ]

  constructor() {}

  get workers(){
    return[...this._workers];
  }

  getAllWorkers(){
    return [...this._workers];
  }

  getWorker(workerId: string){
    return {
      ...this._workers.find(work=>{
        return work.id === workerId;
      })
    }
  }
}
