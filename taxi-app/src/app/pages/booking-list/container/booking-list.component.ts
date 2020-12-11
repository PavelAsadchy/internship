import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import {
  BookingChannelOptions,
  BookingStatusOptions,
  BOOKING_DISPLAYED_COLUMNS,
  DROP_OFF_OPTIONS,
  PICK_UP_OPTIONS,
  VEHICLE_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { IBooking } from 'src/app/shared/models/booking.model';
import { IQueryParams } from 'src/app/shared/models/query-params.model';
import {
  LOAD_BOOKINGS_ACTION,
  REFRESH_QUERY_PARAMS_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LOADING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit {
  displayedColumns: string[] = BOOKING_DISPLAYED_COLUMNS;
  dataSource: MatTableDataSource<IBooking>;

  isLoading$: Observable<boolean>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  vehicleOptions = VEHICLE_OPTIONS;
  pickUpOptions = PICK_UP_OPTIONS;
  dropOffOptions = DROP_OFF_OPTIONS;
  statuses = BookingStatusOptions;
  channels = BookingChannelOptions;

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

  ngOnInit() {
    this.store.pipe(select(SELECT_BOOKING_LIST)).subscribe((bookings) => {
      this.dataSource = new MatTableDataSource(bookings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.isLoading$ = this.store.pipe(select(SELECT_BOOKING_LOADING));
  }

  doSort() {
    this.store.dispatch(
      REFRESH_QUERY_PARAMS_ACTION({ params: this.currentQueryParams })
    );
  }

  onSearchSubmit() {
    this.store.dispatch(
      REFRESH_QUERY_PARAMS_ACTION({ params: this.currentQueryParams })
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

  get currentQueryParams(): IQueryParams {
    const params: IQueryParams = {
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
      sort: this.sort.active,
      direction: this.sort.direction,
    };
    return params;
  }
}
