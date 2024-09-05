import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestApprovalComponent } from './request-approval.component';

const routes: Routes = [{ path: '', component: RequestApprovalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestApprovalRoutingModule { }
