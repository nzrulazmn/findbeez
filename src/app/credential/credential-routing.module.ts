import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredentialPage } from './credential.page';

const routes: Routes = [
  {
    path: '',
    component: CredentialPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialPageRoutingModule {}
