import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardfiveRoutingModule } from './cardfive-routing.module';
import { CardfiveComponent } from './cardfive.component';


@NgModule({
  declarations: [
    CardfiveComponent
  ],
  imports: [
    CommonModule,
    CardfiveRoutingModule
  ]
})
export class CardfiveModule { }
