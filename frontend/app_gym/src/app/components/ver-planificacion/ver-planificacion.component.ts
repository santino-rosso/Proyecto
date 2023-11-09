import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PlanificacionesService } from 'src/app/services/planificaciones.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ver-planificacion',
  templateUrl: './ver-planificacion.component.html',
  styleUrls: ['./ver-planificacion.component.css']
})
export class VerPlanificacionComponent {
  arrayPlanificaciones:any;
  currentPage: number = 1;
  totalPages: number = 1;
  idUsuario: number = Number(localStorage.getItem('id'));
  
  constructor(
    private planificacionesService: PlanificacionesService,
    private router: Router
  ){}

  ngOnInit() {
    this.planificacionesService.getplanificacionalumno(this.currentPage, this.idUsuario).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.arrayPlanificaciones = data.planificacion;
      this.totalPages = data.pages;
    })
  }
}
