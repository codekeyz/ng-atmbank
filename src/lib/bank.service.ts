import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankData, PaginatedData, ATMData, ManagerData } from './bank.models';

@Injectable()
export class BankService {
  private ourBaseUrl = 'https://atm-hotspot-backend.herokuapp.com';
  constructor(private http: HttpClient) {}

  getMyAccount(): Observable<BankData> {
    return this.http.get<BankData>(`${this.ourBaseUrl}/banks/me`);
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

  getManagers(
    url: string = `${this.ourBaseUrl}/banks/me/managers`
  ): Observable<PaginatedData<ManagerData>> {
    return this.http.get<PaginatedData<ManagerData>>(url);
  }
}
