import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  estudio: Estudio[] = []

  constructor(private estudioS: EstudioService, private tokenService:TokenService){
    // isLogged = false;
  }

  ngOnInit():void {
    // this.cargarEducacion();
    // if(this.tokenService.getToken()){
    //   this.isLogged = true;
    // }
    // else {
    //   this.isLogged = false
    // }
  }

  cargarEducacion():void {
    this.estudioS.lista().subscribe(
      data =>{
        this.estudio = data;
      }
    )
  }

  borrar(id?:number){
    if(id != undefined){
      this.estudioS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
} 
