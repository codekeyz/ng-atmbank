import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BankService } from './bank.service';
import { BankAuthService } from './bank-auth.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        skipWhenExpired: true,
        whitelistedDomains: [
          '127.0.0.1:8000',
          'atm-hotspot-backend.herokuapp.com'
        ],
        blacklistedRoutes: [
          '127.0.0.1:8000/banks/login',
          'atm-hotspot-backend.herokuapp.com/banks/login'
        ]
      }
    })
  ],
  providers: [BankService, BankAuthService]
})
export class BankModule {}
