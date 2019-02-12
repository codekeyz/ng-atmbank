import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponse } from './bank.models';
import { Config } from './bank.module';

@Injectable({
  providedIn: 'root'
})
export class BankAuthService {
  private ourBaseUrl = '';

  constructor(
    @Inject('config') private config: Config,
    private http: HttpClient
  ) {
    config.isDevMode === true
      ? (this.ourBaseUrl = 'https://atm-hotspot-backend.herokuapp.com')
      : (this.ourBaseUrl = 'http://127.0.0.1:8000');
  }

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
