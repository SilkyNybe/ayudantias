import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pantallas/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pantallas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pantallas/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },  {
    path: 'registro',
    loadChildren: () => import('./pantallas/registro/registro.module').then( m => m.RegistroPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
