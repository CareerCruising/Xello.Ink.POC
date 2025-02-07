import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'lib-typeahead-input-search',
  standalone: true,
  templateUrl: './typeahead-career-search.component.html',
  styleUrls: ['./typeahead-career-search.component.scss'],
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule,
    HighlightDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TypeaheadInputSearchComponent<T> {
  @Input() savedOptions: any[] = [];
  @Input() placeholder = '';
  @Input() list: any[] = [];
  @Input() heapId: string = 'student-real-game-searched-for-a-career';
  @Input() optionField: string = 'value';
  @Input() valueField: string = 'id';
  @Output() selectOption = new EventEmitter<T>();
  selectionInput: string = '';
  noResult = false;

  selectSearch(item: any) {
    this.selectOption.emit(item as T);
    this.selectionInput = '';
  }

  isSaved(id: number) {
    return !!this.savedOptions.find(
      (option: any) => option[this.valueField] == id
    );
  }

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }
}
