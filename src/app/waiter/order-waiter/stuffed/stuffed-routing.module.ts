import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuffedPage } from './stuffed.page';

const routes: Routes = [
  {
    path: '',
    component: StuffedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuffedPageRoutingModule {}
