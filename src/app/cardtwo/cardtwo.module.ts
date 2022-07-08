import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardtwoComponent } from './cardtwo.component';
import { MaterialExampleModule } from '../material.module';

import { MatNativeDateModule } from '@angular/material/core';
import { CardtwoDirective } from './cardtwo.directive';
import { CardTwoRoutingModule } from './cardtwo-routing.module';

@NgModule({
  declarations: [
    CardtwoComponent,
    CardtwoDirective
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    MatNativeDateModule,
    CardTwoRoutingModule
  ],
  exports: [CardtwoComponent]
})
export class CardtwoModule { }
