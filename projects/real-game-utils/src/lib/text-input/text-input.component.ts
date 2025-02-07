import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  standalone: true,
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  imports: [
    TranslateModule,
    NgxMaskDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideNgxMask(),
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: TextInputComponent,
    },
  ],
})
export class TextInputComponent {
  languageService = inject(TranslateService);

  @ViewChild('input', { static: true }) input!: ElementRef;
  @Input() placeholder = '';
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() value: number | string = '';
  @Input() maxLength?: number;
  @Input() min?: number;
  @Input() max?: number;
  @Input() mask = 'separator';
  @Input() error: string | boolean = '';
  @Input() ariaLabel?: string;
  @Input() required: boolean = true;
  @Output() setInput = new EventEmitter<string | number>();

  processData(value: string | number) {
    this.markAsTouched();
    this.onChange(value);
    this.setInput.emit(value);
  }

  getThousandsSeparator(): string {
    switch (this.languageService.currentLang) {
      case 'es-US':
        return '.';
      case 'fr-CA':
        return ' ';
      default:
        return ',';
    }
  }

  onChange = (value: string | number) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  writeValue(quantity: number) {
    this.value = quantity;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (this.required && quantity <= 0) {
      return {
        mustBePositive: {
          quantity,
        },
      };
    }
    return null;
  }
}
