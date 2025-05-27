import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscritas',
  templateUrl: './inscritas.page.html',
  styleUrls: ['./inscritas.page.scss'],
  standalone:false
})
export class InscritasPage implements OnInit {

  inscritasData = [
    {
      id: 1,
      asignatura: 'Cálculo I',
      ayudante: 'María González',
      progreso: 75,
      proximaClase: 'Lunes 14:00',
      asistencia: 85,
      estado: 'Activa',
    },
    {
      id: 2,
      asignatura: 'Programación Java',
      ayudante: 'Carlos Ruiz',
      progreso: 60,
      proximaClase: 'Martes 16:00',
      asistencia: 90,
      estado: 'Activa',
    },
    {
      id: 3,
      asignatura: 'Álgebra Lineal',
      ayudante: 'Ana López',
      progreso: 100,
      proximaClase: 'Finalizada',
      asistencia: 95,
      estado: 'Completada',
    },
  ];

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  get activas() {
    return this.inscritasData.filter((a) => a.estado === 'Activa').length;
  }

  get promedioAsistencia() {
    return Math.round(
      this.inscritasData.reduce((acc, curr) => acc + curr.asistencia, 0) /
        this.inscritasData.length
    );
  }

  navegarADetalle(id: number) {
    // Aquí podrías usar Router para redirigir: this.router.navigate(['/inscrita', id])
    console.log('Ir a detalle de ayudantía:', id);
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

}
