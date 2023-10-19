import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  registerForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    
    ) {}
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        dni: ['', Validators.required],
        email: ['', Validators.required],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        contraseña: ['', Validators.required],
        telefono: ['', Validators.required]

      })
     }

  register(formData: any) {
    this.authService.register(formData).subscribe(
      (response) => {
        alert("Registro exitoso");
        this.router.navigate(['/login']);
      },
      (error) => {
        alert("Registro fallido");
      }
    );
  }


  submit() {
    if(this.registerForm.valid) {
      console.log('Form login: ',this.registerForm.value);
      this.register(this.registerForm.value)
    } else {
      alert('Formulario invalido');
    }
  }

}



