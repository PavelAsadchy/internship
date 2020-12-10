import { Component, EventEmitter, LOCALE_ID, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {
  BookingChannelOptions,
  BookingStatusOptions,
  VEHICLE_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import * as moment from 'moment';
import {
  IFilter,
  IFilterParams,
  IRefreshQueryEvent,
} from 'src/app/shared/models/query-params.model';
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
  vehicleOptions = VEHICLE_OPTIONS;

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

  @Output()
  refreshFilter = new EventEmitter<IRefreshQueryEvent>();

  constructor(private fb: FormBuilder, private store: Store<IBookingState>) {}

  onFilterSubmit() {
    const params: IFilterParams = {
      bookingId: this.filterForm.get('bookingId').value,
      price: +this.filterForm.get('price').value,
      search: this.filterForm.get('search').value,
      statuses: this.filterForm.get('statuses').value,
      dateFrom: moment(this.filterForm.get('dateFrom').value),
      channels: this.filterForm.get('channels').value,
      dateTo: moment(this.filterForm.get('dateTo').value).isValid()
        ? moment(this.filterForm.get('dateTo').value)
        : moment(),
      vehicle: this.filterForm.get('vehicle').value,
    };
    this.refreshFilter.emit({ type: 'filter', params });
    // this.store.dispatch(LOAD_BOOKINGS_BY_FILTER_ACTION({ filterParams }));
  }

  onDateSetup(
    dateLag: number,
    param: moment.unitOfTime.DurationConstructor
  ): void {
    this.filterForm.patchValue({
      dateFrom: moment().subtract(dateLag, param).toDate(),
    });
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
