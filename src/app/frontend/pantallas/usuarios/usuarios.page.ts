import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service'
import { Usuario } from '../../../core/models/usuario.model'
import { IonHeader, IonToolbar, IonItem, IonLabel, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  standalone:false
})
export class UsuariosPage implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
}

