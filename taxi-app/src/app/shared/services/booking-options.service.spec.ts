import { TestBed } from '@angular/core/testing';

import { BookingOptionsService } from './booking-options.service';

describe('BookingOptionsService', () => {
  let service: BookingOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
