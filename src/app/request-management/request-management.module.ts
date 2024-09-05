import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestManagementRoutingModule } from './request-management-routing.module';
import { RequestManagementComponent } from './request-management.component';
import { FormsModule } from '@angular/forms';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestFormComponent } from '../RequestManagement/request-form/request-form.component';


@NgModule({
  declarations: [
    RequestManagementComponent,
    RequestListComponent,
    RequestFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RequestManagementRoutingModule
  ]
})
export class RequestManagementModule { }
