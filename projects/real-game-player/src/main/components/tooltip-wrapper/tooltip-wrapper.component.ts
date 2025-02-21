import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { TooltipService } from '../../services/tooltip.service';
import { TooltipContentComponent } from '../tooltip-content/tooltip-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip-wrapper',
  animations: [
    trigger('visibility', [
      state('true', style({opacity: '1'})),
      transition('false => true', [
        style({opacity: '0'}),
        animate('.15s ease-in-out')
      ]),
      transition('true => false', [
        animate('.15s ease-in-out', style({opacity: '0'}))
      ]),
    ])
  ],
  imports: [TooltipContentComponent, CommonModule],
  standalone: true,
  templateUrl: './tooltip-wrapper.component.html',
  styleUrls: ['./tooltip-wrapper.component.scss']
})
export class TooltipWrapperComponent implements OnInit {
  service: TooltipService;

  constructor(_service: TooltipService) {
    this.service = _service;
  }

  ngOnInit() {
  }

  closeTooltip(id: string): void {
    this.service.removeTooltip(id, true);
  }

}
