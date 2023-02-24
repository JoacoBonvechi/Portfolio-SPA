import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('asSide',{static : false}) sidebar : any;

  validacion = false

  constructor(private renderer2: Renderer2){

  }

  public change() {
    if (this.validacion === true){
      this.validacion = false
    }
    else{
      this.validacion = true
    }


    console.log(this.validacion)
  }

  title = 'portfolio';

  texto = ""
  texto2 = ""
  texto3 = ""

  public maquinaEscribir1(text1 = '', tiempo1 = 200) {
    let arrayCaracteres1 = text1.split('')
    let texto = ""
    let cont1 = 0
    let escribir1 = setInterval(()=>{
        this.texto += arrayCaracteres1[cont1]
        cont1++
        if(cont1 === arrayCaracteres1.length){
            clearInterval(escribir1)
        }

    },tiempo1)
  }

  public maquinaEscribir2(text1 = '', tiempo1 = 200) {
    let arrayCaracteres1 = text1.split('')
    let texto2 = ""
    let cont1 = 0
    let escribir1 = setInterval(()=>{
        this.texto2 += arrayCaracteres1[cont1]
        cont1++
        if(cont1 === arrayCaracteres1.length){
            clearInterval(escribir1)
        }

    },tiempo1)
  }

  public maquinaEscribir3(text1 = '', tiempo1 = 200) {
    let arrayCaracteres1 = text1.split('')
    let texto3 = ""
    let cont1 = 0
    let escribir1 = setInterval(()=>{
        this.texto3 += arrayCaracteres1[cont1]
        cont1++
        if(cont1 === arrayCaracteres1.length){
            clearInterval(escribir1)
        }

    },tiempo1)
  }

  public escritura(){
    this.maquinaEscribir1("Hello, I'm Joaquin",100)
    setTimeout(() => {
      this.maquinaEscribir2("Full Stack Developer", 70)
  },2000);
  setTimeout(() => {
    this.maquinaEscribir3("Front End Specialist.", 70)
},3500);
  }

  ngOnInit(): void {
    this.escritura()
  }




}
