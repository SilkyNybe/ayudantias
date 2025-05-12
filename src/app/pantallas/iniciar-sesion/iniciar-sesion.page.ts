import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonContent, IonGrid, IonInput, IonCol } from "@ionic/angular/standalone";

@Component({
  standalone:false,
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  login() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }

}
