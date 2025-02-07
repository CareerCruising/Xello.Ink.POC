import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamilySectionComponent } from './family-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { signal } from '@angular/core';

describe('FamilySectionComponent', () => {
  let component: FamilySectionComponent;
  let fixture: ComponentFixture<FamilySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilySectionComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FamilySectionComponent);
    component = fixture.componentInstance;
    component.family = signal([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
