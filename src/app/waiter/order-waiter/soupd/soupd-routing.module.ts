import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoupdPage } from './soupd.page';

const routes: Routes = [
  {
    path: '',
    component: SoupdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoupdPageRoutingModule {}
