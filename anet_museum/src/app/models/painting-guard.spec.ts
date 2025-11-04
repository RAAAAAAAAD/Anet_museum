import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { paintingGuard } from './painting-guard';

describe('paintingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => paintingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
