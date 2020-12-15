import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { startWith } from 'rxjs/operators';
import {
  VEHICLE_OPTIONS,
  BOOKING_STATUS_OPTIONS,
  BOOKING_CHANNEL_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import {
  IFilterParams,
  IQueryParams,
} from 'src/app/shared/models/query-params.model';
import {
  LOAD_BOOKINGS_ACTION,
  LOAD_BOOKINGS_BY_QUERY,
  REFRESH_QUERY_PARAMS_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import { SELECT_QUERY_PARAMS } from 'src/app/shared/stores/booking-store/booking.selector';
import {
  DEFAULT_PAGINATE_PARAMS,
  DEFAULT_QUERY_PARAMS,
  DEFAULT_SORT_PARAMS,
  IBookingState,
} from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-filter',
  templateUrl: './booking-filter.component.html',
  styleUrls: ['./booking-filter.component.scss'],
})
export class BookingFilterComponent implements OnInit {
  vehicleOptions = VEHICLE_OPTIONS;
  statusOptions = BOOKING_STATUS_OPTIONS;
  channelOptions = BOOKING_CHANNEL_OPTIONS;

  queryParams: IQueryParams;

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
        ? moment(this.filterForm.get('dateFrom').value).format()
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
    this.store
      .select(SELECT_QUERY_PARAMS)
      .subscribe(
        (bookingQueryParams: IQueryParams) =>
          (this.queryParams = bookingQueryParams)
      );

    this.filterForm.valueChanges
      .pipe(startWith(DEFAULT_QUERY_PARAMS))
      .subscribe(() => {
        this.store.dispatch(
          REFRESH_QUERY_PARAMS_ACTION({
            params: {
              filter: this.filterParams,
              sort: DEFAULT_SORT_PARAMS,
              paginate: DEFAULT_PAGINATE_PARAMS,
            },
          })
        );
      });
  }

  onFilterFormSubmit() {
    this.store.dispatch(LOAD_BOOKINGS_BY_QUERY({ params: this.queryParams }));
  }

  onDateSetup(
    dateLag: number,
    param: moment.unitOfTime.DurationConstructor
  ): void {
    this.filterForm.patchValue({
      dateFrom: moment().subtract(dateLag, param).toDate(),
    });
  }

  onResetFilter(): void {
    this.filterForm.reset();
  }

  onRemoveDateRangeLimit(): void {
    this.filterForm.get('dateFrom').reset();
    this.filterForm.get('dateTo').reset();
  }

  onGetAllBookings(): void {
    this.store.dispatch(LOAD_BOOKINGS_ACTION());
  }
}
