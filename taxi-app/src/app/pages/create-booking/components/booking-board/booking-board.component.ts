import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { combineLatest, forkJoin, Observable, Subject } from 'rxjs';
import {
  BookingChannel,
  CustomerInformation,
  DropOff,
  IBookingOptions,
  Notes,
  PassengerInformation,
  PaymentOptions,
  PickUp,
  Vehicle,
} from 'src/app/shared/models/booking-options.model';
import { BookingOptionsService } from 'src/app/shared/services/booking-options.service';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';
import { takeUntil } from 'rxjs/operators';
import { BookingListService } from 'src/app/shared/services/booking-list.service';

@Component({
  selector: 'app-booking-board',
  templateUrl: './booking-board.component.html',
  styleUrls: ['./booking-board.component.scss'],
  providers: [CreateBookingCalculationService, BookingListService],
})
export class BookingBoardComponent implements OnInit, OnDestroy {
  bookingOptions: IBookingOptions;

  price: number;

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
  });

  isSliderChecked = false;

  private sub: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private readonly bookingOptionsService: BookingOptionsService,
    private readonly createBookingCalculationService: CreateBookingCalculationService,
    private readonly bookingListService: BookingListService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.bookingOptionsService.loadBookingOptions(),
      this.createBookingCalculationService.price$,
    ])
      .pipe(takeUntil(this.sub))
      .subscribe(([data, price]: [IBookingOptions, number]) => {
        this.bookingOptions = data;
        this.price = price;
      });

    this.bookingOptionsForm.valueChanges.subscribe((status) => {
      this.createBookingCalculationService.createRandomCalculation(status);
    });
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  onBookingOptionsSubmit(): void {
    this.createBookingCalculationService.formSubmit(this.bookingOptionsForm);
  }

  checkFormValidity(): boolean {
    return !this.bookingOptionsForm.valid;
  }

  checkConrolValidity(control: string): boolean {
    return !this.bookingOptionsForm.controls[control].valid;
  }

  checkFieldValidity(control: string, field: string): boolean {
    return (
      this.bookingOptionsForm.controls[control].get(field).status === 'INVALID'
    );
  }

  trigger(): void {
    let formObj = this.bookingOptionsForm.getRawValue();
    // this.bookingListService
    //   .saveBooking(formObj)
    //   .subscribe((resp) => console.log(resp));
    // this.bookingOptionsForm.reset();
    console.log(formObj);

    // this.bookingListService
    //   .loadBooking()
    //   .subscribe((resp) => console.log(resp));
  }
}
