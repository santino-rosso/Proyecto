import { Component } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-alumno',
  templateUrl: './nav-alumno.component.html',
  styleUrls: ['./nav-alumno.component.css']
})
export class NavAlumnoComponent {
  constructor(
    private authService: AuthService
  ){}

  cerrarSesion(){
    this.authService.logout();
  }
}
