import { TestBed } from '@angular/core/testing';

import { OptionsetService } from './optionset.service';

describe('OptionsetService', () => {
  let service: OptionsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
