import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  
}


const maquinaEscribir1 = (text1 = '', tiempo1 = 200, etiqueta1: { innerHTML: string; } ) => {
    let arrayCaracteres1 = text1.split('')
    etiqueta1.innerHTML = ''
    let cont1 = 0
    let escribir1 = setInterval(function(){
        etiqueta1.innerHTML += arrayCaracteres1[cont1]
        cont1++
        if(cont1 === arrayCaracteres1.length){
            clearInterval(escribir1)
        }

    },tiempo1)
    
};


