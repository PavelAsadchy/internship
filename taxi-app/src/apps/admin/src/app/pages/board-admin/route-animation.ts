import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => Detail', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate(
            '0.5s ease-in-out',
            style({ transform: 'translateX(-100%)' })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Detail => *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
