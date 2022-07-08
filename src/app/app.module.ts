import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from './card/card.module'
import { CardtwoModule } from './cardtwo/cardtwo.module'
import { CardthreeModule } from './cardthree/cardthree.module'
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { CardfourModule } from './cardfour/cardfour.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    CardtwoModule,
    CardthreeModule,
    CardfourModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
