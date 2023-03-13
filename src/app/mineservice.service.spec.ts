import { TestBed } from '@angular/core/testing';

import { MineserviceService } from './mineservice.service';

describe('MineserviceService', () => {
  let service: MineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
