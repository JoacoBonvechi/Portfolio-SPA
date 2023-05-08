import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-newestudio',
  templateUrl: './newestudio.component.html',
  styleUrls: ['./newestudio.component.css']
})
export class NewestudioComponent implements OnInit{
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private sEstudio: EstudioService, private router:Router) { 
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      estudio:[''],
      porcentaje:[''],
      color:[''],
      personaid:[1]
   })
  }

  ngOnInit(): void {
  }

  get Estudio(){
    return this.form.get("estudio");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }
  get Color(){
    return this.form.get("color")
  }
  

  onCreate(): void{
    const estudio = new Estudio(this.Estudio?.value, this.Porcentaje?.value, this.Color?.value);
    this.sEstudio.save(estudio).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}

