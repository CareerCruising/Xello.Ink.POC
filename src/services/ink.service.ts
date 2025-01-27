import { Injectable } from '@angular/core';
import { Story } from 'inkjs';
import * as json from '../assets/story.ink.json';
import { Choice } from 'inkjs/engine/Choice';
import { ContentLine } from '../models/content-line.interface';

@Injectable({
  providedIn: 'root'
})
export class InkService {

  story = new Story(json);

  delay = 1000;

  isPlaying = false;
  isComplete = false;

  groups: {[id: string]: ContentLine[]} = {};
  currentChoices: Choice[] = [];
  currentMode: string = '';
  currentAccent = '';
  currentGroup = 'right';
  currentChoiceMode = '';

  currentBackground = '';
  numColumns = 1;

  knots: string[] = [];

  constructor() {
    this.story.variablesState.$('environment', 'web');
  }

  Continue() {
    if (this.isPlaying) {
      return;
    }
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
          case 'mode':
            this.currentMode = tokens[1];
            break;
          case 'accent':
            this.currentAccent = tokens[1];
            break;
          case 'columns':
            const columns = +tokens[1];
            this.numColumns = columns;
            break;
          case 'choice-mode':
            this.currentChoiceMode = tokens[1];
            break;
          case 'group':
            this.currentGroup = tokens[1];
            break;
          case 'illustration':
            this.addLine(this.currentGroup, {type: 'illustration', group: this.currentGroup, content: tokens[1]});
            break;
          case 'background':
            this.currentBackground = tokens[1];
        }
        this.isPlaying = false;
        this.Continue();
        return;
      } else {
        this.addLine(this.currentGroup, {type: 'text', group: this.currentGroup, content: text});
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

  addLine(group: string, line: ContentLine) {
    if (!this.groups[group]) {
      this.groups[group] = [];
    }
    this.groups[group].push(line);
  }

  Reset() {
    this.groups = {};
    this.currentAccent = '';
    this.currentBackground = '';
    this.numColumns = 1;
    this.currentChoiceMode = '';
  }

  SelectChoice(choice: Choice) {
    this.Reset();
    this.Choose(choice);
    this.Continue();
  }
}
