import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponse } from './bank.models';

@Injectable()
export class BankAuthService {
  private ourBaseUrl = 'https://atm-hotspot-backend.herokuapp.com';

  constructor(private http: HttpClient) {}

  logout(): void {
    localStorage.removeItem('access_token');
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.ourBaseUrl}/banks/login`, { email, password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return result;
        })
      );
  }
}