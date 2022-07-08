import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MaterialExampleModule } from '../material.module';

import { MatNativeDateModule } from '@angular/material/core';
import {CardRoutingModule} from './card-routing.module'
@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    MatNativeDateModule,
    CardRoutingModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
