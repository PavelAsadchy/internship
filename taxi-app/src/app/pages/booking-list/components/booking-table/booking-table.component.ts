import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  BOOKING_DISPLAYED_COLUMNS,
  BOOKING_STATUS_OPTIONS,
  DROP_OFF_OPTIONS,
  PICK_UP_OPTIONS,
  VEHICLE_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { IBooking } from 'src/app/shared/models/booking.model';
import { REFRESH_QUERY_PARAMS_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LIST_LENGTH,
  SELECT_BOOKING_LOADING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingTableComponent implements OnInit {
  displayedColumns: string[] = BOOKING_DISPLAYED_COLUMNS;
  dataSource$: Observable<IBooking[]>;
  isLoading$: Observable<boolean>;
  totalLength$: Observable<number>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  vehicleOptions = VEHICLE_OPTIONS;
  pickUpOptions = PICK_UP_OPTIONS;
  dropOffOptions = DROP_OFF_OPTIONS;
  statusOptions = BOOKING_STATUS_OPTIONS;

  constructor(private store: Store<IBookingState>) {}

  ngOnInit(): void {
    this.dataSource$ = this.store.select(SELECT_BOOKING_LIST);
    this.totalLength$ = this.store.select(SELECT_BOOKING_LIST_LENGTH);
    this.isLoading$ = this.store.select(SELECT_BOOKING_LOADING);
  }

  onQueryParamsChange() {
    this.store.dispatch(
      REFRESH_QUERY_PARAMS_ACTION({
        params: {
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
    );
  }
}
