export interface PropuestaAyudantia {
  id_prop: number;
  id_usu: number;
  nombre_prop: string;
  descripcion_prop: string;
  estado: string;
  votos?: number;
}