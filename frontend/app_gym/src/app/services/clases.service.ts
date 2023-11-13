import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  url = '/api';

  constructor(
    private httpClient: HttpClient,
    ) { }

    getclases(page: number) {
      let auth_token = localStorage.getItem('token');
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.get(`${this.url}/clases?page=${page}`, { headers: headers });
    }
    putclase(id: number, claseData: any) {
      let auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.put(this.url + '/clase/' + id, claseData, { headers: headers });
    }

    deleteclase(id: number) {
      const auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      return this.httpClient.delete(this.url + '/clase/' + id, { headers: headers });
    }

    crearclases(data:any){
      let auth_token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
        
        return this.httpClient.post(`${this.url}/clases`, data, { headers: headers });
      }

  
}
