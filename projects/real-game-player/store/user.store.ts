import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { environment } from '../src/environments/environment';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../src/services/user.service';
import { AuthenticatedUser } from '../src/models/authenticated-user.model';


export const UserStore = signalStore(
  { providedIn: 'root' },
  withState({
    user: null as null | AuthenticatedUser,
    institutionId: '',
  }),
  withMethods(
    (
      state,
      userService = inject(UserService),
      router = inject(Router),
    ) => ({
      load: () => {
        userService.getUserData().subscribe((data) => {
          if (!data) {
            if (!environment.production) {
              router.navigate(['login']);
            }
            return;
          }
          localStorage.setItem('culture', data.languages[0]?.name);
          patchState(state, {
            user: data,
          });
        });
      },
      setInstitutionId: (institutionId: string) => {
        patchState(state, {
          institutionId
        });
      },
      clear: () => {
        patchState(state, {
          institutionId: '',
          user: null,
        });
      },
    }),
  ),
  withHooks({
    onInit({ load }) {
      load();
    },
  }),
);
