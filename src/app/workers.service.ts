import { Injectable } from '@angular/core';
import { Worker } from './Worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private _workers: Worker[] = []

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
