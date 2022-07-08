import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardtwoComponent} from './cardtwo.component';

const routes: Routes = [
  {path:'',component:CardtwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardTwoRoutingModule { }
