import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage {
  loading = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  async handleLogin() {
    if (this.form.invalid) return;

    this.loading = true;

    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'Estudiante');
      localStorage.setItem('userName', 'Juan Pérez');
      localStorage.setItem('userEmail', this.form.value.email!);
      this.navCtrl.navigateForward('/home');
      this.loading = false;
    }, 1000);
  }
}
