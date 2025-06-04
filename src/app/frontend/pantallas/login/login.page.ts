import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone:false,
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.loginForm = this.fb.group({
      correo_usu: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  async onLogin() {
    if (this.loginForm.invalid) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, ingresa correo y contraseña válidos.',
        duration: 2000,
        color: 'warning'
      });
      await toast.present();
      return;
    }

    const { correo_usu, contrasena } = this.loginForm.value;
    this.authService.login({ correo_usu, contrasena }).subscribe({
      next: async (res: any) => {
        this.navCtrl.navigateRoot('/home');
      },
      error: async (err: any) => {
        const mensaje = err.error?.message || 'Credenciales inválidas.';
        const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }
    });
  }
}
