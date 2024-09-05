import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'RequestManagement', loadChildren: () => import('./request-management/request-management.module').then(m => m.RequestManagementModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'approve-request', loadChildren: () => import('./request-approval/request-approval.module').then(m => m.RequestApprovalModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
