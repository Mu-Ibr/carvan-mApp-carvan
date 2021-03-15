import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMealPageRoutingModule } from './main-meal-routing.module';

import { MainMealPage } from './main-meal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMealPageRoutingModule
  ],
  declarations: [MainMealPage]
})
export class MainMealPageModule {}
