import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostingPage } from './posting.page';

const routes: Routes = [
  {
    path: '',
    component: PostingPage
  },
  {
    path: 'job',
    loadChildren: () => import('./job/job.module').then( m => m.JobPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostingPageRoutingModule {}
