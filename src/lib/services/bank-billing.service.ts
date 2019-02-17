import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankModule, Config } from '../modules/bank.module';
import { PlanData, Data } from '../bank.models';

@Injectable({
  providedIn: BankModule
})
export class BankBillingService {
  private ourBaseUrl = '';

  constructor(
    @Inject('config') private config: Config,
    private http: HttpClient
  ) {
    config.isDevMode === true
      ? (this.ourBaseUrl = 'https://atm-hotspot-backend.herokuapp.com')
      : (this.ourBaseUrl = 'http://127.0.0.1:8000');
  }

  getPlans(): Observable<Data<PlanData[]>> {
    return this.http.get<Data<PlanData[]>>(`${this.ourBaseUrl}/banks/plans`);
  }
}
