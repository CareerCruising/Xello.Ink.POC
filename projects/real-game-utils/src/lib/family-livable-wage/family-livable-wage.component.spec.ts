/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FamilyLivableWageComponent } from './family-livable-wage.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpBackend } from '@angular/common/http';

describe('FamilyLivableWageComponent', () => {
  let component: FamilyLivableWageComponent;
  let fixture: ComponentFixture<FamilyLivableWageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FamilyLivableWageComponent,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],
      providers: [HttpBackend],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyLivableWageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
