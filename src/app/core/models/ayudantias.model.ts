import { Time } from "@angular/common";

export class Ayudantia {
    constructor(
        public id: number,
        public id_usuario: number,
        public nombre: string , 
        public tema: string,
        public descripcion: string, 
        public fecha: Date, 
        public hora_ini: Time, 
        public hora_fin: Time,
        public estado: string,
        public asignatura_id: number,
        public sala_id: number) {
    }
  }