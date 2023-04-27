export class Estudio {
  id!: number;
  estudio: string;
  porcentaje:string;
  personaid: number;

  constructor(estudio: string, porcentaje: string, personaid:number) {
    this.estudio = estudio;
    this.porcentaje = porcentaje;
    this.personaid = personaid
  }
}
