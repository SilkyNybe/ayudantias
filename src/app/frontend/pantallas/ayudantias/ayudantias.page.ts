import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayudantias',
  templateUrl: './ayudantias.page.html',
  styleUrls: ['./ayudantias.page.scss'],
  standalone:false
})
export class AyudantiasPage implements OnInit {

  searchTerm = '';
  selectedCarrera = 'Todas';

  ayudantias = [
    {
      id: 1,
      asignatura: 'Cálculo I',
      ayudante: 'María González',
      descripcion: 'Ayudantía enfocada en límites y derivadas',
      carrera: 'Ingeniería',
      horario: 'Lun-Mie 14:00-16:00',
      inscritos: 25,
      rating: 4.8,
      disponible: true,
    },
    {
      id: 2,
      asignatura: 'Programación Java',
      ayudante: 'Carlos Ruiz',
      descripcion: 'Fundamentos de programación orientada a objetos',
      carrera: 'Informática',
      horario: 'Mar-Jue 16:00-18:00',
      inscritos: 30,
      rating: 4.9,
      disponible: true,
    },
    {
      id: 3,
      asignatura: 'Física II',
      ayudante: 'Ana López',
      descripcion: 'Electromagnetismo y ondas',
      carrera: 'Ingeniería',
      horario: 'Lun-Vie 10:00-12:00',
      inscritos: 20,
      rating: 4.7,
      disponible: false,
    },
  ];

  constructor(
    private router: Router
  ) { }

  get filteredAyudantias() {
    return this.ayudantias.filter((ayudantia) => {
      const search = this.searchTerm.toLowerCase();
      const matchesSearch =
        ayudantia.asignatura.toLowerCase().includes(search) ||
        ayudantia.ayudante.toLowerCase().includes(search);
      const matchesCarrera =
        this.selectedCarrera === 'Todas' ||
        ayudantia.carrera === this.selectedCarrera;
      return matchesSearch && matchesCarrera;
    });
  }

  irADetalle(id: number) {
    this.router.navigate([`/ayudantia/${id}`]);
  }

  ngOnInit() {
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

  carreras = ['Todas', 'Ingeniería', 'Informática', 'Matemáticas'];
}


