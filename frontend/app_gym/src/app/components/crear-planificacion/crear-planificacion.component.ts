import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanificacionesService } from 'src/app/services/planificaciones.service';

@Component({
  selector: 'app-crear-planificacion',
  templateUrl: './crear-planificacion.component.html',
  styleUrls: ['./crear-planificacion.component.css']
})
export class CrearPlanificacionComponent {
  registerForm!: FormGroup;
  arrayUsuarios:any;
  currentPage: number = 1;
  totalPages: number = 1;
  planificacion: any = {
      "fecha": "",
      "tipo": "",
      "lunes": "",
      "martes": "",
      "miercoles": null,
      "jueves": "",
      "viernes":"",
      "sabado": "",
      "id_profesor":"",
      "id_alumno":""
      
  };
  idalumno: any;

  
  constructor(
    private usuariosService: UsuariosService,
    private planificacionesService: PlanificacionesService,
    private formBuilder: FormBuilder,
  ){}
  
  ngOnInit() {
    this.usuariosService.getUsersByRol(this.currentPage, 'Alumno').subscribe((data: any) => {
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

  planificacionaCrear(alumniID:any){
      this.idalumno = alumniID;
    }

  crearPlanificacion(){
    const planificacionCrear = {
      fecha: this.planificacion.fecha, 
      tipo: this.planificacion.tipo,
      lunes: this.planificacion.lunes,
      martes: this.planificacion.martes,
      miercoles: this.planificacion.miercoles,
      jueves: this.planificacion.jueves,
      viernes: this.planificacion.viernes,
      sabado: this.planificacion.sabado,
      id_profesor: localStorage.getItem('id'),
      id_alumno: this.idalumno
    };
    this.planificacionesService.postplanificaciones(planificacionCrear).subscribe((data:any) => {
      console.log('Planificacion crear', data);
      this.ngOnInit();
    
    })
  }
}


