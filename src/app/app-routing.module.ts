import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './_pages/create-user/create-user.component';
import { HomeComponent } from './_pages/home';
import { UserAssignmentComponent } from './_pages/user-assignment/user-assignment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-management/create-request', component: CreateUserComponent },
  { path: 'user-management/user-assignment', component: UserAssignmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
