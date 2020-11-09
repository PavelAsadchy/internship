import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IBookingOptions } from '../shared/models/bookingOptions.model';
import { BookingOptionsService } from '../shared/services/booking-options.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent {

  // bookingOptions: IBookingOptions = null;

  // private sub: Subject<void> = new Subject<void>();

  // constructor(private bookingOptionsService: BookingOptionsService) { }

  // ngOnInit(): void {
  //   this.bookingOptionsService.loadBookingOptions()
  //   .subscribe((data: IBookingOptions) => this.bookingOptions = data);
  // }

  // ngOnDestroy(): void {
  //   this.sub.next();
  //   this.sub.complete();
  // }
}
