import { TestBed } from '@angular/core/testing';

import { CuentajpmsService } from './cuentajpms.service';

describe('CuentajpmsService', () => {
  let service: CuentajpmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentajpmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
