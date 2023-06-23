import { TestBed } from '@angular/core/testing';

import { ExServiceService } from './ex-service.service';

describe('ExServiceService', () => {
  let service: ExServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
