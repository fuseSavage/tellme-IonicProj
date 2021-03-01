import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageReviewPage } from './page-review.page';

const routes: Routes = [
  {
    path: '',
    component: PageReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageReviewPageRoutingModule {}
