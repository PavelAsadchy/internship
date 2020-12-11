import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTableLegendComponent } from './booking-table-legend.component';

describe('BookingTableLegendComponent', () => {
  let component: BookingTableLegendComponent;
  let fixture: ComponentFixture<BookingTableLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingTableLegendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTableLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
