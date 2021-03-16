import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderWaiterPage } from './order-waiter.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/order-waiter/tabs/appetizers',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: OrderWaiterPage,
    children: [
      { path: 'appetizers',
       children:[
        {
          path:'',
          loadChildren:'./appetizers/appetizers.module#AppetizersPageModule'
        }
      ]
    },
    {
      path:'desserts',
      children:[
        {
          path:'',
          loadChildren:'./desserts/desserts.module#DessertsPageModule'
        }
      ]
    },
    {
      path:'drinks',
      children:[
        {
          path:'',
          loadChildren:'./drinks/drinks.module#DrinksPageModule'
        }
      ]
    },
    {
      path:'mainMeal',
      children:[
        {
          path:'',
          loadChildren:'./main-meal/main-meal.module#MainMealPageModule'
        }
      ]
    },
    {
      path:'soupd',
      children:[
        {
          path:'',
          loadChildren:'./soupd/soupd.module#SoupdPageModule'
        }
      ]
    },
    {
      path:'stuffed',
      children:[
        {
          path:'',
          loadChildren:'./stuffed/stuffed.module#StuffedPageModule'
        }
      ]
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderWaiterPageRoutingModule {}