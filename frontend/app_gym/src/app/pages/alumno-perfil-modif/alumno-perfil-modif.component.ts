import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-alumno-perfil-modif',
  templateUrl: './alumno-perfil-modif.component.html',
  styleUrls: ['./alumno-perfil-modif.component.css']
})
export class AlumnoPerfilModifComponent {
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
