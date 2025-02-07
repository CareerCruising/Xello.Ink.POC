import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { CardEducationComponent } from './card-education.component';
import * as pathways from '../../../../../assets/data/pathways_en-US.json';

describe('CardPathwayComponent', () => {
  let component: CardEducationComponent;
  let fixture: ComponentFixture<CardEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEducationComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEducationComponent);
    component = fixture.componentInstance;
    component.item = pathways[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onSelect if card type is not custom', () => {
    const emitSpy = jest.spyOn(component.onSelect, 'emit');
    component.onClick();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should not emit onSelect if card type is custom', () => {
    const emitSpy = jest.spyOn(component.onSelect, 'emit');
    const emitSpyNew = jest.spyOn(component.onCreateNew, 'emit');
    component.custom = true;
    component.onClick();
    expect(emitSpy).not.toHaveBeenCalled();
    expect(emitSpyNew).toHaveBeenCalled();
  });
});
