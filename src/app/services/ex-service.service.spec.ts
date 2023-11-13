import { TestBed } from '@angular/core/testing';

import { ExServices } from './ex-service.service';

describe('ExServiceService', () => {
  let service: ExServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
