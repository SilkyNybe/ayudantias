import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone:false
})
export class PerfilPage implements OnInit {

  userData = {
    name: '',
    email: '',
    role: 'Estudiante',
  }

  stats = [
    { icon: 'book-outline', label: 'Ayudantías Inscritas', value: '3', color: 'primary' },
    { icon: 'calendar-outline', label: 'Clases Asistidas', value: '24', color: 'success' },
    { icon: 'git-network-outline', label: 'Votaciones Participadas', value: '8', color: 'tertiary' },
  ]

  achievements = [
    { name: 'Estudiante Comprometido', description: 'Asistencia mayor al 90%', earned: true },
    { name: 'Participativo', description: 'Participó en 5+ votaciones', earned: true },
    { name: 'Mentor Junior', description: 'Ayudó a otros estudiantes', earned: false },
  ]

  constructor(
    private router:Router,
    private navCtrl: NavController
  ) { }

   ionViewWillEnter() {
    this.userData.name = localStorage.getItem('userName') || 'Usuario'
    this.userData.email = localStorage.getItem('userEmail') || 'usuario@instituto.edu'
    this.userData.role = localStorage.getItem('userRole') || 'Estudiante'
  }

  logout() {
    localStorage.clear()
    this.navCtrl.navigateRoot('/login')
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

}
