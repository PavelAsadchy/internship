import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import {
  BookingStatusOptions,
  BOOKING_DISPLAYED_COLUMNS,
  DropOffPointOptions,
  PickUpPointOptions,
  PickUpTimeOptions,
  PICK_UP_URGENCY_COLORS,
  VEHICLE_LIST,
} from 'src/app/shared/consts/consts';
import { IBookingOptions } from 'src/app/shared/models/booking-options.model';
import { IBooking } from 'src/app/shared/models/booking.model';
import {
  LOAD_BOOKINGS_ACTION,
  LOAD_BOOKINGS_BY_ORDER_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LOADING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';
import { BookingItemComponent } from '../booking-item/booking-item.component';
import { DeleteBookingConfirmComponent } from '../delete-booking-confirm/delete-booking-confirm.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { BookingListService } from 'src/app/shared/services/booking-list.service';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-booking-enum',
  templateUrl: './booking-enum.component.html',
  styleUrls: ['./booking-enum.component.scss'],
})
export class BookingEnumComponent implements OnInit {
  displayedColumns: string[] = BOOKING_DISPLAYED_COLUMNS;
  dataSource: MatTableDataSource<IBooking>;

  isLoading$: Observable<boolean>;
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('inputTest')
  inputTest: ElementRef;

  vehicleList = VEHICLE_LIST;
  pickUpPoint = PickUpPointOptions;
  dropOffPoint = DropOffPointOptions;
  pickUpUrgency = PICK_UP_URGENCY_COLORS;
  status = BookingStatusOptions;

  constructor(
    private store: Store<IBookingState>,
    public dialog: MatDialog,
    private readonly bookingListService: BookingListService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {
    this.store.dispatch(LOAD_BOOKINGS_ACTION());
    this.store.pipe(select(SELECT_BOOKING_LIST)).subscribe((bookings) => {
      this.dataSource = new MatTableDataSource(bookings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.isLoading$ = this.store.pipe(select(SELECT_BOOKING_LOADING));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(event);

    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  openDeleteConfirmation(bookingId: string): void {
    this.dialog.open(DeleteBookingConfirmComponent, { data: bookingId });
  }

  openBookingDetails(booking: IBooking): void {
    this.dialog.open(BookingItemComponent, { data: booking });
  }

  trigger(): void {
    // console.log(this.inputTest.nativeElement.value);
    // this.bookingListService
    //   .filterBookings()
    //   .subscribe((res) => console.log(res));
  }

  doSort(e: { active: string; direction: string }) {
    this.store.dispatch(
      LOAD_BOOKINGS_BY_ORDER_ACTION({ sort: e.active, order: e.direction })
    );
  }
}
