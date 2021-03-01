import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSelectPageRoutingModule } from './page-select-routing.module';

import { PageSelectPage } from './page-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSelectPageRoutingModule
  ],
  declarations: [PageSelectPage]
})
export class PageSelectPageModule {}
