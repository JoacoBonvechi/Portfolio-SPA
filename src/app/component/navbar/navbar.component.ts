import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  validacion = false

public change() {
  if (this.validacion === true){
    this.validacion = false
  }
  else{
    this.validacion = true
  }


  console.log(this.validacion)
}

}
