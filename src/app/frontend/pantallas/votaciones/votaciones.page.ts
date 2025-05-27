import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votaciones',
  templateUrl: './votaciones.page.html',
  styleUrls: ['./votaciones.page.scss'],
  standalone:false
})
export class VotacionesPage implements OnInit {

  votaciones = [
    {
      id: 1,
      asignatura: 'Estadística Avanzada',
      solicitante: 'Pedro Martínez',
      fechaLimite: '2024-02-15',
      votos: { aceptar: 45, rechazar: 12 },
      estado: 'Activa',
      descripcion: 'Ayudantía para estadística inferencial y análisis de datos',
    },
    {
      id: 2,
      asignatura: 'Química Orgánica',
      solicitante: 'Laura Fernández',
      fechaLimite: '2024-02-10',
      votos: { aceptar: 32, rechazar: 8 },
      estado: 'Activa',
      descripcion: 'Enfoque en reacciones orgánicas y síntesis',
    },
    {
      id: 3,
      asignatura: 'Inteligencia Artificial',
      solicitante: 'Miguel Torres',
      fechaLimite: '2024-02-05',
      votos: { aceptar: 67, rechazar: 15 },
      estado: 'Aprobada',
      descripcion: 'Machine Learning y redes neuronales',
    },
  ]

  nuevaAsignatura = ''
  descripcion = ''
  mostrarModal = false

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  votar(id: number, tipo: 'aceptar' | 'rechazar') {
    this.votaciones = this.votaciones.map((v) => {
      if (v.id === id) {
        return {
          ...v,
          votos: {
            ...v.votos,
            [tipo]: v.votos[tipo] + 1,
          },
        }
      }
      return v
    })
  }

  getPorcentajeAceptar(votacion: any): number {
    const total = votacion.votos.aceptar + votacion.votos.rechazar
    return total > 0 ? Math.round((votacion.votos.aceptar / total) * 100) : 0
  }

  getTotalVotos(votacion: any): number {
    return votacion.votos.aceptar + votacion.votos.rechazar
  }

  getDiasRestantes(fechaLimite: string): number {
    const hoy = new Date()
    const limite = new Date(fechaLimite)
    const diferencia = limite.getTime() - hoy.getTime()
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24))
  }

  abrirModal() {
    this.mostrarModal = true
  }

  cerrarModal() {
    this.mostrarModal = false
  }

  proponer() {
    if (this.nuevaAsignatura.trim()) {
      const nueva = {
        id: Date.now(),
        asignatura: this.nuevaAsignatura,
        solicitante: 'Tú',
        fechaLimite: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
        votos: { aceptar: 0, rechazar: 0 },
        estado: 'Activa',
        descripcion: this.descripcion || 'Sin descripción',
      }
      this.votaciones = [nueva, ...this.votaciones]
      this.nuevaAsignatura = ''
      this.descripcion = ''
      this.cerrarModal()
    }
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
