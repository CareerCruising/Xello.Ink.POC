import { signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { Story } from 'inkjs';

import * as json from '../src/assets/story.ink.json'

export const InkStore = signalStore(
  { providedIn: 'root' },
  withState({
    story: new Story(json)
  }),
  withMethods(
    (
      state
    ) => ({
      // ...
    }),
  ),
  withHooks({
    // ...
  }),
);
