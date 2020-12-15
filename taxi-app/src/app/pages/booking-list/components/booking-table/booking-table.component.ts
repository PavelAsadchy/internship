import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  BOOKING_DISPLAYED_COLUMNS,
  BOOKING_STATUS_OPTIONS,
  DROP_OFF_OPTIONS,
  PICK_UP_OPTIONS,
  VEHICLE_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { IBooking } from 'src/app/shared/models/booking.model';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LOADING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss'],
})
export class BookingTableComponent implements OnInit {
  displayedColumns: string[] = BOOKING_DISPLAYED_COLUMNS;
  dataSource: MatTableDataSource<IBooking>;

  isLoading$: Observable<boolean>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  vehicleOptions = VEHICLE_OPTIONS;
  pickUpOptions = PICK_UP_OPTIONS;
  dropOffOptions = DROP_OFF_OPTIONS;
  statusOptions = BOOKING_STATUS_OPTIONS;

  constructor(private store: Store<IBookingState>) {}

  ngOnInit(): void {
    this.store.pipe(select(SELECT_BOOKING_LIST)).subscribe((bookings) => {
      this.dataSource = new MatTableDataSource(bookings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.isLoading$ = this.store.pipe(select(SELECT_BOOKING_LOADING));
  }

  refreshQueryParams() {}
}
