import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  BOOKING_DISPLAYED_COLUMNS,
  DropOffPointOptions,
  PickUpPointOptions,
  PICK_UP_URGENCY_COLORS,
  VEHICLE_LIST,
} from 'src/app/shared/consts/consts';
import { IBookingOptions } from 'src/app/shared/models/booking-options.model';
import { IBooking } from 'src/app/shared/models/booking.model';
import { LOAD_BOOKINGS_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LOADING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';
import { BookingItemComponent } from '../booking-item/booking-item.component';
import { DeleteBookingConfirmComponent } from '../delete-booking-confirm/delete-booking-confirm.component';

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }
export interface UserData {
  vehicle: string;
  bookRef: string;
  pickUpTime: string;
  Extras: string;
  Pax: string;
  PickUp: string;
  dropOff: string;
  passenger: string;
  customer: string;
  account: string;
  price: string;
  status: string;
}
const COLORS: string[] = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-booking-enum',
  templateUrl: './booking-enum.component.html',
  styleUrls: ['./booking-enum.component.scss'],
})
export class BookingEnumComponent implements OnInit, AfterViewInit {
  bookingList$: Observable<IBookingOptions[]>;
  isLoading$: Observable<boolean>;

  displayedColumns = BOOKING_DISPLAYED_COLUMNS;
  dataSource: MatTableDataSource<IBookingOptions>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  vehicleList = VEHICLE_LIST;
  pickUpPoint = PickUpPointOptions;
  dropOffPoint = DropOffPointOptions;
  pickUpUrgency = PICK_UP_URGENCY_COLORS;

  constructor(private store: Store<IBookingState>, public dialog: MatDialog) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.store.dispatch(LOAD_BOOKINGS_ACTION());
    this.store.pipe(select(SELECT_BOOKING_LIST)).subscribe((bookings) => {
      this.dataSource = new MatTableDataSource(bookings);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });
    this.isLoading$ = this.store.pipe(select(SELECT_BOOKING_LOADING));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
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
    // this.dialog.open(DeleteBookingConfirmComponent);

    // console.log(this.dataSource.data);
    console.log(this.pickUpUrgency);
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
//   };
// }
