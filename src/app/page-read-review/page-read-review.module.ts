import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageReadReviewPageRoutingModule } from './page-read-review-routing.module';

import { PageReadReviewPage } from './page-read-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageReadReviewPageRoutingModule
  ],
  declarations: [PageReadReviewPage]
})
export class PageReadReviewPageModule {}
