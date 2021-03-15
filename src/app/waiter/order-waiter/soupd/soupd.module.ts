import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoupdPageRoutingModule } from './soupd-routing.module';

import { SoupdPage } from './soupd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoupdPageRoutingModule
  ],
  declarations: [SoupdPage]
})
export class SoupdPageModule {}
