import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-profesor-perfil-modif',
  templateUrl: './profesor-perfil-modif.component.html',
  styleUrls: ['./profesor-perfil-modif.component.css']
})
export class ProfesorPerfilModifComponent {
  arrayClases:any;
  currentPage: number = 1;
  totalPages: number = 1;

  claseaEdi: any = {
    "nombre_clase": "",
    "horario_clase": "",

};

clases: any = {
  "nombre_clase": "",
  "horario_clase": "",
};

  constructor(
    private clasesService: ClasesService,
  ){}

  ngOnInit() {
    this.clasesService.getclases(this.currentPage).subscribe((data:any) =>{
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
  
  claseEditar(claseaEdi: any){
    this.clasesService.putclase(claseaEdi.id,claseaEdi).subscribe((data:any) =>{
      console.log('JSON data:', data);
    })
    this.ngOnInit();
  
  }

  eliminarClase(id:number){
    this.clasesService.deleteclase(id).subscribe((data:any) => {
      console.log('clase eliminada', data);
      this.ngOnInit();
    })
  }

  crearClase(){
    const clasesCrear = {
      nombre_clase: this.clases.nombre_clase,
      horario_clase: this.clases.horario_clase
    };
    this.clasesService.crearclases(clasesCrear).subscribe((data:any) =>{
      console.log('Clase creada:', data);
    })
    this.ngOnInit();
  }
}
