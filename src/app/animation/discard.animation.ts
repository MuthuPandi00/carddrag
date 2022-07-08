import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

export const discard =
trigger('discard', [
    state('active', style({
        opacity: '1',
        transform: 'rotateZ(-90deg)',
      top:'{{top}}px',
      })
    ),
    state('inact', style({
        opacity: '0',
        transform: 'rotateZ(0deg)',
        top:'{{top}}px',
      })
    ),
    transition('active => inact', animate('1s ease-in'),{params:{top:0,left:0}}),
    transition('inact => active', animate('1s ease-in'),{params:{top:0,left:0}}),
  ])