import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { User } from '../types/user.types';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'lib-relogin',
  standalone: true,
  imports: [TranslateModule, FormsModule, ReactiveFormsModule],
  templateUrl: './relogin.component.html',
  styleUrl: './relogin.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('FadeSlideInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-25%)' }),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-25%)' }))
      ])
    ])
  ],
})
export class ReloginComponent implements OnInit {
  @Input() user!: User | null;
  @Input() inProgress: boolean = false;
  @Input() reloginError: boolean = false;
  formGroup!: UntypedFormGroup;
  @Output() onClickRelogin = new EventEmitter<string>();
  @Output() onClickForgotPassword = new EventEmitter();
  @Output() onClickDifferentUser = new EventEmitter();

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required]]
    });
  }

  relogin() {
    if (this.formGroup.controls['password'].invalid) {
      this.formGroup.controls['password'].markAsDirty();
      this.formGroup.controls['password'].markAsTouched();
      return;
    }
    this.onClickRelogin.emit(this.formGroup.value['password']);
  }

  forgotPassword() {
    this.onClickForgotPassword.emit();
  }

  login() {
    this.onClickDifferentUser.emit();
  }
}
