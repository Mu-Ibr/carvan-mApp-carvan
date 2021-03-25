import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrderWaiterPage } from './waiter/order-waiter/order-waiter.page';

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
    path: 'budget-managment',
    loadChildren: () => import('./budget-managment/budget-managment.module').then( m => m.BudgetManagmentPageModule)
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
    path: 'cash-flow',
    loadChildren: () => import('./cash-flow/cash-flow.module').then( m => m.CashFlowPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'sales-report',
    loadChildren: () => import('./sales-report/sales-report.module').then( m => m.SalesReportPageModule)
  },
  {
    path: 'waiter',
    loadChildren: () => import('./waiter/waiter.module').then( m => m.WaiterPageModule)
  },
  {
    path: 'order-waiter',
    loadChildren: () => import('./waiter/order-waiter/order-waiter.module').then( m => m.OrderWaiterPageModule)
  },
  {
    path: 'kitchen',
    loadChildren: () => import('./kitchen/kitchen.module').then( m => m.KitchenPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
