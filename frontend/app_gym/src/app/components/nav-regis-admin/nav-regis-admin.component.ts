import { Component } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-regis-admin',
  templateUrl: './nav-regis-admin.component.html',
  styleUrls: ['./nav-regis-admin.component.css']
})
export class NavRegisAdminComponent {
  constructor(
    private authService: AuthService
  ){}

  cerrarSesion(){
    this.authService.logout();
  }

}
