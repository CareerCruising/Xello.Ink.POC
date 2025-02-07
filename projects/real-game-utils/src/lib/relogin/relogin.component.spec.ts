import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloginComponent } from './relogin.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ReloginComponent', () => {
  let component: ReloginComponent;
  let fixture: ComponentFixture<ReloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReloginComponent,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
      ],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(ReloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require password', () => {
    component.relogin();
    expect(component.formGroup.controls['password'].status).toEqual('INVALID');
  });
  it('should emit relogin if password entered', () => {
    component.formGroup.controls['password'].setValue('password');
    component.relogin();
    expect(component.formGroup.controls['password'].status).toEqual('VALID');
  });
});
