// src/app/frontend/servicios/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface LoginData { correo_usu: string; contrasena: string; }
interface LoginResponse {
  token: string;
  usuario: { id_usu: number; nombre_usu: string; correo_usu: string; id_rol: number; };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(data: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, data).pipe(
      tap((res: LoginResponse) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.usuario));
        }
      })
    );
  }

  register(data: {
    nombre_usu: string;
    apellido_usu: string;
    correo_usu: string;
    telefono: string;
    contrasena: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/registro`, data);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
