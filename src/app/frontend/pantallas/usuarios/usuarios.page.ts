import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../../core/models/usuario.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  standalone:false
})
export class UsuariosPage implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
  this.usuariosService.getUsuarios().subscribe((data) => {
    console.log('Usuarios cargados:', data);  // 👈 Agrega esto
    this.usuarios = data;
  });
}
}

