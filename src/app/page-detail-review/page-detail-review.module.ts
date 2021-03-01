import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDetailReviewPageRoutingModule } from './page-detail-review-routing.module';

import { PageDetailReviewPage } from './page-detail-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDetailReviewPageRoutingModule
  ],
  declarations: [PageDetailReviewPage]
})
export class PageDetailReviewPageModule {}
