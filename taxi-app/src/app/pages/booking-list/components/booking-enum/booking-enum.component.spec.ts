import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEnumComponent } from './booking-enum.component';

describe('BookingEnumComponent', () => {
  let component: BookingEnumComponent;
  let fixture: ComponentFixture<BookingEnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingEnumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
