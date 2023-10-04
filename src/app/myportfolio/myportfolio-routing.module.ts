import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyportfolioPage } from './myportfolio.page';

const routes: Routes = [
  {
    path: '',
    component: MyportfolioPage
  },
  {
    path: 'editportfolio',
    loadChildren: () => import('./editportfolio/editportfolio.module').then( m => m.EditportfolioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyportfolioPageRoutingModule {}
