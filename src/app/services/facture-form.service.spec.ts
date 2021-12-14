import { TestBed } from '@angular/core/testing';

import { FactureFormService } from './facture-form.service';

describe('FactureFormService', () => {
  let service: FactureFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
