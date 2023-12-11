import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
  mostrarContrasena: boolean = false;
  idUsuario = Number(localStorage.getItem("id"))
  usuario:any = {
    "rol": "",
    "nombre": "",
    "apellido": "",
    "contraseña": "",
    "telefono": null,
    "email": ""
  };
  
  usuarioaEdi: any = {
    "rol": "",
    "nombre": "",
    "apellido": "",
    "contraseña": "",
    "telefono": null,
    "email": ""
  };

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

  usuarioEditar(usuario:any){
    this.mostrarContrasena = false;
    this.usuarioaEdi = usuario;
  }

  editarUsuario() {
    console.log(this.usuarioaEdi)
    const usuarioEditado = {
      nombre: this.usuarioaEdi.nombre, 
      apellido: this.usuarioaEdi.apellido,
      contraseña: this.usuarioaEdi.contrasena,
      rol: this.usuarioaEdi.rol,
      dni: this.usuarioaEdi.dni,
      email: this.usuarioaEdi.email
    };
    this.usuariosService.putUsuario(this.usuarioaEdi.id, usuarioEditado).subscribe((data:any) => {
      console.log('Usuario editado', data);
      this.ngOnInit();
    
    })
  }


  BotonContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}

  
  

