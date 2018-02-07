import { TestBed, inject } from '@angular/core/testing';

import { GoaulaService } from './goaula.service';

describe('GoaulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoaulaService]
    });
  });

  it('should be created', inject([GoaulaService], (service: GoaulaService) => {
    expect(service).toBeTruthy();
  }));
});
