import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StripeService} from 'ngx-stripe';
import {BankModule, Config} from '../modules/bank.module';

@Injectable({
  providedIn: BankModule
})
export class BankBillingService {

  private ourBaseUrl = '';

  constructor(
    @Inject('config') private config: Config,
    private http: HttpClient,
    private stripeSvc: StripeService
  ) {
    config.isDevMode === true
      ? (this.ourBaseUrl = 'https://atm-hotspot-backend.herokuapp.com')
      : (this.ourBaseUrl = 'http://127.0.0.1:8000');
  }

  getPlans() {
  }

}
