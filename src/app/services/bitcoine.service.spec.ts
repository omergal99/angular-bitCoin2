import { TestBed } from '@angular/core/testing';

import { BitcoineService } from './bitcoine.service';

describe('BitcoineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitcoineService = TestBed.get(BitcoineService);
    expect(service).toBeTruthy();
  });
});
