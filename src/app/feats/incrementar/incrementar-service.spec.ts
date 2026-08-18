import { TestBed } from '@angular/core/testing';

import { IncrementarService } from './incrementar-service';

describe('IncrementarService', () => {
  let service: IncrementarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
