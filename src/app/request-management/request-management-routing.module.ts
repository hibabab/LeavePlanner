import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestManagementComponent } from './request-management.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestFormComponent } from '../RequestManagement/request-form/request-form.component';

const routes: Routes = [{ path: '', component: RequestManagementComponent },
  {path:'listecomponent',component:RequestListComponent},
  {path:'ok',component:RequestListComponent},
  {path:'form',component:RequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestManagementRoutingModule { }
