import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path : 'register', component:RegisterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'forgot-email', component:ForgotEmailComponent},
  {path : 'forgot-password', component:ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
