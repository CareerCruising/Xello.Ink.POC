import { TestBed } from '@angular/core/testing';

import { RealGameUtilsService } from './real-game-utils.service';

describe('RealGameUtilsService', () => {
  let service: RealGameUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealGameUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
