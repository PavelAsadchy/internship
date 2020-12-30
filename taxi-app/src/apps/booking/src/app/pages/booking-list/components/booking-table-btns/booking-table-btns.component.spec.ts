import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTableBtnsComponent } from './booking-table-btns.component';

describe('BookingTableBtnsComponent', () => {
  let component: BookingTableBtnsComponent;
  let fixture: ComponentFixture<BookingTableBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingTableBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTableBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
