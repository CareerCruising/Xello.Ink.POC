import { Injectable } from '@angular/core';
import { Story } from 'inkjs';
import * as json from '../assets/story.ink.json';
import { Choice } from 'inkjs/engine/Choice';
import { ContentLine } from '../models/content-line.interface';
import { environment } from '../environments/environment';
import { Templates } from '../models/templates.model';

@Injectable({
  providedIn: 'root'
})
export class InkService {

  story = new Story(json);

  delay = 1000;

  isPlaying = false;
  isComplete = false;

  groups: {[id: string]: ContentLine[]} = {};
  currentText: ContentLine[] = [];
  currentChoices: Choice[] = [];
  currentAccent = '';
  currentChoiceMode = '';
  startingKnot = '';

  currentTemplate: Templates = Templates.Title;

  isInitialized = false

  currentBackground = '';
  numColumns = 1;
  showFullUI = false;

  knots: string[] = [];

  constructor() {
    this.startingKnot = environment.STARTING_KNOT;
    this.story.variablesState.$('environment', 'web');
  }

  Continue() {
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
        const command = text.substring(3).trim();
        const tokens = command.split(' ');
        console.log(tokens);
        switch (tokens[0].replaceAll(':', '')) {
          case 'ui':
            this.showFullUI = tokens[1] === 'game';
            break;
          case 'mode':
          case 'template':
            this.currentTemplate = Templates[tokens[1] as keyof typeof Templates];
            break;
          case 'accent':
            this.currentAccent = tokens[1];
            break;
          case 'illustration':
            this.addLine({type: 'illustration', content: tokens[1]});
            break;
          case 'background':
            this.currentBackground = tokens[1].toLowerCase();
        }
        this.isPlaying = false;
        this.Continue();
        return;
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
    this.currentAccent = '';
    this.currentBackground = '';
    this.currentText = [];
    this.numColumns = 1;
    this.currentChoiceMode = '';
  }

  SelectChoice(choice: Choice) {
    this.Reset();
    this.Choose(choice);
    this.Continue();
  }
}
