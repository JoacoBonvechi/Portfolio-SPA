export class Estudio {
  id?: number;
  estudio: string;
  porcentaje:string;

  constructor(estudio: string, porcentaje: string) {
    this.estudio = estudio;
    this.porcentaje = porcentaje;
  }
}
