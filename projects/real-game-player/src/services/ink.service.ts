import { ApplicationRef, EventEmitter, inject, Injectable } from '@angular/core';
import { Choice } from 'inkjs/engine/Choice';
import { ContentLine } from '../models/content-line.interface';
import { environment } from '../environments/environment';
import { Templates } from '../models/templates.model';
import { CareerService } from './career.service';
import { CareerStore } from '../../store/career.store';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { capitalize } from '../helpers/string.helpers';
import { InkStore } from '../../store/ink.store';

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@Injectable({
  providedIn: 'root'
})
export class InkService {

  onCommandReceived = new EventEmitter<{ name: string, params: any[] }>();
  onLookup = new EventEmitter<string>();

  careerStore = inject(CareerStore);
  inkStore = inject(InkStore);

  isPlaying = false;
  isComplete = false;

  startingKnot = '';
  currentPathString = '';

  isInitialized = false
  lastChoiceSelected: Choice | null = null;

  knots: string[] = [];

  constructor(
    private careerService: CareerService,
    private appRef: ApplicationRef
  ) {
    this.startingKnot = environment.STARTING_KNOT || 'intro';
    this.initStory();
  }

  initStory() {
    const story = this.inkStore.story();
    if (story !== null) {
      story.variablesState.$('environment', 'web');
      story.BindExternalFunction('loadCareer', (id: string) => {
        return this.careerService.getCareerProfile(+id)
      }, true);
      story.BindExternalFunction('lowercase', (str) => { return str.toLowerCase() }, true);
      story.BindExternalFunction('titlecase', (str: string) => { return str.split(' ').map(text => capitalize(text)).join(' ') }, true);  
    }

    this.currentPathString = localStorage.getItem('currentPathString') || '';
    if (false && this.currentPathString !== '') {
      this.ChoosePathString(this.currentPathString.split('.')[0]);
    } else if (this.startingKnot) {
      this.ChoosePathString(this.startingKnot);
    }
  }

  async Continue() {
    const story = this.inkStore.story();
    if (this.isPlaying || !story) {
      return;
    }
    this.isPlaying = true;

    if (story.canContinue) {
      this.isComplete = false;
      const text = story.Continue() ?? '';
      this.inkStore.continue();

      if (text.startsWith('>>>')) {
        await this.HandleCommand(text.substring(3).trim(), story.currentTags || undefined);
        this.appRef.tick();
        this.isPlaying = false;
        this.Continue();
      } else {
        const rawText = text.trim();
        if (!this.lastChoiceSelected || this.lastChoiceSelected.text !== rawText) {
          this.inkStore.addLine({type: 'text', content: text});
          this.appRef.tick();
          setTimeout(() => {
            this.isPlaying = false;
            this.Continue();
          }, this.inkStore.delay());
        } else {
          this.isPlaying = false;
          this.Continue();
        }
      }
    } else {
      this.isPlaying = false;
      this.isComplete = true;
      this.appRef.tick();
    }

    this.lastChoiceSelected = null;

    if (story.state.currentPathString) {
      const pathString = story.state.currentPathString.split('.')[0]
      if (this.currentPathString !== pathString) {
        this.currentPathString = pathString;
        localStorage.setItem('currentPathString', this.currentPathString);
      }
    }
  }

  Choose(choice: Choice) {
    this.inkStore.story().ChooseChoiceIndex(choice.index);
  }

  ChoosePathString(path: string) {
    if (!this.inkStore.story().HasFunction(path)) {
      console.error(`Attempting to navigate to ${path}, which does not exist in this story!`)
      return;
    }
    this.inkStore.story().ChoosePathString(path);
    this.Reset();
    this.Continue();
  }

  async HandleCommand(str: string, tags?: string[]) {
    const tokens = str.match(/(?:[^\s"]+|"[^"]*")+/g); 
    
    console.log(str);

    if (!tokens) {
      return;
    }
    
    const commandName = tokens[0].replaceAll(':', '');
    const command = {
      name: commandName,
      params: tokens.slice(1).map(token => {
        if (token.startsWith("\"")) { token = token.slice(1) };
        if (token.endsWith("\"")) { token = token.slice(0, -1) };
        return token;
      }),
      tags
    }
  
    switch (commandName) {
      case 'ui':
        this.inkStore.setUIState(tokens[1] === 'game' ? 'full' : 'partial');
        await sleep(1000);
        break;
      case 'lookup':
        const values = tokens[1].split('.');
        var res = await firstValueFrom(this.careerService.getCareerProfile(95));
        // @ts-ignore;
        this.onLookup.emit(res[values[1]])
        break;
      case 'delay':
        this.inkStore.setDelay(+tokens[1]);
        await sleep(this.inkStore.delay());
        break;
      case 'frame':
        await sleep(1000);
        break;
      case 'mode':
      case 'template':
        this.inkStore.setTemplate(Templates[tokens[1] as keyof typeof Templates]);
        break;
      case 'rating':
        this.inkStore.addLine({ type: 'rating', content: tokens[1] })
        break;
      case 'background':
        this.inkStore.setBackground(tokens[1].toLowerCase());
        break;
    }

    this.onCommandReceived.emit(command);
    this.appRef.tick();

    await sleep(1); // This ensures synchronicity when creating templates -- they need a chance to render and subscribe to events
    this.isPlaying = false;
    return command;
  }

  Reset() {
    this.inkStore.reset();
  }

  SelectChoice(choice: Choice) {
    this.lastChoiceSelected = choice;
    this.Choose(choice);
    this.Reset();
    this.Continue();
  }
}
