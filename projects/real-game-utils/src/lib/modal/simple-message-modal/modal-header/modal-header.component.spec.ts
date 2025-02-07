import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalHeaderComponent } from './modal-header.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ModalHeaderComponent', () => {
  let component: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalHeaderComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
