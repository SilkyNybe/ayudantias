import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-register',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone:false
})
export class RegistroPage {
  loading = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  async handleSubmit() {
    if (this.form.invalid) return;

    const { password, confirmPassword, name, email } = this.form.value;

    if (password !== confirmPassword) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.loading = true;

    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'Estudiante');
      localStorage.setItem('userName', name!);
      localStorage.setItem('userEmail', email!);
      this.navCtrl.navigateForward('/home');
      this.loading = false;
    }, 1000);
  }
}
