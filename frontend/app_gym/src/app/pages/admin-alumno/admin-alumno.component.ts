import { Component } from '@angular/core';
import { PermisosService } from 'src/app/services/permisos.service';

@Component({
  selector: 'app-admin-alumno',
  templateUrl: './admin-alumno.component.html',
  styleUrls: ['./admin-alumno.component.css']
})
export class AdminAlumnoComponent {
  arrayPermisos:any;
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 10;

  permiso: any = {
    "resource": "",
    "method": "",
    "rol": "",
  };

  constructor(
    private permisosService: PermisosService
  ){}
  
  ngOnInit() {
    this.permisosService.getpermisos(this.currentPage, this.itemsPerPage).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.arrayPermisos = data.permiso;
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

  Reiniciar() {
    this.currentPage = 1;
    this.ngOnInit();
  }
  
  
  permisoEditar(clase:any) {
    this.permiso = clase;
  }

  editarPermiso(){
    console.log(this.permiso)
    const permisoEditado = {
  
      resource: this.permiso.resource.toUpperCase(),
      method: this.permiso.method.toUpperCase(),
      rol: this.permiso.rol
    };
    this.permisosService.putpermiso(this.permiso.id,permisoEditado).subscribe((data:any) =>{
      console.log('Permiso editado:', data);
    })
    this.ngOnInit();
  }

  eliminarPermiso(id:number){
    this.permisosService.deletepermiso(id).subscribe((data:any) => {
      console.log('permiso eliminado', data);
      this.ngOnInit();
    })
  }

  crearPermiso(){
    const permisoCrear = {
      resource: this.permiso.resource.toUpperCase(),
      method: this.permiso.method.toUpperCase(),
      rol: this.permiso.rol
    };
    this.permisosService.crearpermiso(permisoCrear).subscribe((data:any) =>{
      console.log('Permiso creado:', data);
    })
    this.ngOnInit();
  }
}
