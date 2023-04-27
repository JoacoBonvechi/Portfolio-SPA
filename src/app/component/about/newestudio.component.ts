import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-newestudio',
  templateUrl: './newestudio.component.html',
  styleUrls: ['./newestudio.component.css']
})
export class NewestudioComponent implements OnInit{
  estudio!: string;
  porcentaje!: string;

  constructor(private estudioS: EstudioService,private router:Router){
  }

  ngOnInit(): void {
    
  }

  onCreate():void{
    const estudio = new Estudio(this.estudio ,this.porcentaje);
    this.estudioS.save(estudio).subscribe(
      data =>{
        alert("Estudios añadido correctamente");
        this.router.navigate([''])
      }, err =>{
        alert("fallo");
        this.router.navigate([''])
      }
    )
  }
}
