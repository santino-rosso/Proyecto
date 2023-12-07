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
  profesor:any;

  constructor(
    private clasesService: ClasesService,
  ){}

  ngOnInit() {
    this.clasesService.getclases(this.currentPage, this.itemsPerPage).subscribe((data:any) =>{
      console.log('JSON data:', data);
      this.arrayClases = data.clases;
      this.totalPages = data.pages;
      for (const clase of this.arrayClases) {
        const claseId = clase.id;
        this.clasesService.getprofesor_clase(claseId).subscribe((profesorData: any) => {
          this.profesor = profesorData[0].usuario.nombre +" "+profesorData[0].usuario.apellido;
            clase['Profesor'] = this.profesor;
        });
      }
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
