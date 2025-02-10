import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { CareerService } from '../src/services/career.service';
import { Career } from '@careercruising/real-game-utils';


export const CareerStore = signalStore(
  { providedIn: 'root' },
  withState({
    career: null as null | Career
  }),
  withMethods(
    (
      state,
      careerService = inject(CareerService),
    ) => ({
      getCareer: () => {
        careerService.getCareerProfile(95).subscribe((data) => {
          patchState(state, {
            career: data,
          });
          console.log(data);
        });
      },
      clear: () => {
        patchState(state, {
          career: null,
        });
      },
    }),
  ),
);
