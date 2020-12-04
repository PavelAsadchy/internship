import { Component, LOCALE_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  BookingChannelOptions,
  BookingStatusOptions,
  MY_DP_FORMAT,
  VEHICLE_LIST,
} from 'src/app/shared/consts/consts';
import { MAT_DATETIME_FORMATS } from '@mat-datetimepicker/core';
import { BookingListService } from 'src/app/shared/services/booking-list.service';
import * as moment from 'moment';
import { IFilterParams } from 'src/app/shared/models/filter-params.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    // {
    //   provide: MAT_DATETIME_FORMATS,
    //   useValue: {
    //     parse: {
    //       dateInput: 'L',
    //       monthInput: 'MMMM',
    //       timeInput: 'LT',
    //       datetimeInput: 'L LT',
    //     },
    //     display: {
    //       dateInput: 'L',
    //       monthInput: 'MMMM',
    //       datetimeInput: 'L LT',
    //       timeInput: 'LT',
    //       monthYearLabel: 'MMM YYYY',
    //       dateA11yLabel: 'LL',
    //       monthYearA11yLabel: 'MMMM YYYY',
    //       popupHeaderDateLabel: 'ddd, DD MMM',
    //     },
    //   },
    // },
    { provide: LOCALE_ID, useValue: 'en-EN' },
    { provide: MAT_DATE_LOCALE, useValue: 'en-EN' },
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE],
    // },
    // {
    //   provide: MAT_DATE_FORMATS,
    //   // useValue: MAT_MOMENT_DATE_FORMATS
    //   useValue: MY_DP_FORMAT,
    // },
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

  constructor(
    private fb: FormBuilder,
    private bookingListService: BookingListService
  ) {}

  onFilterSubmit() {}

  onFilterFormReset() {
    this.filterForm.reset();
  }

  onDatesLimitReset() {
    this.filterForm.get('dateFrom').reset();
    this.filterForm.get('dateTo').reset();
  }

  trigger() {
    const filterParams: IFilterParams = {
      bookingId: this.filterForm.get('bookingId').value,
      price: +this.filterForm.get('price').value,
      search: this.filterForm.get('search').value,
      statuses: this.filterForm.get('statuses').value,
      dateFrom: moment(this.filterForm.get('dateFrom').value),
      channels: this.filterForm.get('channels').value,
      dateTo: moment(this.filterForm.get('dateTo').value),
      vehicle: this.filterForm.get('vehicle').value,
    };
    this.bookingListService
      .filterBookings(filterParams)
      .subscribe((res) => console.log(res));
  }
}
