import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { Story } from 'inkjs';

import * as json from '../src/assets/story.ink.json'
import { ContentLine } from '../src/models/content-line.interface';
import { Choice } from 'inkjs/engine/Choice';
import { Templates } from '../src/models/templates.model';
import { computed } from '@angular/core';

const DELAY_NORMAL = 1000;

export const InkStore = signalStore(
  { providedIn: 'root' },
  withState({
    story: new Story(json),
    delay: DELAY_NORMAL,
    isPlaying: false,
    isComplete: false,
    isInitialized: false,
    isActionViewOpen: false,
    showFullUI: true,
    currentBackground: '',
    currentChoices: [] as Choice[],
    currentChoiceMode: '',
    currentText: [] as ContentLine[],
    currentTemplate: Templates.Title
  }),
  withComputed(({ currentTemplate }) => ({
    choiceRequiresConfirmation: computed(() => {
      switch (currentTemplate()) {
        case Templates.MultiChoice:
        case Templates.DecisionPoint:
        case Templates.Rating:
          return true;
        default:
          return false;
      } 
    })
  })),
  withMethods(
    ( store ) => ({
      continue() {
        var story = store.story()
        if (!story) {
          return;
        }

        patchState(store, {
          isInitialized: true,
          currentChoices: story.currentChoices
        });
      },
      addLine(line: Partial<ContentLine>) {
        const _currentText = store.currentText()
        const _newLine  = {
          id: _currentText.length,
          type: 'text',
          content: '',
          ...line
        };

        patchState(store, {
          currentText: [..._currentText, _newLine]
        });
      },
      setUIState(state: string) {
        patchState(store, { showFullUI: state === 'full' });
      },
      setActionViewOpen(isOpen: boolean) {
        patchState(store, { isActionViewOpen: isOpen });
      },
      setBackground(background: string) {
        patchState(store, { currentBackground: background });
      },
      setDelay(delay: number) {
        patchState(store, { delay });
      },
      setTemplate(template: Templates) {
        patchState(store, { currentTemplate: template });
      },
      reset() {
        patchState(store, {
          currentTemplate: Templates.None,
          currentBackground: '',
          currentText: [],
          delay: DELAY_NORMAL,
          currentChoiceMode: '',
        })
      }
    }),
  ),
  withHooks({
    // ...
  }),
);
