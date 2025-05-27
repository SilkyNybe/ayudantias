import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscritasPageRoutingModule } from './inscritas-routing.module';

import { InscritasPage } from './inscritas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscritasPageRoutingModule
  ],
  declarations: [InscritasPage]
})
export class InscritasPageModule {}
