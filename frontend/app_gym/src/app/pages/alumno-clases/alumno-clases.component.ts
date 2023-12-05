import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-alumno-clases',
  templateUrl: './alumno-clases.component.html',
  styleUrls: ['./alumno-clases.component.css']
})
export class AlumnoClasesComponent {
  arrayClases:any;
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 5;

  constructor(
    private clasesService: ClasesService,
  ){}

  ngOnInit() {
    this.clasesService.getclases(this.currentPage, this.itemsPerPage).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.arrayClases = data.clases;
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

}
