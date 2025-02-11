import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { BasicComponent } from '../basic/basic.component';
import { CommonModule } from '@angular/common';
import { query, trigger, transition, animate, style, group, state } from '@angular/animations';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule, BasicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  animations: [
    trigger('basic', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('true => false', [
        group([
          style({ opacity: 1, transform: 'translate(0px, -50%)' }),
          animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translate(200px, -50%)'  }))  
        ])
      ])
    ]),
    trigger('illustration', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', [
        group([
          style({ opacity: 0, transform: 'translate(-200px, -50%)' }),
          animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translate(0px, -50%)'  })),
          query('.illustration', [
            style({ transform: 'translateX(-200px)' }),
            animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'translateX(0px)'  })),
          ])  
        ])
      ])
    ])
  ]
})
export class TitleComponent extends BasicComponent implements OnInit {

  showIllustration = false;

  ngOnInit() {
    setTimeout(() => {
      this.showIllustration = true;
    }, 1500);
  }

}
