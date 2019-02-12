import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from './bank.module';
import {
  BankData,
  PaginatedData,
  ATMData,
  ManagerData,
  Data
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
  }): Observable<ATMData> {
    return this.http.post<ATMData>(`${this.ourBaseUrl}/banks/me/atms`, $data);
  }

  deleteATM(id: string): Observable<any> {
    return this.http.delete<any>(`${this.ourBaseUrl}/banks/me/atms/${id}`);
  }

  getManagers(
    url: string = `${this.ourBaseUrl}/banks/me/managers`
  ): Observable<PaginatedData<ManagerData>> {
    return this.http.get<PaginatedData<ManagerData>>(url);
  }
}
