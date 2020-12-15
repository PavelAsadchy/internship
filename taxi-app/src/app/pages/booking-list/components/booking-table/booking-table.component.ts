import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { merge, Observable, of } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import {
  BOOKING_DISPLAYED_COLUMNS,
  BOOKING_STATUS_OPTIONS,
  DROP_OFF_OPTIONS,
  PICK_UP_OPTIONS,
  VEHICLE_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { IBooking } from 'src/app/shared/models/booking.model';
import { IQueryParams } from 'src/app/shared/models/query-params.model';
import {
  LOAD_BOOKINGS_BY_QUERY,
  REFRESH_QUERY_PARAMS_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LIST_LENGTH,
  SELECT_BOOKING_LOADING,
  SELECT_QUERY_PARAMS,
} from 'src/app/shared/stores/booking-store/booking.selector';
import {
  DEFAULT_FILTER_PARAMS,
  IBookingState,
} from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss'],
})
export class BookingTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = BOOKING_DISPLAYED_COLUMNS;
  dataSource: MatTableDataSource<IBooking>;

  isLoading$: Observable<boolean>;
  queryParams: IQueryParams;
  totalLength: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  vehicleOptions = VEHICLE_OPTIONS;
  pickUpOptions = PICK_UP_OPTIONS;
  dropOffOptions = DROP_OFF_OPTIONS;
  statusOptions = BOOKING_STATUS_OPTIONS;

  constructor(private store: Store<IBookingState>) {}

  ngOnInit(): void {
    this.store
      .select(SELECT_QUERY_PARAMS)
      .subscribe(
        (bookingQueryParams: IQueryParams) =>
          (this.queryParams = bookingQueryParams)
      );

    this.store.select(SELECT_BOOKING_LIST).subscribe((bookings: IBooking[]) => {
      this.dataSource = new MatTableDataSource(bookings);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });

    this.store
      .select(SELECT_BOOKING_LIST_LENGTH)
      .subscribe((totalLength: number) => (this.totalLength = totalLength));

    this.isLoading$ = this.store.select(SELECT_BOOKING_LOADING);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return of(
            this.store.dispatch(
              REFRESH_QUERY_PARAMS_ACTION({
                params: {
                  filter: this.queryParams.filter,
                  sort: {
                    field: this.sort.active,
                    direction: this.sort.direction,
                  },
                  paginate: {
                    pageIndex: this.paginator.pageIndex,
                    pageSize: this.paginator.pageSize,
                  },
                },
              })
            )
          );
        })
      )
      .subscribe(() =>
        this.store.dispatch(
          LOAD_BOOKINGS_BY_QUERY({
            params: this.queryParams,
          })
        )
      );
  }

  onPaginatorChange(e) {
    this.store.dispatch(LOAD_BOOKINGS_BY_QUERY({ params: this.queryParams }));
  }

  onSortChange(e) {
    console.log(e);
  }
}
