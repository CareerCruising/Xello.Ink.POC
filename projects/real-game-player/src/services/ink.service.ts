import { computed, EventEmitter, inject, Injectable } from '@angular/core';
import { Story } from 'inkjs';
import * as json from '../assets/story.ink.json';
import { Choice } from 'inkjs/engine/Choice';
import { ContentLine } from '../models/content-line.interface';
import { environment } from '../environments/environment';
import { Templates } from '../models/templates.model';
import { CareerService } from './career.service';
import { CareerStore } from '../../store/career.store';
import { firstValueFrom } from 'rxjs';

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}

@Injectable({
  providedIn: 'root'
})
export class InkService {

  onCommandReceived = new EventEmitter<{ name: string, params: any[] }>();
  onLookup = new EventEmitter<string>();

  careerStore = inject(CareerStore);

  story = new Story(json);

  delay = 1000;

  isPlaying = false;
  isComplete = false;

  groups: {[id: string]: ContentLine[]} = {};
  currentText: ContentLine[] = [];
  currentChoices: Choice[] = [];
  currentChoiceMode = '';
  startingKnot = '';
  currentPathString = '';

  currentTemplate: Templates = Templates.Title;

  isInitialized = false

  currentBackground = '';
  numColumns = 1;
  showFullUI = false;

  knots: string[] = [];

  constructor(
    private careerService: CareerService
  ) {
    this.startingKnot = environment.STARTING_KNOT || 'intro';
    this.initStory();
  }

  initStory() {
    this.story.variablesState.$('environment', 'web');
    this.story.BindExternalFunction('loadCareer', (id: string) => {
      return this.careerService.getCareerProfile(+id)
    }, true);
    this.story.BindExternalFunction('lowercase', (str) => { return str.toLowerCase() }, true);
    this.story.BindExternalFunction('titlecase', (str: string) => { return str.split(' ').map(text => capitalize(text)).join(' ') }, true);

    this.currentPathString = localStorage.getItem('currentPathString') || '';
    if (false && this.currentPathString !== '') {
      this.ChoosePathString(this.currentPathString.split('.')[0]);
    } else if (this.startingKnot) {
      this.ChoosePathString(this.startingKnot);
    }
  }

  async Continue() {
    if (this.isPlaying) {
      return;
    }
    this.isInitialized = true;
    this.isPlaying = true;
    this.currentChoices = this.story.currentChoices;
    if (this.story.canContinue) {
      this.isComplete = false;
      const text = this.story.Continue() ?? '';

      if (text.startsWith('>>>')) {
        await this.HandleCommand(text.substring(3).trim());
        this.Continue();
      } else {
        this.addLine({type: 'text', content: text});
        setTimeout(() => {
          this.isPlaying = false;
          this.Continue();
        }, this.delay);
      }
    } else {
      this.isComplete = true;
    }

    if (this.story.state.currentPathString) {
      const pathString = this.story.state.currentPathString.split('.')[0]
      if (this.currentPathString !== pathString) {
        this.currentPathString = pathString;
        localStorage.setItem('currentPathString', this.currentPathString);
        console.log('new path:', this.currentPathString);  
      }
    }
    this.isPlaying = false;
  }

  Choose(choice: Choice) {
    this.story.ChooseChoiceIndex(choice.index);
  }

  ChoosePathString(path: string) {
    if (!this.story.HasFunction(path)) {
      console.error(`Attempting to navigate to ${path}, which does not exist in this story!`)
      return;
    }
    this.story.ChoosePathString(path);
  }

  async HandleCommand(str: string) {
    const tokens = str.split(' ');
    
    const commandName = tokens[0].replaceAll(':', '');
    const command = {
      name: commandName,
      params: tokens.slice(1)
    }
  
    switch (commandName) {
      case 'ui':
        this.showFullUI = tokens[1] === 'game';
        break;
      case 'lookup':
        const values = tokens[1].split('.');
        var res = await firstValueFrom(this.careerService.getCareerProfile(95));
        // @ts-ignore;
        this.onLookup.emit(res[values[1]])
        break;
      case 'delay':
        this.delay = +tokens[1];
        await sleep(this.delay);
        break;
      case 'mode':
      case 'template':
        this.currentTemplate = Templates[tokens[1] as keyof typeof Templates];
        break;
      case 'rating':
        this.addLine({ type: 'rating', content: tokens[1] })
        break;
      case 'background':
        this.currentBackground = tokens[1].toLowerCase();
        break;
    }

    this.onCommandReceived.emit(command);
    await sleep(1); // This ensures synchronicity when creating templates -- they need a chance to render and subscribe to events
    this.isPlaying = false;
    return command;
  }

  addLine(line: Partial<ContentLine>) {
    this.currentText.push({
      id: this.currentText.length,
      type: 'text',
      content: '',
      ...line
    });
  }

  Reset() {
    this.groups = {};
    this.currentTemplate = Templates.None;
    this.currentBackground = '';
    this.currentText = [];
    this.numColumns = 1;
    this.delay = 1000;
    this.currentChoiceMode = '';
  }

  SelectChoice(choice: Choice) {
    this.Reset();
    this.Choose(choice);
    this.Continue();
  }
}
