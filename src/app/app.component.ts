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

  public maquinaEscribir1(text1 = '', tiempo1 = 200) {
    let arrayCaracteres1 = text1.split('')
    this.texto = ''
    let cont1 = 0
    let escribir1 = setInterval(function(){
        texto += arrayCaracteres1[cont1]
        cont1++
        if(cont1 === arrayCaracteres1.length){
            clearInterval(escribir1)
        }

    },tiempo1)
  }

  ngOnInit(): void {
    this.maquinaEscribir1("Hello, I'm Joaquin",100)
  }
  
}
