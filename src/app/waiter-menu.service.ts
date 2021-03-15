import { Injectable } from '@angular/core';
import { WaiterMenuItem } from './WaiterMenuItem.model';

@Injectable({
  providedIn: 'root'
})
export class WaiterMenuService {

  private _appetizers: WaiterMenuItem[]=[
    {
      name:'Hummus',
      price:20
    },
    {
      name:'Tehina',
      price: 15
    }
  ]

  private _soupd: WaiterMenuItem[]=[
    {
      name:'adashim',
      price:25
    },
    {
      name:'Basar',
      price: 25
    }
  ]

  private _stuffed: WaiterMenuItem[]=[
    {
      name:'Ma7ashi',
      price:30
    },
    {
      name:'Dawali',
      price: 20
    }
  ]

  private _mainMeal: WaiterMenuItem[]=[
    {
      name:'Kebab',
      price:40
    },
    {
      name:'Shnitzel',
      price: 35
    }
  ]
  
  private _drinks: WaiterMenuItem[]=[
    {
      name:'cola',
      price:10
    },
    {
      name:'soda',
      price: 8
    }
  ]
  
  private _desserts: WaiterMenuItem[]=[
    {
      name:'ice Cream',
      price:15
    },
  ]

  constructor() { }

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
