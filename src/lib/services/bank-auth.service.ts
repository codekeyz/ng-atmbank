import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthResponse} from '../bank.models';
import {BankModule, Config} from '../modules/bank.module';
import {JwtHelperService} from '@auth0/angular-jwt';

const ACCESS_TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: BankModule
})
export class BankAuthService {
  private ourBaseUrl = '';

  constructor(
    @Inject('config') private config: Config,
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.ourBaseUrl =
      config.isDevMode === true
        ? 'https://atm-hotspot-backend.herokuapp.com'
        : 'http://127.0.0.1:8000';
  }

  async logout() {
    await localStorage.clear();
  }

  isloggedIn(): boolean {
    return (
      !this.jwtHelper.isTokenExpired()
    );
  }

  getToken(): string {
    return this.jwtHelper.tokenGetter();
  }

  tokenExpiry(): Date {
    return this.jwtHelper.getTokenExpirationDate();
  }

  isTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired();
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.ourBaseUrl}/banks/login`, {email, password})
      .pipe(
        map(result => {
          localStorage.setItem(ACCESS_TOKEN_KEY, result.token);
          return result;
        })
      );
  }
}
