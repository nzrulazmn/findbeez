import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyportfolioPageRoutingModule } from './myportfolio-routing.module';

import { MyportfolioPage } from './myportfolio.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //n also this

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyportfolioPageRoutingModule
  ],
  declarations: [MyportfolioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //apply this one as well
})
export class MyportfolioPageModule {}
