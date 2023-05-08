export class Estudio {
  id?: number;
  estudio: string;
  porcentaje:string;
  personaid?: number;
  color?: string;

  constructor(estudio: string, porcentaje: string, color:string) {
    this.estudio = estudio;
    this.porcentaje = porcentaje;
    this.color = color;
  }
}
