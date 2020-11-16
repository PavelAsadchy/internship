import { TestBed } from '@angular/core/testing';

import { CreateBookingCalculationService } from './create-booking-calculation.service';

describe('CreateBookingCalculationService', () => {
  let service: CreateBookingCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBookingCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
