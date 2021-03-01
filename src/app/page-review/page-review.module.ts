import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageReviewPageRoutingModule } from './page-review-routing.module';

import { PageReviewPage } from './page-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageReviewPageRoutingModule
  ],
  declarations: [PageReviewPage]
})
export class PageReviewPageModule {}
