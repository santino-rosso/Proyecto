import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PlanificacionesService } from 'src/app/services/planificaciones.service';

@Component({
  selector: 'app-ver-planificacion',
  templateUrl: './ver-planificacion.component.html',
  styleUrls: ['./ver-planificacion.component.css']
})
export class VerPlanificacionComponent {
  arrayPlanificaciones:any;
  currentPage: number = 1;
  totalPages: number = 1;
  
  constructor(
    private planificacionesService: PlanificacionesService
  ){}

  ngOnInit() {
    this.planificacionesService.getPlanificaciones(this.currentPage).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.arrayPlanificaciones = data.planificaciones;
      this.totalPages = data.pages;
    })
  }
}
