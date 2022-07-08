import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardthreeComponent} from './cardthree.component';

const routes: Routes = [
  {path:'',component:CardthreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardthreeRoutingModule { }
