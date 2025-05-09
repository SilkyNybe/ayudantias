import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonHeader, IonButton, IonLabel } from "@ionic/angular/standalone";

@Component({
  standalone:false,
  selector: 'app-register',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  userData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'ayudante'
  };

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {}

  isFormValid(): boolean {
    return (
      this.userData.username.trim() !== '' &&
      this.userData.email.trim() !== '' &&
      this.userData.password.trim() !== '' &&
      this.userData.confirmPassword.trim() !== '' &&
      this.userData.password === this.userData.confirmPassword
    );
  }

  register() {
    if (!this.isFormValid()) {
      return;
    }

    // Aquí iría tu lógica de registro
    console.log('Datos de registro:', this.userData);
    
    // Ejemplo de navegación después de registro
    // this.navCtrl.navigateForward('/login');
  }
}