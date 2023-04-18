import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  @ViewChild('myForm')
  myForm!: { nativeElement: any; };

  onSubmit() {
    // Obtener el elemento DOM del formulario
    const form = this.myForm.nativeElement;

    // Enviar el formulario
    form.submit();
  }

}