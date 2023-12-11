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
  itemsPerPage: number = 4;
  selectedRol: string = '';
  selectedSearch: string = "";
  usuarioaEdi: any = {
      "rol": "",
      "nombre": "",
      "apellido": "",
      "contraseña": "",
      "telefono": null,
      "email": ""
  };
  usuarioRol: any;
  mostrarContrasena: boolean = false;

  
  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
  ){}

  rol = localStorage.getItem('rol');
  
  ngOnInit() {
    this.usuariosService.getUsers(this.currentPage, this.itemsPerPage).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.arrayUsuarios = data.usuario;
      this.totalPages = data.pages;
      });    
  }

  loadNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.buscarUsuarios();
    }
  }

  loadPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--; 
      this.buscarUsuarios();
    }
  }

  usuarioEditar(usuario:any){
    this.mostrarContrasena = false;
    this.usuarioRol = usuario.rol;
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
    const especialidad = {
      especialidad: this.usuarioaEdi.especialidad,
      id_usuario: this.usuarioaEdi.id
    }
    const socio = {
      nro_socio: this.usuarioaEdi.id * 10,
      id_usuario: this.usuarioaEdi.id
    }
    this.usuariosService.putUsuario(this.usuarioaEdi.id, usuarioEditado).subscribe((data:any) => {
      console.log('Usuario editado', data);
      if (this.usuarioaEdi.rol === 'Profesor')
        if (this.usuarioaEdi.especialidad === "")
          this.usuariosService.postEspecialidad(especialidad).subscribe((data:any) => {
        })
        else
          this.usuariosService.putEspecialidad(especialidad, this.usuarioaEdi.id).subscribe((data:any) => {
          })
      if (this.usuarioaEdi.rol === 'Alumno' && this.usuarioRol === "")
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

  Reiniciar() {
    this.currentPage = 1;
    this.selectedRol = '';
    this.selectedSearch = "";
    this.ngOnInit();
  }
  
  BotonContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  buscarUsuarios(){
    this.usuariosService.getUsersBySearch(this.currentPage, this.selectedSearch, this.itemsPerPage, this.selectedRol).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.arrayUsuarios = data.usuario;
      this.totalPages = data.pages;
    })
  }

  filtrarPorRol(rol: string) {
    this.currentPage = 1
    this.selectedRol = rol;
    this.buscarUsuarios()
  }

  buscarPorNombre() {
    this.currentPage = 1
    this.buscarUsuarios()
  }
}
