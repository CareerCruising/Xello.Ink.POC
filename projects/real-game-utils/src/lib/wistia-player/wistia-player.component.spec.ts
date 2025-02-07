import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WistiaPlayerComponent } from './wistia-player.component';
import { TranslateModule } from '@ngx-translate/core';

describe('WistiaPlayerComponent', () => {
  let component: WistiaPlayerComponent;
  let fixture: ComponentFixture<WistiaPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), WistiaPlayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WistiaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
