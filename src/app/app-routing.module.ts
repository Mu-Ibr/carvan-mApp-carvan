import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'manager-menu',
    loadChildren: () => import('./manager-menu/manager-menu.module').then( m => m.ManagerMenuPageModule)
  },
  {
    path: 'workers-managment',
    loadChildren: () => import('./workers-managment/workers-managment.module').then( m => m.WorkersManagmentPageModule)
  },
  {
    path: 'financial-managment',
    loadChildren: () => import('./financial-managment/financial-managment.module').then( m => m.FinancialManagmentPageModule)
  },
  {
    path: 'inventory-managment',
    loadChildren: () => import('./inventory-managment/inventory-managment.module').then( m => m.InventoryManagmentPageModule)
  },
  {
    path: 'shift-managment',
    loadChildren: () => import('./shift-managment/shift-managment.module').then( m => m.ShiftManagmentPageModule)
  },
  {
    path: 'worker-profile',
    loadChildren: () => import('./worker-profile/worker-profile.module').then( m => m.WorkerProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
