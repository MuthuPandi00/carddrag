import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardfourComponent } from './cardfour.component'
const routes: Routes = [
  {path:'',component:CardfourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardfourRoutingModule { }
