import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-profesor-clases',
  templateUrl: './profesor-clases.component.html',
  styleUrls: ['./profesor-clases.component.css']
})
export class ProfesorClasesComponent {
  arrayClases:any;
  profesor:any;
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 5;
  idProfesor = Number(localStorage.getItem('id'));
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
  
  claseEditar(clase:any) {
    this.claseaEdi = clase;
  }

  editarClase(){
    console.log(this.claseaEdi)
    const claseEditado = {
      nombre_clase: this.claseaEdi.nombre_clase,
      horario_clase: this.claseaEdi.horario_clase
    };
    this.clasesService.putclase(this.claseaEdi.id,claseEditado).subscribe((data:any) =>{
      console.log('Clase editada:', data);
      this.Reiniciar();
    })
    this.ngOnInit();
  
  }

  eliminarClase(id:number){
    this.clasesService.deleteclase(id).subscribe((data:any) => {
      console.log('clase eliminada', data);
      // Ahora llama Reiniciar() para actualizar la lista de clases
      this.Reiniciar();
    })
    
    this.ngOnInit();
  }

  crearClase(){
    const clasesCrear = {
      nombre_clase: this.clases.nombre_clase,
      horario_clase: this.clases.horario_clase
    };
    this.clasesService.crearclases(clasesCrear).subscribe((data:any) =>{
      console.log('Clase creada:', data);
      const clases_profesor = {
        id_clase: data.id,
        id_profesor: this.idProfesor
      }
      this.clasesService.crearclases_profesor(clases_profesor).subscribe((data:any) =>{
      })
    this.ngOnInit();
    }
  )}
}