import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { CareerService } from '../src/services/career.service';


export const CareerStore = signalStore(
  { providedIn: 'root' },
  withState({
    career: null as null | any
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
