import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IBookingOptions } from 'src/app/shared/models/bookingOptions.model';
import { BookingOptionsService } from 'src/app/shared/services/booking-options.service';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';

@Component({
  selector: 'app-booking-board',
  templateUrl: './booking-board.component.html',
  styleUrls: ['./booking-board.component.scss'],
  providers: [CreateBookingCalculationService]
})
export class BookingBoardComponent implements OnInit {

  bookingOptions: IBookingOptions;

  isSliderChecked: boolean = false;

  private sub: Subject<void> = new Subject<void>();

  constructor(private bookingOptionsService: BookingOptionsService,
              public createBookingCalculationService: CreateBookingCalculationService) { }

  ngOnInit(): void {
    this.bookingOptionsService.loadBookingOptions()
    .subscribe((data: IBookingOptions) => this.bookingOptions = data);
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  onChanged(event: Event) {
    console.log(event);
  }
}
