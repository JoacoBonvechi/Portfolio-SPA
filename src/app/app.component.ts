import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  texto = '';
  texto2 = '';
  texto3 = '';

  public maquinaEscribir1(text1 = '', tiempo1 = 200, variable: string) {
    let arrayCaracteres1 = text1.split('');
    let cont1 = 0;
    let escribir1 = setInterval(() => {
      variable += arrayCaracteres1[cont1];
      cont1++;
      if (cont1 === arrayCaracteres1.length) {
        clearInterval(escribir1);
      }
    }, tiempo1);
  }

  ngOnInit(): void {
    this.maquinaEscribir1("Hello, I'm Joaquin", 100, this.texto)

    setTimeout(() => {
      this.maquinaEscribir1('Full Stack Developer', 70, this.texto2)
    }, 2000)
    
    setTimeout(() => {
      this.maquinaEscribir1('Front End Specialist.', 70, this.texto3)
    }, 3500)
  }
}
