import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = '/api';
  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(page: number,per_page:number) {
    let auth_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(`${this.url}/usuarios?page=${page}&per_page=${per_page}`, { headers: headers });
  }

  getUsersByRol(page: number, rol: string,per_page:number) {
    let auth_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(`${this.url}/usuarios?page=${page}&rol=${rol}&per_page=${per_page}`, { headers: headers });
  }

  getUsersBySearch(page: number, search: string,per_page:number,) {
    let auth_token = localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(`${this.url}/usuarios?page=${page}&search_term=${search}&per_page=${per_page}`, { headers: headers });
  }

  putUsuario(id: number, userData: any) {
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.put(this.url + '/usuario/' + id, userData, { headers: headers });
  }

  deleteUsuario(id: number) {
    const auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.delete(this.url + '/usuario/' + id, { headers: headers });
  }

  getUsersByid(id: number) {
    let auth_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.httpClient.get(this.url + '/usuario/' + id, { headers: headers });  
  }

  crearusuarioalumno(data:any){
  let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    
    return this.httpClient.post(`${this.url}/usuarios_alumnos`, data, { headers: headers });
  }

  crearusuariprofesor(data:any){
    let auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      
      return this.httpClient.post(`${this.url}/usuarios_profesores`, data, { headers: headers });
    }
  
    postEspecialidad(especialidad: any){
      let auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.post(`${this.url}/usuarios_profesores`, especialidad, { headers: headers })
    }

    putEspecialidad(especialidad: any, id: any){
      let auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.put(`${this.url}/usuario_profesor/${id}`, especialidad, { headers: headers })
    }

    postSocio(socio: any){
      let auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.post(`${this.url}/usuarios_alumnos`, socio, { headers: headers })
    }

    
}