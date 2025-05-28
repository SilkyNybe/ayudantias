import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
  standalone:false
})
export class RecuperarPage {
  sent = false;
  loading = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  handleSubmit() {
    if (this.form.invalid) return;

    this.loading = true;

    setTimeout(() => {
      this.sent = true;
      this.loading = false;
    }, 1000);
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
