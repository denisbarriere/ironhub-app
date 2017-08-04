import { TestBed, inject } from '@angular/core/testing';

import { IronhackerService } from './ironhacker.service';

describe('IronhackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IronhackerService]
    });
  });

  it('should be created', inject([IronhackerService], (service: IronhackerService) => {
    expect(service).toBeTruthy();
  }));
});
