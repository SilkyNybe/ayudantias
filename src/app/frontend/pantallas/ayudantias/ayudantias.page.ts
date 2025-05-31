import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AyudantiasService } from '../../servicios/ayudantias.service';
import { Ayudantia } from '../../../core/models/ayudantias.model';

@Component({
  selector: 'app-ayudantias',
  templateUrl: './ayudantias.page.html',
  styleUrls: ['./ayudantias.page.scss'],
  standalone: false
})
export class AyudantiasPage implements OnInit {

  ayudantias: Ayudantia[] = [];
  searchTerm = '';
  selectedEstado = 'Todas';
  carreras: string[] = [];

  constructor(
    private router: Router,
    private ayudantiasService: AyudantiasService
  ) {}

  get filteredAyudantias() {
    return this.ayudantias.filter((ayudantia) => {
      const search = this.searchTerm.toLowerCase();
      const matchesSearch =
        ayudantia.nombre.toLowerCase().includes(search) ||
        ayudantia.tema.toLowerCase().includes(search);
      const matchesEstado =
        this.selectedEstado === 'Todas' || ayudantia.estado === this.selectedEstado;
      return matchesSearch && matchesEstado;
    });
  }

  ngOnInit() {
    this.ayudantiasService.getAyudantias().subscribe((data) => {
      this.ayudantias = data;
      this.carreras = [...new Set(this.ayudantias.map(a => a.tema))];
      this.selectedEstado = 'Todas';
    });
  }

  irADetalle(id: number) {
    this.router.navigate([`/ayudantia/${id}`]);
  }

  goToAyudantias() {
    this.router.navigate(['/ayudantias']);
  }
  goToInscritas() {
    this.router.navigate(['/inscritas']);
  }
  goToPerfil() {
    this.router.navigate(['/perfil']);
  }
  goToVotaciones() {
    this.router.navigate(['/votaciones']);
  }

  estado = ['Todas', 'Disponible', 'Llena'];
}
