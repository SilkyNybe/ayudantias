import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IonHeader, IonSegment } from "@ionic/angular/standalone";

@Component({
  selector: 'app-detalle-inscritas',
  templateUrl: './detalle-inscritas.page.html',
  styleUrls: ['./detalle-inscritas.page.scss'],
  standalone:false
})
export class DetalleInscritasPage {
  tab: string = 'asistencia'

  inscritaData: any = {
    1: {
      asignatura: 'Cálculo I',
      ayudante: 'María González',
      asistencia: [
        { fecha: '2024-01-15', presente: true, tema: 'Introducción a límites' },
        { fecha: '2024-01-17', presente: true, tema: 'Límites laterales' },
        { fecha: '2024-01-22', presente: false, tema: 'Continuidad' },
        { fecha: '2024-01-24', presente: true, tema: 'Derivadas básicas' },
        { fecha: '2024-01-29', presente: true, tema: 'Regla de la cadena' },
      ],
      materiales: [
        { nombre: 'Guía de Límites.pdf', tipo: 'pdf', fecha: '2024-01-15' },
        { nombre: 'Ejercicios Derivadas.docx', tipo: 'doc', fecha: '2024-01-20' },
        { nombre: 'Presentación Continuidad.pptx', tipo: 'ppt', fecha: '2024-01-22' },
        { nombre: 'Formulario Derivadas.pdf', tipo: 'pdf', fecha: '2024-01-25' },
      ],
      comentarios: [
        {
          autor: 'Juan Pérez',
          fecha: '2024-01-25',
          mensaje: 'Excelente explicación de las derivadas, muy clara.',
          rating: 5,
        },
        {
          autor: 'Ana Silva',
          fecha: '2024-01-23',
          mensaje: 'Me gustaría más ejercicios prácticos.',
          rating: 4,
        },
        {
          autor: 'Carlos López',
          fecha: '2024-01-20',
          mensaje: 'La ayudantía me ha ayudado mucho a entender los conceptos.',
          rating: 5,
        },
      ],
    },
  }

  id!: string
  inscrita: any

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.inscrita = this.inscritaData[this.id]
  }

  volver() {
    this.router.navigate(['/inscritas'])
  }

  get presentesCount(): number {
    return this.inscrita.asistencia.filter((a: any) => a.presente).length
  }

  get asistenciaPorcentaje(): number {
    const total = this.inscrita.asistencia.length
    const presentes = this.presentesCount
    return Math.round((presentes / total) * 100)
  }

  getFileIcon(tipo: string): string {
    switch (tipo) {
      case 'pdf':
        return '📄'
      case 'doc':
        return '📝'
      case 'ppt':
        return '📊'
      default:
        return '📁'
    }
  }
}

