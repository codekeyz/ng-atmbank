import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BankModule, Config} from '../modules/bank.module';
import {APIResponse, ATMData, BankData, BranchData, Data, ManagerData, PaginatedData} from '../bank.models';

@Injectable({
  providedIn: BankModule
})
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

  getBranches(url: string = `${this.ourBaseUrl}/banks/me/branches`): Observable<PaginatedData<BranchData>> {
    return this.http.get<PaginatedData<BranchData>>(url);
  }

  getBranch(id: string): Observable<PaginatedData<BranchData>> {
    return this.http.get<PaginatedData<BranchData>>(`${this.ourBaseUrl}/banks/me/branches/${id}`);
  }

  addBranch($data: {
    name: string,
    city: string,
    town?: string
  }): Observable<Data<BranchData>> {
    return this.http.post<Data<BranchData>>(`${this.ourBaseUrl}/banks/me/branches`, $data);
  }

  updateBranch(id: string, $data: {
    name?: string,
    city?: string,
    town?: string
  }): Observable<Data<BranchData>> {
    return this.http.put<Data<BranchData>>(`${this.ourBaseUrl}/banks/me/branches/${id}`, $data);
  }

  deleteBranch(id: string): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.ourBaseUrl}/banks/me/branches/${id}`);
  }

  getATMs(
    url: string = `${this.ourBaseUrl}/banks/me/atms`
  ): Observable<PaginatedData<ATMData>> {
    return this.http.get<PaginatedData<ATMData>>(url);
  }


  getATM(id: string): Observable<Data<ATMData>> {
    return this.http.get<Data<ATMData>>(`${this.ourBaseUrl}/banks/me/atms/${id}`);
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

  updateATM(
    id: string,
    $data: {
      name?: string;
      status?: number;
      city?: string;
      lat?: number;
      lng?: number;
    }
  ): Observable<Data<ATMData>> {
    return this.http.put<Data<ATMData>>(
      `${this.ourBaseUrl}/banks/me/atms/${id}`,
      $data
    );
  }

  deleteATM(id: string): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.ourBaseUrl}/banks/me/atms/${id}`);
  }

  getManagers(
    url: string = `${this.ourBaseUrl}/banks/me/managers`
  ): Observable<PaginatedData<ManagerData>> {
    return this.http.get<PaginatedData<ManagerData>>(url);
  }

  getManager(id: string): Observable<PaginatedData<ManagerData>> {
    return this.http.get<PaginatedData<ManagerData>>(`${this.ourBaseUrl}/banks/me/managers/${id}`);
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

  updateManager(
    id: string,
    $data: {
      name?: string;
      email?: string;
    }
  ): Observable<Data<ManagerData>> {
    return this.http.put<Data<ManagerData>>(
      `${this.ourBaseUrl}/banks/me/managers/${id}`,
      $data
    );
  }

  deleteManager(id: string): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.ourBaseUrl}/banks/me/managers/${id}`);
  }
}
