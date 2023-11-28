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
  itemsPerPage: number = 5;
  idUsuario: number = Number(localStorage.getItem('id'));
  idProfesor: number = 0;
  nombreProfe: any;


  constructor(
    private planificacionesService: PlanificacionesService
  ){}

  ngOnInit() {
    this.planificacionesService.getplanificacionesalumno(this.currentPage, this.idUsuario, this.itemsPerPage).subscribe((data:any) =>{
        console.log('JSON data:', data);
        this.arrayCronogramas = data.planificacion;
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

}