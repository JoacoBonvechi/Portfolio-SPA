import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
