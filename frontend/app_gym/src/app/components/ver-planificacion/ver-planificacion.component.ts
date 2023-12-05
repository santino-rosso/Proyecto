import { Component } from '@angular/core';
import { PlanificacionesService } from 'src/app/services/planificaciones.service';

@Component({
  selector: 'app-ver-planificacion',
  templateUrl: './ver-planificacion.component.html',
  styleUrls: ['./ver-planificacion.component.css']
})

export class VerPlanificacionComponent {
  idPlanificacion: number = Number(localStorage.getItem('idPlanificacion'));
  planificacion:any = {
    "tipo": "",
    "lunes": "",
    "martes": "",
    "miercoles": "",
    "jueves": "",
    "viernes": "",
    "sabado": ""
  };

  
  constructor(
    private planificacionesService: PlanificacionesService,
  ){}

  ngOnInit() {
    this.planificacionesService.getplanificacionalumno(this.idPlanificacion).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.planificacion = data;
    })
  }
}

