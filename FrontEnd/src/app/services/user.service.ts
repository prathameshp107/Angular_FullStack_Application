import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  private baseUrl = 'http://localhost:3003/auth/';

  constructor(private http: HttpClient ) { }

  registerUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}register`, user).pipe(
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  LoginUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}login`, user).pipe(
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  
}