import { Component, LOCALE_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {
  BookingChannelOptions,
  BookingStatusOptions,
  VEHICLE_LIST,
} from 'src/app/shared/consts/consts';
import * as moment from 'moment';
import { IFilterParams } from 'src/app/shared/models/filter-params.model';
import { Store } from '@ngrx/store';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';
import {
  LOAD_BOOKINGS_ACTION,
  LOAD_BOOKINGS_BY_FILTER_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-EN' },
    { provide: MAT_DATE_LOCALE, useValue: 'en-EN' },
  ],
})
export class FilterComponent {
  statuses = BookingStatusOptions;
  channels = BookingChannelOptions;
  vehicles = VEHICLE_LIST;

  filterForm = this.fb.group({
    bookingId: [''],
    price: [''],
    search: [''],
    statuses: [''],
    dateFrom: [''],
    channels: [''],
    dateTo: [''],
    vehicle: [''],
  });

  constructor(private fb: FormBuilder, private store: Store<IBookingState>) {}

  onFilterSubmit() {
    const filterParams: IFilterParams = {
      bookingId: this.filterForm.get('bookingId').value,
      price: +this.filterForm.get('price').value,
      search: this.filterForm.get('search').value,
      statuses: this.filterForm.get('statuses').value,
      dateFrom: moment(this.filterForm.get('dateFrom').value),
      channels: this.filterForm.get('channels').value,
      dateTo: moment(this.filterForm.get('dateTo').value) || moment(new Date()),
      vehicle: this.filterForm.get('vehicle').value,
    };
    this.store.dispatch(LOAD_BOOKINGS_BY_FILTER_ACTION({ filterParams }));
  }

  onDateSetup(dateLag: number, param: string): void {
    const today = new Date();
    switch (param) {
      case 'month':
        this.filterForm.patchValue({
          dateFrom: new Date(
            today.getFullYear(),
            today.getMonth() - dateLag,
            today.getDate()
          ),
        });
        break;

      case 'day':
        this.filterForm.patchValue({
          dateFrom: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - dateLag
          ),
        });
        break;

      case 'hour':
        this.filterForm.patchValue({
          dateFrom: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            today.getHours() - dateLag
          ),
        });
        break;

      case 'current':
        this.filterForm.patchValue({
          dateTo: today,
        });
        break;

      default:
        break;
    }
  }

  onFilterFormReset(): void {
    this.filterForm.reset();
  }

  onDatesLimitReset(): void {
    this.filterForm.get('dateFrom').reset();
    this.filterForm.get('dateTo').reset();
  }

  onLoadAllBookings(): void {
    this.store.dispatch(LOAD_BOOKINGS_ACTION());
  }
}
