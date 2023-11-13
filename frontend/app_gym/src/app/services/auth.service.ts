import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url = '127.0.0.1:5000';
  url = '/api';
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(dataLogin:any): Observable<any> {
    // let dataLogin = {email: "hola1234@gmail.com", contraseña: "1234"}
    return this.httpClient.post(this.url + '/auth/login',dataLogin).pipe(take(1));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol')
    localStorage.removeItem('id')
    localStorage.removeItem('idPlanificacion')
    localStorage.removeItem('idAlumno')
    this.router.navigate(['/','home']);
  }

  register(userData: any): Observable<any> {
    return this.httpClient.post(this.url + '/auth/register', userData).pipe(take(1));
  }
  
}