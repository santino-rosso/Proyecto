import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  url = '/api';

  constructor(
    private httpClient: HttpClient,
    ) { }

    getpermisos(page: number,per_page:number) {
      let auth_token = localStorage.getItem('token');
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.get(`${this.url}/permisos?page=${page}&per_page=${per_page}`, { headers: headers });
    }
    
    putpermiso(id: number, permisoData: any) {
      let auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.put(this.url + '/permiso/' + id, permisoData, { headers: headers });
    }

    deletepermiso(id: number) {
      const auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.delete(this.url + '/permiso/' + id, { headers: headers });
    }

    crearpermiso(data:any){
      let auth_token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
        
        return this.httpClient.post(`${this.url}/permisos`, data, { headers: headers });
      }

  
}