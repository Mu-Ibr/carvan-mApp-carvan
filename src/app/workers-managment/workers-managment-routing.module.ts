import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersManagmentPage } from './workers-managment.page';

const routes: Routes = [
  {
    path: '',
    component: WorkersManagmentPage,
    children: [
      {
        path: 'add-worker',
        loadChildren: () => import('./add-worker/add-worker.module').then( m => m.AddWorkerPageModule)
      },
      {
        path: ':workerId',
        loadChildren: () => import('./worker-profile/worker-profile.module').then( m => m.WorkerProfilePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersManagmentPageRoutingModule {}
