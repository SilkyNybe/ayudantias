import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleInscritasPageRoutingModule } from './detalle-inscritas-routing.module';

import { DetalleInscritasPage } from './detalle-inscritas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleInscritasPageRoutingModule
  ],
  declarations: [DetalleInscritasPage]
})
export class DetalleInscritasPageModule {}
