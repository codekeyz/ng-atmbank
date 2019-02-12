import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from './bank.module';
import {
  ATMData,
  BankData,
  Data,
  ManagerData,
  PaginatedData
} from './bank.models';

@Injectable()
export class BankService {
  private ourBaseUrl = '';

  constructor(
    @Inject('config') private config: Config,
    private http: HttpClient
  ) {
    config.isDevMode === true
      ? (this.ourBaseUrl = 'https://atm-hotspot-backend.herokuapp.com')
      : (this.ourBaseUrl = 'http://127.0.0.1:8000');
  }

  getMyAccount(): Observable<Data<BankData>> {
    return this.http.get<Data<BankData>>(`${this.ourBaseUrl}/banks/me`);
  }

  getATMs(
    url: string = `${this.ourBaseUrl}/banks/me/atms`
  ): Observable<PaginatedData<ATMData>> {
    return this.http.get<PaginatedData<ATMData>>(url);
  }

  addATM($data: {
    name: string;
    status: number;
    city: string;
    lat: number;
    lng: number;
  }): Observable<Data<ATMData>> {
    return this.http.post<Data<ATMData>>(
      `${this.ourBaseUrl}/banks/me/atms`,
      $data
    );
  }

  deleteATM(id: string) {
    return this.http.delete(`${this.ourBaseUrl}/banks/me/atms/${id}`);
  }

  getManagers(
    url: string = `${this.ourBaseUrl}/banks/me/managers`
  ): Observable<PaginatedData<ManagerData>> {
    return this.http.get<PaginatedData<ManagerData>>(url);
  }

  addManager($data: {
    name: string;
    email: string;
    password: string;
  }): Observable<Data<ManagerData>> {
    return this.http.post<Data<ManagerData>>(
      `${this.ourBaseUrl}/banks/me/managers`,
      $data
    );
  }

  deleteManager(id: string) {
    return this.http.delete(`${this.ourBaseUrl}/banks/me/managers/${id}`);
  }
}
