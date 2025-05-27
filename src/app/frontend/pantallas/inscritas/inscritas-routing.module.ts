import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscritasPage } from './inscritas.page';

const routes: Routes = [
  {
    path: '',
    component: InscritasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscritasPageRoutingModule {}
