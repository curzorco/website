import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(6)]],
    message: ['']
  });

  constructor(private fb: FormBuilder) {}

  validation(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched; 
  }

  send(){

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    
    fetch("https://formsubmit.co/ajax/68e3fb99418618bdab5e990d32aed72a", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(this.myForm.value)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    /* console.log(this.myForm.value) */

    this.myForm.reset();
  }
}
