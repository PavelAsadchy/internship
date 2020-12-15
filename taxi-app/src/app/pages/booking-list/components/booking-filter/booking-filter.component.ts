import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import {
  VEHICLE_OPTIONS,
  BOOKING_STATUS_OPTIONS,
  BOOKING_CHANNEL_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { IFilterParams } from 'src/app/shared/models/query-params.model';
import { LOAD_BOOKINGS_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-filter',
  templateUrl: './booking-filter.component.html',
  styleUrls: ['./booking-filter.component.scss'],
})
export class BookingFilterComponent implements OnInit {
  vehicleOptions = VEHICLE_OPTIONS;
  statusOptions = BOOKING_STATUS_OPTIONS;
  channelOptions = BOOKING_CHANNEL_OPTIONS;

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

  get filterParams(): IFilterParams {
    const params: IFilterParams = {
      bookingId: this.filterForm.get('bookingId').value,
      price: +this.filterForm.get('price').value,
      search: this.filterForm.get('search').value,
      statuses: this.filterForm.get('statuses').value,
      dateFrom: moment(this.filterForm.get('dateFrom').value).isValid()
        ? moment(this.filterForm.get('dateTo').value).format()
        : null,
      channels: this.filterForm.get('channels').value,
      dateTo: moment(this.filterForm.get('dateTo').value).isValid()
        ? moment(this.filterForm.get('dateTo').value).format()
        : moment().format(),
      vehicle: this.filterForm.get('vehicle').value,
    };
    return params;
  }

  constructor(private fb: FormBuilder, private store: Store<IBookingState>) {}

  ngOnInit(): void {
    this.filterForm.statusChanges.subscribe;
  }

  onFilterFormSubmit() {
    console.log(this.filterParams);
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
