import { TestBed } from '@angular/core/testing';

import { CoctelService } from './coctel.service';

describe('CoctelService', () => {
  let service: CoctelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
