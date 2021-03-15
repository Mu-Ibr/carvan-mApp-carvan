import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuffedPageRoutingModule } from './stuffed-routing.module';

import { StuffedPage } from './stuffed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuffedPageRoutingModule
  ],
  declarations: [StuffedPage]
})
export class StuffedPageModule {}
