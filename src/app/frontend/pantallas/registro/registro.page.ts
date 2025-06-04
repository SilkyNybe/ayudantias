import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  standalone:false,
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.registerForm = this.fb.group({
      nombre_usu: ['', [Validators.required]],
      apellido_usu: ['', [Validators.required]],
      correo_usu: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.registerForm.invalid) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, completa todos los campos correctamente.',
        duration: 2000,
        color: 'warning'
      });
      await toast.present();
      return;
    }

    const data = this.registerForm.value; // {nombre_usu, apellido_usu, correo_usu, telefono, contrasena}
    this.authService.register(data).subscribe({
      next: async (res: any) => {
        const toast = await this.toastCtrl.create({
          message: 'Registro exitoso. Ya puedes iniciar sesión.',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        this.navCtrl.navigateRoot('/login');
      },
      error: async (err: any) => {
        const mensaje = err.error?.message || 'Error en el registro.';
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
