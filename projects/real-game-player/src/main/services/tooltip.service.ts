import { Injectable } from '@angular/core';
import { TooltipDefinition } from '../directives/tooltip-anchor.directive';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  tooltips: TooltipDefinition[];

  constructor() {
    this.tooltips = [];
  }

  addTooltip(obj: TooltipDefinition): void {
    this.tooltips = [ obj ];
  }

  removeTooltip(id: string, usedCloseButton = false): void {
    const _index = this.tooltips.findIndex(x => x.id === id);
    if (_index > -1) {
      this.tooltips.splice(_index, 1);
    }
  }
}
