import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ModalFormService } from 'src/app/service/modal-form.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public modalService : ModalFormService, private tokenService : TokenService){}

  isLogged = false

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true
    }  else{
      this.isLogged = false
    }
  }

  onLogOut ():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  validacion = false

  public change() {
    if (this.validacion === true){
     this.validacion = false
  }
    else{
      this.validacion = true
  }

}

}
