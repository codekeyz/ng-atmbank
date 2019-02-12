import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BankService } from './bank.service';
import { BankAuthService } from './bank-auth.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

export interface Config {
  isDevMode: boolean;
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
  ]
})
export class BankModule {
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: BankModule,
      providers: [
        BankService,
        BankAuthService,
        {
          provide: 'config',
          useValue: config
        }
      ]
    };
  }
}
