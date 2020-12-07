import { TestBed } from '@angular/core/testing';

import { BookingEditGuard } from './booking-edit.guard';

describe('BookingEditGuard', () => {
  let guard: BookingEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookingEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
