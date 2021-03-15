import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMealPage } from './main-meal.page';

const routes: Routes = [
  {
    path: '',
    component: MainMealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMealPageRoutingModule {}
