import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSelectPage } from './page-select.page';

const routes: Routes = [
  {
    path: '',
    component: PageSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSelectPageRoutingModule {}
