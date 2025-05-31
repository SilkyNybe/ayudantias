
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../core/models/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private API_URL = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<Usuario[]>(this.API_URL);
  }

  getUsuario(id: number) {
    return this.http.get<Usuario>(`${this.API_URL}/${id}`);
  }

  crearUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.API_URL, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario) {
    return this.http.put<Usuario>(`${this.API_URL}/${id}`, usuario);
  }

  eliminarUsuario(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}

