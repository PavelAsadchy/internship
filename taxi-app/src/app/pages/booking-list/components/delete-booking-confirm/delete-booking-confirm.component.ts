import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DELETE_BOOKING_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-delete-booking-confirm',
  templateUrl: './delete-booking-confirm.component.html',
  styleUrls: ['./delete-booking-confirm.component.scss'],
})
export class DeleteBookingConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteBookingConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private store: Store<IBookingState>
  ) {}

  onDeleteConfirm(): void {
    this.store.dispatch(DELETE_BOOKING_ACTION({ bookingId: this.data }));
    this.dialogRef.close();
  }
}
