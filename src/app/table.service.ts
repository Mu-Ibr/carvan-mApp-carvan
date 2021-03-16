import { Injectable } from '@angular/core';
import { Table } from './Table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private _tables: Table[] = []

  addTable(num:number, name:string, isTaken:boolean){
    this._tables.push(new Table(num,name,isTaken));
  }

  constructor() { }
  get table(){
    return[...this._tables];
  }
  
}
