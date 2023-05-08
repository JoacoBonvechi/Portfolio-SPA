export class Estudio {
  id?: number;
  estudio: string;
  porcentaje:string;
  personaid?: number;

  constructor(estudio: string, porcentaje: string) {
    this.estudio = estudio;
    this.porcentaje = porcentaje;
  }
}
