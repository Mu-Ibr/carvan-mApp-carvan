import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ShiftManagmentPageRoutingModule } from './shift-managment-routing.module';

import { ShiftManagmentPage } from './shift-managment.page';

import { CalendarModule } from 'ion2-calendar';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';


export class AppModule { }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftManagmentPageRoutingModule,
    CalendarModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [ShiftManagmentPage],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }],
  bootstrap: [ShiftManagmentPage]
  
})
export class ShiftManagmentPageModule {}
