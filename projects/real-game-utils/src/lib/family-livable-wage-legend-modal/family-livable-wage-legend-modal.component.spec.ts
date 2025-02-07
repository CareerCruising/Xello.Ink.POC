import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLivableWageLegendModalComponent } from './family-livable-wage-legend-modal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

describe('FamilyLivableWageLegendModalComponent', () => {
  let component: FamilyLivableWageLegendModalComponent;
  let fixture: ComponentFixture<FamilyLivableWageLegendModalComponent>;
  let translateService: TranslateService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FamilyLivableWageLegendModalComponent,
        TranslateModule.forRoot(),
        HttpClientModule,
      ],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(FamilyLivableWageLegendModalComponent);
    translateService.currentLang = 'en-US';
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call close modal service on invoking closeModal', () => {
    jest.spyOn(component.modalService, 'close');
    component.closeModal();
    expect(component.modalService.close).toHaveBeenCalled();
  });
});
