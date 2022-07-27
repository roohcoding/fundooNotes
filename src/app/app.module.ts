import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ForgotEmailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
