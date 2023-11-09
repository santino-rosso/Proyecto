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
  usuarioaEdi: any = {
    dni: null,
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    telefono: null,
    rol: '',
  };
  selectedRole: string = 'todos';
  // arrayUsuarios = [
  //   {
  //     id: 1,
  //     nombre:' Usuario 1'
  //   },
  //   {
  //     id: 2,
  //     nombre:' Usuario 2'
  //   },
  //   {
  //     id: 3,
  //     nombre:' Usuario 3'
  //   }
  // ];
  
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
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
    this.usuariosService.putUsuario(this.usuarioaEdi.id, this.usuarioEditar).subscribe((data:any) => {
      console.log('Usuario editado', data);
      this.ngOnInit();
    
    })
  }

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