import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from 'src/app/service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-editar-sobre-mi',
  templateUrl: './editar-sobre-mi.component.html',
  styleUrls: ['./editar-sobre-mi.component.css']
})
export class EditarSobreMiComponent implements OnInit{
  form:FormGroup;

  persona :Persona[] = [];


  constructor(private activatedRouter:ActivatedRoute, private formBuilder: FormBuilder, private sPersona: PersonaService, private router:Router){
    this.form=this.formBuilder.group({
      id:[1],
      nombre:[],
      apellido:[],
      titulo:[],
      sobreMi:[]
    })
  }

  get SobreMi(){
    return this.form.get("sobreMi")
  }

  sobreMi:any = this.SobreMi

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data =>{
        this.sobreMi = data;
      }, err =>{
        alert("Error al modificar")
        this.router.navigate([''])
      }
    )
  }

 

  
  

  onModificar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id).subscribe(
      data => {
        this.router.navigate([""]);
      }, err =>{
        alert("Error al modificar")
      }
    )
  }
}