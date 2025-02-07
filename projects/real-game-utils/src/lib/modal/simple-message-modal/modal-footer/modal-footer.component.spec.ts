import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalFooterComponent } from './modal-footer.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ModalFooterComponent', () => {
  let component: ModalFooterComponent;
  let fixture: ComponentFixture<ModalFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalFooterComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
