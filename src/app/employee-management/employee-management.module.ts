import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeManagementRoutingModule
  ]
})
export class EmployeeManagementModule { }
