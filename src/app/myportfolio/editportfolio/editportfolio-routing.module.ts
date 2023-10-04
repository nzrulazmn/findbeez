import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditportfolioPage } from './editportfolio.page';

const routes: Routes = [
  {
    path: '',
    component: EditportfolioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditportfolioPageRoutingModule {}
