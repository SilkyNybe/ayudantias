import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleInscritasPage } from './detalle-inscritas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleInscritasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleInscritasPageRoutingModule {}
