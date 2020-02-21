import { TestBed } from '@angular/core/testing';

import { HttpHandleErrorService } from './http-handle-error.service';

describe('HttpHandleErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpHandleErrorService = TestBed.get(HttpHandleErrorService);
    expect(service).toBeTruthy();
  });
});
