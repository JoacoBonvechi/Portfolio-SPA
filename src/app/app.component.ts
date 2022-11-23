import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  texto :string= ""
  maquina2 = document.getElementById('presentacion-text')
  maquina3 = document.getElementById('presentacion-text2')

 
  
}

