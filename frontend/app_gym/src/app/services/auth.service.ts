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

  login(): Observable<any> {
    let dataLogin = {mail: "hola1234@gmail.com", password: "1234"}
    return this.httpClient.post(this.url + '/auth/login',dataLogin).pipe(take(1));
  }
}