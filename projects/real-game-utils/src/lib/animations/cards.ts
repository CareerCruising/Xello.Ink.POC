import { animate, animation, group, query, style } from "@angular/animations";

const animationCurve = '500ms cubic-bezier(0.7, -0.4, 0.4, 1.4)';

export const cardFadeFromEmpty = animation([
  group([
    style({
      backgroundColor: '#fafafa',
    }),
    animate(animationCurve, style({
      backgroundColor: '#f0e3f6',
    })),
    query('.card__cta', [
      style({
        height: '16px',
        opacity: 0,
      }),
      animate(animationCurve, style({
        height: '40px',
        opacity: 1
      })),
    ]),
    query('.card__desc', [
      style({
        opacity: 0,
        transform: 'translateY(-6px)'
      }),
      animate(animationCurve, style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
    ], {optional: true}),
    query('.card__desc--previous', [
      style({
        opacity: 1,
        transform: 'translateY(-10px)'
      }),
      animate(animationCurve, style({
        opacity: 0,
        transform: 'translateY(0)'
      })),
    ], {optional: true}),
    query('.card__illustration', [
      style({
        opacity: 1,
        height: '64px',
        filter: 'grayscale(100%) contrast(50%) brightness(140%)',
        transform: 'scale(0.4)',
      }),
      animate(animationCurve, style({
        height: '96px',
        filter: 'grayscale(0%) contrast(100%) brightness(100%)',
        transform: 'scale(1)',
      })),
    ]),
    query('.card__title', [
      style({
        opacity: 0,
        height: 0,
        fontSize: '14px',
      }),
      animate(animationCurve, style({
        opacity: 1,
        height: '32px',
        fontSize: '*',
      })),
    ]),
  ])
]);
