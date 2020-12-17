import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import {
  VEHICLE_OPTIONS,
  BOOKING_STATUS_OPTIONS,
  BOOKING_CHANNEL_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { IFilterParams } from 'src/app/shared/models/query-params.model';
import { REFRESH_QUERY_PARAMS_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import {
  DEFAULT_QUERY_PARAMS,
  IBookingState,
} from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-filter',
  templateUrl: './booking-filter.component.html',
  styleUrls: ['./booking-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingFilterComponent {
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

  onFilterFormSubmit() {
    this.store.dispatch(
      REFRESH_QUERY_PARAMS_ACTION({
        params: {
          filter: this.filterParams,
        },
      })
    );
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
    this.filterForm.reset();
    this.store.dispatch(
      REFRESH_QUERY_PARAMS_ACTION({
        params: DEFAULT_QUERY_PARAMS,
      })
    );
  }
}
