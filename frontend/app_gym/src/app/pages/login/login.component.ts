import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwtDecode, {JwtDecodeOptions} from 'jwt-decode';


@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
   ) {}

   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
   }

  login(dataLogin:any = {}){ 
  //   dataLogin = {email: "hola1234@gmail.com", contraseña: "1234"}
    console.log('Comprobando credenciales');
    this.authService.login(dataLogin).subscribe({
      next: (rta:any) => {
        alert("Login exitoso");
        console.log('Respuesta login: ',rta.access_token);
        localStorage.setItem('token', rta.access_token);
        var decodedPayload: any = jwtDecode(rta.access_token);
        var userRole = decodedPayload['rol'];
        var idUsuario = decodedPayload['id']
        localStorage.setItem('rol', userRole);
        localStorage.setItem('id', idUsuario );
        
        if (userRole === 'Admin') {
          this.router.navigate(['/admin']);
        } else if (userRole === 'Profesor') {
          this.router.navigate(['/profesor_planificaciones']); 
        } else if (userRole === 'Alumno') {
          this.router.navigate(['/alumno_cronograma']);
        }  else {
          this.router.navigate(['/home']); 
        }
        
      },
          error:(error) => {
          alert('Credenciales incorectas');
          localStorage.removeItem('token');
          localStorage.removeItem('rol')
          localStorage.removeItem('id')
      }, complete: () => {
        console.log('Finalizado');
      }
    })
  }


  submit() {
    if(this.loginForm.valid) {
      console.log('Form login: ',this.loginForm.value);
      this.login(this.loginForm.value)
    } else {
      alert('Formulario invalido');
    }
  }

}
