import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditportfolioPageRoutingModule } from './editportfolio-routing.module';

import { EditportfolioPage } from './editportfolio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditportfolioPageRoutingModule
  ],
  declarations: [EditportfolioPage]
})
export class EditportfolioPageModule {}
