import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingChannelComponent } from './booking-channel.component';

describe('BookingChannelComponent', () => {
  let component: BookingChannelComponent;
  let fixture: ComponentFixture<BookingChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
