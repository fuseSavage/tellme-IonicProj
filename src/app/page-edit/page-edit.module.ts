import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEditPageRoutingModule } from './page-edit-routing.module';

import { PageEditPage } from './page-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEditPageRoutingModule
  ],
  declarations: [PageEditPage]
})
export class PageEditPageModule {}
