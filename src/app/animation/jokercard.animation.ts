import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

export const flipState =
trigger('flipState', [
    state('flip_active', style({
        opacity: '1',
        transform: 'rotateZ(-90deg)',
      })
    ),
    state('flip_inact', style({
        opacity: '0',
        transform: 'rotateZ(0deg)',
      })
    ),
    transition('flip_active => flip_inact', animate('1s ease-in')),
    transition('flip_inact => flip_active', animate('1s ease-in')),
  ])