import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostingPageRoutingModule } from './posting-routing.module';

import { PostingPage } from './posting.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostingPageRoutingModule
  ],
  declarations: [PostingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostingPageModule {}
