export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    titulo: string;
    sobreMi: string;

    constructor(nombre: string, apellido: string, titulo:string, sobreMi: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.sobreMi = sobreMi;
    }
}
