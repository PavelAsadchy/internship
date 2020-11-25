import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookingConfirmComponent } from './delete-booking-confirm.component';

describe('DeleteBookingConfirmComponent', () => {
  let component: DeleteBookingConfirmComponent;
  let fixture: ComponentFixture<DeleteBookingConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBookingConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookingConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
