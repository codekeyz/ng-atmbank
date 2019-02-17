<p align="center">
  <h1 align="center">ATMHotspot - Banks (Angular)</h1>
  <p align="center">The official Angular library for the <a href="https://hoss.netlify.com">Hover Software Solutions</a> ATMHotspot API</p>
</p>

## Installation

```bash
npm i @keyz/ng-atmhotspot-bank
```

## Example use:

Inside your ```app.module.ts``` file, add this

```typescript
import { BankModule } from '@keyz/ng-atmhotspot-bank';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
     BankModule.forRoot({
        isDevMode:false
     }),
  ]
})

export class AppModule {}
```

You can now access ```BankAuthService```, ```BankService```, ```BankAuthService``` anywhere in your app.

```typescript
import {BankService} from '@keyz/ng-atmhotspot-bank';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
 constructor(private dataSvc: BankService) {}
 
 ngOnInit() {}

}
```
## Further help

Official Documentation will be available pretty soon.
