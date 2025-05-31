import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./frontend/pantallas/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./frontend/pantallas/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./frontend/pantallas/recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./frontend/pantallas/ayudantias/ayudantias.module').then(m => m.AyudantiasPageModule)
  },
  {
    path: 'ayudantias',
    loadChildren: () => import('./frontend/pantallas/ayudantias/ayudantias.module').then(m => m.AyudantiasPageModule)
  },
  {
    path: 'inscritas',
    loadChildren: () => import('./frontend/pantallas/inscritas/inscritas.module').then(m => m.InscritasPageModule)
  },
  {
    path: 'votaciones',
    loadChildren: () => import('./frontend/pantallas/votaciones/votaciones.module').then(m => m.VotacionesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./frontend/pantallas/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./frontend/pantallas/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}