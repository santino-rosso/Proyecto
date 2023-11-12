import { Component } from '@angular/core';
import { PlanificacionesService } from 'src/app/services/planificaciones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-profesor-planificacion-particular',
  templateUrl: './profesor-planificacion-particular.component.html',
  styleUrls: ['./profesor-planificacion-particular.component.css']
})


export class ProfesorPlanificacionParticularComponent {
  planificacion: any;
  alumno: any;
  id_planificaion: number = Number(localStorage.getItem('id_planificacion'));
  id_alumno: number = Number(localStorage.getItem('idAlumno'))
  fecha_objeto: any;

  constructor(
    private planificacionesService: PlanificacionesService,
    private usuariosService: UsuariosService
  ){}

  ngOnInit() {
    this.planificacionesService.getplanificacionalumno(this.id_planificaion).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.planificacion = data;
      this.nombreAlumno();
    })
  }

  nombreAlumno(){
    this.usuariosService.getUsersByid(this.id_alumno).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.alumno = data; 
    })
  
  }

  editarPlanificacion(){
    const planificacionEditada = {
      fecha: this.planificacion.fecha, 
      tipo: this.planificacion.tipo,
      lunes: this.planificacion.lunes,
      martes: this.planificacion.martes,
      miercoles: this.planificacion.miercoles,
      jueves: this.planificacion.jueves,
      viernes: this.planificacion.viernes,
      sabado: this.planificacion.sabado
    };
    this.planificacionesService.putplanificacion(this.planificacion.id, planificacionEditada).subscribe((data:any) => {
      console.log('Planificacion editada', data);
      this.ngOnInit(); 
  })}
}
