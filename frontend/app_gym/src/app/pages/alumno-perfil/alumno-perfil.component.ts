import { Component } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-alumno-perfil',
  templateUrl: './alumno-perfil.component.html',
  styleUrls: ['./alumno-perfil.component.css']
})
export class AlumnoPerfilComponent {

  constructor(
    private authService: AuthService
  ){}

  cerrarSesion(){
    this.authService.logout();
  }
}
