import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { Persona } from 'src/app/model/persona';
import { EstudioService } from 'src/app/service/estudio.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  estudio: Estudio[] = [];

  constructor(private estudioS: EstudioService, private tokenService: TokenService, private personaS : PersonaService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    this.cargarSobreMi();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  persona :Persona;

  cargarEducacion(): void{
    this.estudioS.lista().subscribe(
      data =>{
        this.estudio = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.estudioS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

  cargarSobreMi(): void{
    this.personaS.detail(1).subscribe(data => 
      {this.persona=data});
  } 


} 
