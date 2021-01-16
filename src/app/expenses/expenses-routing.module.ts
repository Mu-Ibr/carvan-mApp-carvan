import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesPage } from './expenses.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensesPage
  },
  {
    path: 'add-expense',
    loadChildren: () => import('./add-expense/add-expense.module').then( m => m.AddExpensePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesPageRoutingModule {}
