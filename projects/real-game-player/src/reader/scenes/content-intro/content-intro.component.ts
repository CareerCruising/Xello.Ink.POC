import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { BasicComponent } from "../basic/basic.component";
import { takeUntil } from 'rxjs';
import { ResultComponent } from "../../components/result/result.component";

@Component({
  selector: 'app-content-intro',
  standalone: true,
  imports: [CommonModule, BasicComponent, ResultComponent],
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
  showResults = false;

  ngOnInit(): void {
    this.fadeIn = true;
    this.inkStore.setDelay(0)
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'illustration':
            this.illustration = command.params[0];
            break;
          default:
            break;
        }
      });
  }
}
