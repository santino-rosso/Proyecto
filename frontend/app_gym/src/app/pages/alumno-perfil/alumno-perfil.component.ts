import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-alumno-perfil',
  templateUrl: './alumno-perfil.component.html',
  styleUrls: ['./alumno-perfil.component.css']
})
export class AlumnoPerfilComponent {
  
  idUsuario = Number(localStorage.getItem("id"))
  usuario:any;
  

  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService
  ){}

  cerrarSesion(){
    this.authService.logout();
  }

  ngOnInit() {
    this.usuariosService.getUsersByid(this.idUsuario).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.usuario = data;
    })
  }
}
