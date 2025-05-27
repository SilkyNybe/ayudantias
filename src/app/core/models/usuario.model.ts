export class Usuario {
  constructor(
    public id: number,
    public rut: string,
    public nombre: string,
    public apellido: string,
    public correo: string,
    public rol_id: number
  ) {}
}
