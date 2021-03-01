import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageReadReviewPage } from './page-read-review.page';

const routes: Routes = [
  {
    path: '',
    component: PageReadReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageReadReviewPageRoutingModule {}
