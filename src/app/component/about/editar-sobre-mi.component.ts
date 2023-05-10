import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  persona :Persona = null;

  constructor(private cd:ChangeDetectorRef,private activatedRouter:ActivatedRoute, private formBuilder: FormBuilder, private sPersona: PersonaService, private router:Router){
    this.form=this.formBuilder.group({
      id:[1],
      nombre:["joaquin"],
      apellido:["bonvechi"],
      titulo:["nose"],
      sobreMi:[""]
    })
  }

  // get SobreMi(){
  //   return this.form.get("sobreMi");
  // }


  ngOnInit(): void {
    this.cd.detectChanges();
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data => {
      this.persona=data;
      this.cd.detectChanges();
    },err =>{
      alert("Error al cargar datos en editar sobre mi");
      this.router.navigate(['']);
    }
    )
  }


  onModificar(): void{
    this.cd.detectChanges();
    this.sPersona.update(this.form.value).subscribe(data => {
      alert("Persona modificada.");
      this.router.navigate(['']);
    }
    )
  }
}