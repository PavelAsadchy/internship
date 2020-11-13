import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BookingChannel, CustomerInformation, DropOff, IBookingOptions, Notes, PassengerInformation, PaymentOptions, PickUp, Vehicle } from 'src/app/shared/models/bookingOptions.model';
import { BookingOptionsService } from 'src/app/shared/services/booking-options.service';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';
import { BookingOptionsType } from 'src/app/shared/consts/consts';

@Component({
  selector: 'app-booking-board',
  templateUrl: './booking-board.component.html',
  styleUrls: ['./booking-board.component.scss'],
  providers: [CreateBookingCalculationService]
})
export class BookingBoardComponent implements OnInit {

  bookingOptions: IBookingOptions;

  bookingOptionsForm = this.fb.group({
    bookingChannel: this.fb.group(new BookingChannel()),
    pickUp: this.fb.group(new PickUp()),
    dropOff: this.fb.group(new DropOff()),
    vehicle: this.fb.group(new Vehicle()),
    customerInformation: this.fb.group(new CustomerInformation()),
    passengerInformation: this.fb.group(new PassengerInformation()),
    payment: this.fb.group({
      paymentOptions: this.fb.group(new PaymentOptions()),
      checkBasicOptions: this.fb.array([]),
      checkExtraOptions: this.fb.array([]),
    }),
    notes: this.fb.group(new Notes()),
  })

  isSliderChecked: boolean = false;

  private sub: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder,
              private bookingOptionsService: BookingOptionsService,
              public createBookingCalculationService: CreateBookingCalculationService) { }

  ngOnInit(): void {
    this.bookingOptionsService.loadBookingOptions()
    .subscribe((data: IBookingOptions) => {
      this.bookingOptions = data;
    });

    this.bookingOptionsForm.valueChanges
    .subscribe(status => console.log(status))

    // this.bookingOptionsForm.controls.pickUp.valueChanges
    // .subscribe(status => {
    //   this.createBookingCalculationService.createRandomCalculation(status.time);
    // });
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  onBookingOptionsSubmit(): void {
    console.log('form submit')
  }

  checkConrolValidity(control): boolean {
    return !this.bookingOptionsForm.controls[control].valid;
  }

  checkFormValidity(): boolean {
    return !this.bookingOptionsForm.valid;
  }
}
