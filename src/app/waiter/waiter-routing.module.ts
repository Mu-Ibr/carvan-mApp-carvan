import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderWaiterPageModule } from './order-waiter/order-waiter.module';

import { WaiterPage } from './waiter.page';

const routes: Routes = [
  {
    path: '',
    component: WaiterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterPageRoutingModule {}
