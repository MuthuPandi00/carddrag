import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: ()=> import('../app/card/card-routing.module').then(x=>x.CardRoutingModule)},
  {path:'cardthree', loadChildren: ()=> import('../app/cardthree/cardthree-routing.module').then(x=>x.CardthreeRoutingModule)},
  {path:'cardtwo', loadChildren: ()=> import('../app/cardtwo/cardtwo-routing.module').then(x=>x.CardTwoRoutingModule)},
  {path:'cardfour', loadChildren: ()=> import('../app/cardfour/cardfour-routing.module').then(x=>x.CardfourRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
