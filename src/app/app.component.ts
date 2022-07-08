import { Component, ViewChild } from '@angular/core';
import {CardtwoComponent} from './cardtwo/cardtwo.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carddrag';

  @ViewChild(CardtwoComponent) childView!: CardtwoComponent;
}
