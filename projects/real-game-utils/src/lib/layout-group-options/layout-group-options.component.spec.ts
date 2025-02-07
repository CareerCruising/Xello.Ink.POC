import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGroupOptionsComponent } from './layout-group-options.component';
import { TranslateModule } from '@ngx-translate/core';

describe('LayoutGroupOptionsComponent', () => {
  let component: LayoutGroupOptionsComponent;
  let fixture: ComponentFixture<LayoutGroupOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutGroupOptionsComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutGroupOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
