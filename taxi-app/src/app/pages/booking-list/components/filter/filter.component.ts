import { Component, ElementRef, LOCALE_ID, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  // @ViewChild('bookingIdInput') bookingIdInput: ElementRef;
  // @ViewChild('priceInput') priceInput: ElementRef;
  // @ViewChild('searchInput') searchInput: ElementRef;
  // @ViewChild('statusesInput') statusesInput: ElementRef;
  // @ViewChild('dateFromInput') dateFromInput: ElementRef;
  // @ViewChild('channelsInput') channelsInput: ElementRef;
  // @ViewChild('dateToInput') dateToInput: ElementRef;
  // @ViewChild('vehicleInput') vehicleInput: ElementRef;

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

  constructor(private fb: FormBuilder) {}

  onFilterSubmit() {}

  trigger() {
    console.log(this.filterForm.get('dateFrom').value);
  }
}
