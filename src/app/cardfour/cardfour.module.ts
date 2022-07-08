import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardfourRoutingModule } from './cardfour-routing.module';
import { CardfourComponent } from './cardfour.component';
import { MaterialExampleModule } from '../material.module'

@NgModule({
  declarations: [
    CardfourComponent
  ],
  imports: [
    CommonModule,
    CardfourRoutingModule,
    MaterialExampleModule
  ]
})
export class CardfourModule { }
