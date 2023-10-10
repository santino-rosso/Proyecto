import { Component } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-profesor-perfil',
  templateUrl: './profesor-perfil.component.html',
  styleUrls: ['./profesor-perfil.component.css']
})
export class ProfesorPerfilComponent {
  constructor(
    private authService: AuthService
  ){}

  cerrarSesion(){
    this.authService.logout();
  }

}

