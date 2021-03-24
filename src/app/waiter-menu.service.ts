import { Injectable } from '@angular/core';
import { WaiterMenuItem } from './WaiterMenuItem.model';
import { Order } from './Order.model';

@Injectable({
  providedIn: 'root'
})
export class WaiterMenuService {

  private _appetizers: WaiterMenuItem[]=[
    {
      name:'Hummus',
      price:20,
      id: 1
    },
    {
      name:'Tehina',
      price: 15,
      id:2
    }
  ]

  private _soupd: WaiterMenuItem[]=[
    {
      name:'adashim',
      price:25,
      id:3
    },
    {
      name:'Basar',
      price: 25,
      id:4
    }
  ]

  private _stuffed: WaiterMenuItem[]=[
    {
      name:'Ma7ashi',
      price:30,
      id:5
    },
    {
      name:'Dawali',
      price: 20,
      id:6
    }
  ]

  private _mainMeal: WaiterMenuItem[]=[
    {
      name:'Kebab',
      price:40,
      id:7
    },
    {
      name:'Shnitzel',
      price: 35,
      id:8
    }
  ]
  
  private _drinks: WaiterMenuItem[]=[
    {
      name:'cola',
      price:10,
      id:9
    },
    {
      name:'soda',
      price: 8,
      id:10
    }
  ]
  
  private _desserts: WaiterMenuItem[]=[
    {
      name:'ice Cream',
      price:15,
      id:11
    },
  ]

  constructor() {}

  get Appetizers(){
    return [...this._appetizers];
  }
  get Soups(){
    return [...this._soupd];
  }
  get Stuffed(){
    return [...this._stuffed];
  }
  get MainMeal(){
    return [...this._mainMeal];
  }
  get Drinks(){
    return [...this._drinks];
  }
  get Desserts(){
    return [...this._desserts];
  }
}
