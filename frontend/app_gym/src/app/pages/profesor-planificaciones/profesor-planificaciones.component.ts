import { Component } from '@angular/core';
import { PlanificacionesService } from 'src/app/services/planificaciones.service';

@Component({
  selector: 'app-profesor-planificaciones',
  templateUrl: './profesor-planificaciones.component.html',
  styleUrls: ['./profesor-planificaciones.component.css']
})
export class ProfesorPlanificacionesComponent {
  arrayPlanificaciones:any;
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 2;
  idProfesor: number = Number(localStorage.getItem('id'));
  selectedSearch: string = "";

  constructor(
    private planificacionesService: PlanificacionesService,
  ){}
  
  ngOnInit() {
    this.planificacionesService.getplanificacionprofesor(this.currentPage, this.idProfesor, this.itemsPerPage).subscribe((data:any) =>{
        console.log('JSON data:', data);
        this.arrayPlanificaciones = data.planificacion;
        this.totalPages = data.pages;
      })
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

  guardarInfoPlan(planificacionid:any, alumnoid: any){
    localStorage.setItem('idPlanificacion', planificacionid);
    localStorage.setItem('idAlumno', alumnoid);

  }

  eliminarPlanificacion(id:number){
    this.planificacionesService.deleteplanificaciones(id).subscribe((data:any) => {
      console.log('Usuario eliminado', data);
      this.ngOnInit();
    })
  }

  Reiniciar() {
    this.currentPage = 1;
    this.selectedSearch = "";
    this.ngOnInit();
  }

  buscarUsuarios(){
    this.planificacionesService.getPlanificaionesBySearch(this.currentPage, this.idProfesor, this.itemsPerPage,this.selectedSearch).subscribe((data:any) =>{
      console.log('JSON data:', data);
        this.arrayPlanificaciones = data.planificacion;
        this.totalPages = data.pages;
    })
  }

  buscarPorNombre() {
    this.currentPage = 1
    this.buscarUsuarios()
  }
}
