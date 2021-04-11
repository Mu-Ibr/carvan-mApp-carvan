import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryManagmentPage } from './inventory-managment.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryManagmentPage
  },
  // {
  //   path: 'add-item',
  //   loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryManagmentPageRoutingModule {}
