import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardtwo]'
})
export class CardtwoDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseclick') onMouseClick(){
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  }

