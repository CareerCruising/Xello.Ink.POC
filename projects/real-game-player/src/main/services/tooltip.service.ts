import { inject, Injectable } from '@angular/core';
import { TooltipDefinition } from '../directives/tooltip-anchor.directive';
import { InkService } from '../../services/ink.service';
import { InkStore } from '../../../store/ink.store';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  tooltips: TooltipDefinition[];

  inkStore = inject(InkStore);

  constructor(private inkService: InkService) {
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
    this.inkService.SelectChoice(this.inkStore.story().currentChoices[0])
  }
}
