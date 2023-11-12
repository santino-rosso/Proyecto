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
  idProfesor: number = Number(localStorage.getItem('id'));

  constructor(
    private planificacionesService: PlanificacionesService,
  ){}
  
  ngOnInit() {
    this.planificacionesService.getplanificacionprofesor(this.currentPage, this.idProfesor).subscribe((data:any) =>{
        console.log('JSON data:', data);
        this.arrayPlanificaciones = data.planificacion;
        this.totalPages = data.pages;
      })
  }

  guardarInfoPlan(planificacionid:any, alumnoid: any){
    localStorage.setItem('idPlanificacion', planificacionid);
    localStorage.setItem('idAlumno', alumnoid);
  }

}
