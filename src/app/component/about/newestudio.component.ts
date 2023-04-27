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
  constructor(private formBuilder: FormBuilder, private sEstudio: EstudioService) { 
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      estudio:[''],
      porcentaje:[''],
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
 
  

  onCreate(): void{
      this.sEstudio.save(this.form.value).subscribe(data=>{
      alert("Estudio Añadido");
      window.location.reload();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      //metodos
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
