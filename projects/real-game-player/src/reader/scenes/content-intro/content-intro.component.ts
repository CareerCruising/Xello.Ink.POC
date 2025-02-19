import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { BasicComponent } from "../basic/basic.component";
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-content-intro',
  standalone: true,
  imports: [ CommonModule, BasicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './content-intro.component.html',
  styleUrl: './content-intro.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContentIntroComponent extends BasicComponent implements OnInit {

  illustration: string = '';
  fadeIn = false;
  results: {variable: string, name: string, icon: string, change: number}[] = [];

  ngOnInit(): void {
    this.fadeIn = true;
    this.inkStore.setDelay(0)
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'modify':
            this.results.push({
              variable: command.params[0],
              name: this.getName(command.params[0]),
              icon: this.getIcon(command.params[0]),
              change: +command.params[1]
            });
            break;
          case 'illustration':
            this.illustration = command.params[0];
            break;
          default:
            break;
        }
      });
  }

  getName(variable: string): string {
    switch (variable) {
      case 'xp':
        return 'XP';
      case 'wellbeing':
        return 'well-being';
      default:
        return variable;
    }
  }

  getIcon(variable: string): string {
    switch (variable) {
      case 'xp':
        return 'ic-ribbon';
      case 'career':
        return 'ic-id-badge';
      case 'wellbeing':
        return 'ic-fun';
      default:
        return '';
    }
  }
}
