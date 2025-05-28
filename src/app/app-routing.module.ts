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
    loadChildren: () => import('./presentation/pantallas/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./presentation/pantallas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./presentation/pantallas/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./presentation/pantallas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'ayudantias',
    loadChildren: () => import('./frontend/pantallas/ayudantias/ayudantias.module').then( m => m.AyudantiasPageModule)
  },
  {
    path: 'inscritas',
    loadChildren: () => import('./frontend/pantallas/inscritas/inscritas.module').then( m => m.InscritasPageModule)
  },
  {
    path: 'votaciones',
    loadChildren: () => import('./frontend/pantallas/votaciones/votaciones.module').then( m => m.VotacionesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./frontend/pantallas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'detalle-inscritas',
    loadChildren: () => import('./frontend/pantallas/detalle-inscritas/detalle-inscritas.module').then( m => m.DetalleInscritasPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./frontend/pantallas/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./frontend/pantallas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./frontend/pantallas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-contrasenia',
    loadChildren: () => import('./frontend/pantallas/recuperar-contrasenia/recuperar-contrasenia.module').then( m => m.RecuperarContraseniaPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./frontend/pantallas/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
