import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  token = '';
  URL = "http://localhost:3000/api";
  requesttoken(a: string, b: string) {
    return this.http.post<any>(`${this.URL}/login`, { a, b })
  }

  verifytoken(a: string){
    return this.http.post<any>(`${this.URL}/verify`,{a})
  }
  
}
