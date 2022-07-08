import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardtwo]'
})
export class CardthreeDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseclick') onMouseClick(){
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  }

