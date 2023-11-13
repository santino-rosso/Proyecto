import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanificacionesService {
  url = '/api';
  constructor(
    private httpClient: HttpClient
  ) { }

  getPlanificacionesAlumno(page: number) {
    let auth_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(`${this.url}/planificaciones_profesores?page=${page}`, { headers: headers });
  }

  getplanificacionprofesor(page: number, id_profesor: number) {
    let auth_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(`${this.url}/planificaciones_profesores?page=${page}&id_profesor=${id_profesor}&`, { headers: headers });
  }

  getplanificacionesalumno(page: number, id_alumno: number) {
    let auth_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(`${this.url}/planificaciones_profesores?page=${page}&id_alumno=${id_alumno}&`, { headers: headers });
  }

  getplanificacionalumno(id_planificacion: number) {
    let auth_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(`${this.url}/planificacion_profesor/${id_planificacion}`, { headers: headers });
  }

  putplanificacion(id_planificacion: number, planificaciondata: any) {
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.put(`${this.url}/planificacion_profesor/${id_planificacion}`, planificaciondata, { headers: headers });
  }

  postplanificaciones(planificaciondata: any){
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    
    return this.httpClient.post(`${this.url}/planificaciones_profesores`, planificaciondata, { headers: headers });
  }

  deleteplanificaciones(id_planificacion: number){
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.delete(`${this.url}/planificacion_profesor/${id_planificacion}`, { headers: headers });
  }
}

