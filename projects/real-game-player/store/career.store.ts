import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { CareerService } from '../src/services/career.service';
import { Career } from '@careercruising/real-game-utils';


export const CareerStore = signalStore(
  { providedIn: 'root' },
  withState({
    career: null as null | Career,
    careers: [] as Career[]
  }),
  withComputed(({ careers, career }) => ({
    careerProfile: computed(() => {
      return careers()?.find(x => x.careerId === career()?.careerId) || null
    })
  })),
  withMethods(
    (
      state,
      careerService = inject(CareerService),
    ) => ({
      getCareer: (careerId: number) => {
        careerService.getCareerProfile(careerId).subscribe((data) => {
          patchState(state, {
            career: data,
          });
        });
      },
      getAllCareers: () => {
        careerService.getAllCareers().subscribe((data) => {
          patchState(state, {
            careers: data,
          });
        });
      },
      clear: () => {
        patchState(state, {
          career: null,
          careers: []
        });
      },
    }),
  ),
  withHooks({
    onInit({ getAllCareers }) {
      getAllCareers();
    },
  }),
);
