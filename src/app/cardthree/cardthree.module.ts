import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardthreeComponent } from './cardthree.component';
import { MaterialExampleModule } from '../material.module';

import { MatNativeDateModule } from '@angular/material/core';
import { CardthreeDirective } from './cardthree.directive';
import { CardthreeRoutingModule } from './cardthree-routing.module'

@NgModule({
  declarations: [
    CardthreeComponent,
    CardthreeDirective
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    MatNativeDateModule,
    CardthreeRoutingModule
  ],
  exports: [CardthreeComponent]
})
export class CardthreeModule { }
