import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalFormService {

  constructor() { }
  
  modalSwitch:boolean = false;

  public cambiarSwitch(){
   this.modalSwitch = true
}

  public openModal(){
  
   if(this.modalSwitch == false){
    this.modalSwitch = true
  }
   else{
    this.modalSwitch = false
  }
   return console.log("componente iniciar session funcion")
}



}
