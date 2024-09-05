import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestApprovalRoutingModule } from './request-approval-routing.module';
import { RequestApprovalComponent } from './request-approval.component';


@NgModule({
  declarations: [
    RequestApprovalComponent
  ],
  imports: [
    CommonModule,
    RequestApprovalRoutingModule
  ]
})
export class RequestApprovalModule { }
