import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-select',
    loadChildren: () => import('./page-select/page-select.module').then( m => m.PageSelectPageModule)
  },
  {
    path: 'page-review',
    loadChildren: () => import('./page-review/page-review.module').then( m => m.PageReviewPageModule)
  },
  {
    path: 'page-read-review',
    loadChildren: () => import('./page-read-review/page-read-review.module').then( m => m.PageReadReviewPageModule)
  },
  {
    path: 'page-detail-review/:sendobj',
    loadChildren: () => import('./page-detail-review/page-detail-review.module').then( m => m.PageDetailReviewPageModule)
  },
  {
    path: 'page-edit/:sendedit',
    loadChildren: () => import('./page-edit/page-edit.module').then( m => m.PageEditPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
