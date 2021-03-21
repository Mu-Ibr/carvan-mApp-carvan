import { Injectable } from '@angular/core';
import { Table } from './Table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private _tables: Table[] = []

  addTable(num:number, name:string, isTaken:boolean, ordered: string[]){
    this._tables.push(new Table(num,name,isTaken,ordered));
  }

  constructor() { }
  get table(){
    return[...this._tables];
  }
  
}
