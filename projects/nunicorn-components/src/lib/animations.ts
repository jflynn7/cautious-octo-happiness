import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';

export const ZoomInOut = [
  trigger('zoomInOut', [
    state('in', style({
      'opacity': '1', 'transform': 'scale(1)'
    })),
    state('out', style({
      'opacity': '0', 'transform': 'scale(0)',
    })),
    transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'transform': 'scale(0)',
          'opacity': '0'
        }))
      ]
    )]),
    transition('out => in', [group([
        animate('400ms ease-in-out', style({
          'opacity': '1',
          'transform': 'scale(1)'
        }))
      ]
    )])
  ]),
];

export const FadeInOut = [
  trigger('fadeInOut', [
    state('in', style({
      'opacity': '1',
    })),
    state('out', style({
      'opacity': '0',
      'display': 'none'
    })),
    transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        }))
      ]
    )]),
    transition('out => in', [group([
        animate('400ms ease-in-out', style({
          'opacity': '1',
        })),
        animate('450ms ease-in-out', style({
          'display': 'none',
        }))
      ]
    )])
  ]),
]
