import { Component } from '@angular/core';
import { PlanificacionesService } from 'src/app/services/planificaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-cronograma',
  templateUrl: './ver-cronograma.component.html',
  styleUrls: ['./ver-cronograma.component.css']
})

export class VerCronogramaComponent {
  arrayCronogramas:any;
  currentPage: number = 1;
  totalPages: number = 1;
  idUsuario: number = Number(localStorage.getItem('id'));
  idProfesor: number = 0;
  nombreProfe: any;


  constructor(
    private planificacionesService: PlanificacionesService,
    private router: Router
  ){}

  ngOnInit() {
    this.planificacionesService.getplanificacionalumno(this.currentPage, this.idUsuario).subscribe((data:any) =>{
        console.log('JSON data:', data);
        this.arrayCronogramas = data.planificacion;
        this.totalPages = data.pages;
      })
  }
}