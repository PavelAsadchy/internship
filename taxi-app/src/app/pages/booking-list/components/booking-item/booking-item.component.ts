import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBooking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.scss'],
})
export class BookingItemComponent {
  constructor(
    public dialogRef: MatDialogRef<BookingItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBooking
  ) {}
}
