import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule],
  styleUrl: './form-component.css',
  templateUrl: './form-component.html',
})
export class FormComponent {

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/)
    ]),
    dni: new FormControl('', [
      Validators.required,
      Validators.pattern(/^([0-9]{8}|[XYZxyz][0-9]{7})[A-Za-z]$/)
    ]),
    tel: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\+34)?[67][0-9]{8}$/)
    ]),

    datosCuenta: new FormGroup({
      nombreUsuario: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]*$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      contrasenia: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).+$/)
      ])
    }),

    preferenciasCurso: new FormGroup({
      curso: new FormControl('', [
        Validators.required
      ]),
      horas: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(40)
      ]),
      codigoPostal: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$/)
      ])
    })
  });


  isInvalidField(field: string) {
    return this.registerForm.get(field)?.invalid && 
          (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);
    }
  }
}