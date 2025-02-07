import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemAddComponent } from './list-item-add.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ListItemAddComponent', () => {
  let component: ListItemAddComponent;
  let fixture: ComponentFixture<ListItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemAddComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
