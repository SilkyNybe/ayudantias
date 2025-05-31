import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ayudantia } from '../../core/models/ayudantias.model';

@Injectable({ providedIn: 'root' })
export class AyudantiasService {
  private API_URL = 'http://localhost:3000/api/ayudantias';

  constructor(private http: HttpClient) {}

  getAyudantias() {
    return this.http.get<Ayudantia[]>(this.API_URL);
  }

  getAyudantia(id: number) {
    return this.http.get<Ayudantia>(`${this.API_URL}/${id}`);
  }

  crearAyudantia(ayudantia: Ayudantia) {
    return this.http.post<Ayudantia>(this.API_URL, ayudantia);
  }

  actualizarAyudantia(id: number, ayudantia: Ayudantia) {
    return this.http.put<Ayudantia>(`${this.API_URL}/${id}`, ayudantia);
  }

  eliminarAyudantia(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
