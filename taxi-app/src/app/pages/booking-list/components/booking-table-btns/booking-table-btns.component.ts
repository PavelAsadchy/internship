import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import {
  DELETE_BOOKING_CONFIRM,
  OPEN_BOOKING_DETAILS,
} from 'src/app/shared/consts/popup.consts';
import { IBooking } from 'src/app/shared/models/booking.model';
import { PopupComponent } from 'src/app/shared/modules/popup/container/popup.component';
import { DELETE_BOOKING_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-table-btns',
  templateUrl: './booking-table-btns.component.html',
  styleUrls: ['./booking-table-btns.component.scss'],
})
export class BookingTableBtnsComponent {
  @Input()
  row: IBooking;

  constructor(
    private store: Store<IBookingState>,
    public dialog: MatDialog,
    private router: Router
  ) {}

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

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((isDeletingConfirmed) => {
        if (isDeletingConfirmed)
          this.store.dispatch(DELETE_BOOKING_ACTION({ bookingId }));
      });
  }
}
