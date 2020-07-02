import { trigger, transition, style, animate, state } from '@angular/animations';

export let fadeAnimation = trigger('fadeIn', [
  state('void', style({
    opacity : 0
  })),
  state('in', style({
    transform: 'translateY(0)'
  })),
  transition('in <=> *', [
    animate(1000)
  ])
])