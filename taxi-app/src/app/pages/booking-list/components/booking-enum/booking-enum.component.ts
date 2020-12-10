import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  BookingStatusOptions,
  BOOKING_DISPLAYED_COLUMNS,
  DropOffPointOptions,
  DROP_OFF_OPTIONS,
  PickUpPointOptions,
  PICK_UP_OPTIONS,
  PICK_UP_URGENCY_COLORS,
  VEHICLE_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { DELETE_BOOKING_CONFIRM, OPEN_BOOKING_DETAILS } from 'src/app/shared/consts/popup.consts';
import { IBooking } from 'src/app/shared/models/booking.model';
import { ISort, ISortParams, IRefreshQueryEvent } from 'src/app/shared/models/query-params.model';
import { PopupComponent } from 'src/app/shared/modules/popup/container/popup.component';
import {
  DELETE_BOOKING_ACTION,
  LOAD_BOOKINGS_ACTION,
  LOAD_BOOKINGS_BY_ORDER_ACTION,
  LOAD_BOOKING_ACTION,
  REFRESH_QUERY_PARAMS_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LOADING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-enum',
  templateUrl: './booking-enum.component.html',
  styleUrls: ['./booking-enum.component.scss'],
})
export class BookingEnumComponent implements OnInit, AfterViewInit {
  @Input() isLoading$: Observable<boolean>

  displayedColumns: string[] = BOOKING_DISPLAYED_COLUMNS;
  dataSource: MatTableDataSource<IBooking>;

  // isLoading$: Observable<boolean>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  vehicleOptions = VEHICLE_OPTIONS;
  pickUpOptions = PICK_UP_OPTIONS;
  dropOffOptions = DROP_OFF_OPTIONS;
  pickUpUrgency = PICK_UP_URGENCY_COLORS;
  status = BookingStatusOptions;

  @Output()
  refreshSort = new EventEmitter<IRefreshQueryEvent>();

  constructor(
    private store: Store<IBookingState>,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(LOAD_BOOKINGS_ACTION());
    this.store.pipe(select(SELECT_BOOKING_LIST)).subscribe((bookings) => {
      this.dataSource = new MatTableDataSource(bookings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    // this.isLoading$ = this.store.pipe(select(SELECT_BOOKING_LOADING));
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe((params: ISortParams) => {
      this.refreshSort.emit({ type: 'sort', params });
    });
  }

  openBookingDetails(booking: IBooking): void {
    this.dialog.open(PopupComponent, {
      data: { ...OPEN_BOOKING_DETAILS, payload: booking },
    });
  }

  openBookingEdit(booking: IBooking): void {
    this.router.navigate(['board', 'booking', 'update', booking.id]);
  }

  openDeleteConfirmation(bookingId: string): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: DELETE_BOOKING_CONFIRM,
    });

    dialogRef.afterClosed().subscribe((isDeletingConfirmed) => {
      if (isDeletingConfirmed)
        this.store.dispatch(DELETE_BOOKING_ACTION({ bookingId }));
    });
  }

  doSort(e: { active: string; direction: string }) {
    this.store.dispatch(
      LOAD_BOOKINGS_BY_ORDER_ACTION({ sort: e.active, order: e.direction })
    );
  }

  // refreshQueryParams() {
  //   console.log(this.sort.direction);
  //   this.sort.sortChange.subscribe((res) => console.log('res'));
  // }

  // trigger() {
  //   console.log(this.sort.direction);
  //   this.sort.sortChange.subscribe((event: ISortEvent) =>
  //     this.refreshSort.emit(event)
  //   );
  // }
}
