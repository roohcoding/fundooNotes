import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';


const routes: Routes = [
  {path : 'register', component:RegisterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'forgot-password', component:ForgotPasswordComponent},
  {path : 'reset-password', component:ResetPasswordComponent},
  {path: 'dashboard',component:DashboardComponent,
  children:[
    {path : 'notes', component:GetallnotesComponent},
    {path : 'archive', component:ArchiveComponent},
    {path : 'trash', component:TrashComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
