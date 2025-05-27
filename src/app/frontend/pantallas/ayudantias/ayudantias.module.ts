import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudantiasPageRoutingModule } from './ayudantias-routing.module';

import { AyudantiasPage } from './ayudantias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudantiasPageRoutingModule
  ],
  declarations: [AyudantiasPage]
})
export class AyudantiasPageModule {}
