import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from './../profile/profile.page';


interface Doctor {
  avatar: string;
  name: string;
  specialty: string;
  status: boolean;
  sala: string;
  tema: string;
}

interface Categories {
  color: string;
  bkColor: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:false
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.3,
  };

  doctors: Doctor[] = [
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Programación de aplicaciones móviles',
      name: 'Camilo Hernán Salinas Henríquez',
      status: true,
      sala: 'LC-08',
      tema: 'Frameworks y como utilizarlos.'
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Programación software de escritorio',
      name: 'Esteban Nicolas Rójel Galleguillos',
      status: false,
      sala: 'LC-11',
      tema: 'Creación de frontend para implementación de Backend.'
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Programación de base de datos',
      name: 'Danae Ailén Curín Anabalón',
      status: false,
      sala: 'LC-09',
      tema: 'Programación e implementación de base de datos remota.'
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Ética para el trabajo',
      name: 'Mosiah Patricio Kolov Estrada',
      status: false,
      sala: 'SP-03',
      tema: 'No robar, ta mal robar.'
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Proceso de Portafolio Titulo',
      name: 'Fernanda Soto',
      status: false,
      sala: 'SP-04',
      tema: 'Denme mi cartón porfavor.'
    }
  ];

  categories: Categories[] = [
    {
      name: 'P.A.M',
      bkColor: '#4b0082',
      color: 'white',
      icon: 'heart-outline'
    },
    {
      name: 'P.S.E',
      bkColor: '#a2c3f7',
      color: 'black',
      icon: 'skull-outline'
    },
    {
      name: 'P.B.D.B',
      bkColor: '#f7be3021',
      color: 'black',
      icon: 'heart-outline'
    },
    {
      name: 'E.P.T',
      bkColor: '#a2c3f7',
      color: 'black',
      icon: 'skull-outline'
    },
    {
      name: 'P.P.F',
      bkColor: '#f7be3021',
      color: 'black',
      icon: 'heart-outline'
    }
  ];

  constructor(
    private modalController: ModalController
  ) { }

  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage,
    });
    await modal.present();
  }
}
