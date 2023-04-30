import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'forgot',component:ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
