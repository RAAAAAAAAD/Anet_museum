import { TestBed } from '@angular/core/testing';

import { Paintings } from './paintings';

describe('Paintings', () => {
  let service: Paintings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Paintings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
