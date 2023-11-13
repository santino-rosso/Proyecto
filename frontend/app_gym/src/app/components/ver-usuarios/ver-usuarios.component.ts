import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent {
  arrayUsuarios:any;
  currentPage: number = 1;
  totalPages: number = 1;
  contadorEspecialidad: number = 1;

  usuarioaEdi: any = {
      "rol": "",
      "nombre": "",
      "apellido": "",
      "contraseña": "",
      "telefono": null,
      "email": ""
  };

  
  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
  ){}

  rol = localStorage.getItem('rol');
  
  ngOnInit() {
    this.usuariosService.getUsers(this.currentPage).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.arrayUsuarios = data.usuario;
      this.totalPages = data.pages;
    })
  }

  loadNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.ngOnInit();
    }
  }

  loadPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--; 
      this.ngOnInit();
    }
  }

  usuarioEditar(usuario:any){
    this.usuarioaEdi = usuario;
  }

  editarUsuario() {
    console.log(this.usuarioaEdi)
    const usuarioEditado = {
      nombre: this.usuarioaEdi.nombre, 
      apellido: this.usuarioaEdi.apellido,
      contraseña: this.usuarioaEdi.contraseña,
      rol: this.usuarioaEdi.rol,
      dni: this.usuarioaEdi.dni,
      email: this.usuarioaEdi.email
    };
    const especialidad = {
      especialidad: this.usuarioaEdi.especialidad,
      id_usuario: this.usuarioaEdi.id
    }
    const socio = {
      nro_socio: this.contadorEspecialidad,
      id_usuario: this.usuarioaEdi.id
    }
    this.contadorEspecialidad++;
    this.usuariosService.putUsuario(this.usuarioaEdi.id, usuarioEditado).subscribe((data:any) => {
      console.log('Usuario editado', data);
      if (this.usuarioaEdi.rol === 'Profesor')
        if (this.usuarioaEdi.especialidad === "")
          this.usuariosService.postEspecialidad(especialidad).subscribe((data:any) => {
        })
        else
          this.usuariosService.putEspecialidad(especialidad, this.usuarioaEdi.id).subscribe((data:any) => {
          })
      if (this.usuarioaEdi.rol === 'Alumno')
         this.usuariosService.postSocio(socio).subscribe((data:any) => {
        })
      this.ngOnInit();
      
  })}

  eliminarUsuario(id:number){
    this.usuariosService.deleteUsuario(id).subscribe((data:any) => {
      console.log('Usuario eliminado', data);
      this.ngOnInit();
    })
  }

  
  filtrarPorRol(rol: string) {
    if (rol === 'Todos') {
      // Si se selecciona 'Todos', cargar todos los usuarios
      this.ngOnInit();
    } else {
      // Filtrar por el rol seleccionado
      this.usuariosService.getUsersByRol(this.currentPage, rol).subscribe((data: any) => {
        console.log('JSON data:', data);
        this.arrayUsuarios = data.usuario;
        this.totalPages = data.pages;
      });
    }
  }

  Reiniciar() {
    this.currentPage = 1;
    this.ngOnInit();
  }
  
}