import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [LandingComponent, AccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
