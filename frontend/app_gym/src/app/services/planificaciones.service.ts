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

  getPlanificaciones(page: number) {
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
    return this.httpClient.get(`${this.url}/planificaciones_profesores?page=${page}&%${id_profesor}&`, { headers: headers });
  }
  getplanificacionalumno(page: number, id_alumno: number) {
    let auth_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(`${this.url}/planificaciones_profesores?page=${page}&%${id_alumno}&`, { headers: headers });
  }

}
