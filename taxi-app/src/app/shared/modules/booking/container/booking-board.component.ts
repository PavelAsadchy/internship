import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import {
  BookingChannel,
  CustomerInformation,
  DropOff,
  Notes,
  PassengerInformation,
  PaymentOptions,
  PickUp,
  Vehicle,
} from 'src/app/shared/models/booking-options.model';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';
import { CREATE_BOOKING_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { IBooking } from 'src/app/shared/models/booking.model';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-board',
  templateUrl: './booking-board.component.html',
  styleUrls: ['./booking-board.component.scss'],
  providers: [CreateBookingCalculationService],
})
export class BookingBoardComponent implements OnInit, OnDestroy {
  @Input()
  bookingParams: IBooking;

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
    private store: Store<IBookingState>,
    private readonly createBookingCalculationService: CreateBookingCalculationService
  ) {}

  ngOnInit(): void {
    this.createBookingCalculationService.price$
      .pipe(takeUntil(this.sub))
      .subscribe((price: number) => {
        this.price = price;
      });

    this.bookingOptionsForm.valueChanges.subscribe((status) => {
      this.createBookingCalculationService.createRandomCalculation(status);
    });

    this.patchValueToForm();
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  onBookingOptionsSubmit(): void {
    const formObj: IBooking = {
      bookingChannel: this.bookingOptionsForm.get('bookingChannel.channel')
        .value,
      pickUpAddress: this.bookingOptionsForm.get('pickUp.address').value,
      pickUpPoint: this.bookingOptionsForm.get('pickUp.point').value,
      pickUpUrgencyFlag: this.bookingOptionsForm.get('pickUp.time').value,
      dropOffAddress: this.bookingOptionsForm.get('dropOff.address').value,
      dropOffPoint: this.bookingOptionsForm.get('dropOff.point').value,
      vehicle: this.bookingOptionsForm.get('vehicle.items').value,
      customerEmail: this.bookingOptionsForm.get('customerInformation.email')
        .value,
      customerName: this.bookingOptionsForm.get('customerInformation.name')
        .value,
      customerPhone: this.bookingOptionsForm.get('customerInformation.phone')
        .value,
      passengerName: this.bookingOptionsForm.get('passengerInformation.name')
        .value,
      passengerPhone: this.bookingOptionsForm.get('customerInformation.phone')
        .value,
      paymentChannel: this.bookingOptionsForm.get(
        'payment.paymentOptions.channel'
      ).value,
      paymentType: this.bookingOptionsForm.get('payment.paymentOptions.type')
        .value,
      paymentBasicOptions: this.bookingOptionsForm.get(
        'payment.checkBasicOptions'
      ).value,
      paymentExtraOptions: this.bookingOptionsForm.get(
        'payment.checkExtraOptions'
      ).value,
      notesToDispatcher: this.bookingOptionsForm.get('notes.toDispatcher')
        .value,
      notesToDriver: this.bookingOptionsForm.get('notes.toDriver').value,
      price: this.price,
      bookingTime: moment(),
      pickUpTime: this.createBookingCalculationService.setPickUpTime(
        this.bookingOptionsForm.get('pickUp.time').value
      ),
      pickUpUrgency: this.createBookingCalculationService.setRandomPickUpUrgency(),
      status: this.createBookingCalculationService.setRandomStatus(),
    };

    this.store.dispatch(CREATE_BOOKING_ACTION({ newBooking: formObj }));
    this.scroll('top');
  }

  scroll(target: string): void {
    const top = document.getElementById(target);
    top.scrollIntoView();
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

  trigger() {
    console.log(this.isSliderChecked);
  }

  patchValueToForm(): void {
    this.bookingOptionsForm.patchValue({
      bookingChannel: {
        channel: this.bookingParams.bookingChannel || null,
      },
      pickUp: {
        time: this.bookingParams.pickUpUrgencyFlag || null,
        point: this.bookingParams.pickUpPoint || null,
        address: this.bookingParams.pickUpAddress || '',
      },
      dropOff: {
        point: this.bookingParams.dropOffPoint || null,
        address: this.bookingParams.dropOffAddress || '',
      },
      vehicle: {
        items: this.bookingParams.vehicle || null,
      },
      customerInformation: {
        phone: this.bookingParams.customerPhone || '',
        email: this.bookingParams.customerEmail || '',
        name: this.bookingParams.customerName || '',
      },
      passengerInformation: {
        phone: this.bookingParams.passengerPhone || '',
        name: this.bookingParams.passengerName || '',
      },
      payment: {
        paymentOptions: {
          channel: this.bookingParams.paymentChannel || null,
          type: this.bookingParams.paymentType || null,
        },
        // checkBasicOptions: this.bookingParams.paymentBasicOptions || [],
        // checkExtraOptions: this.bookingParams.paymentExtraOptions || [],
      },
      notes: {
        toDriver: this.bookingParams.notesToDriver || '',
        toDispatcher: this.bookingParams.notesToDispatcher || '',
      },
    });
    this.bookingParams.paymentBasicOptions.forEach((option) => {
      const checkBasicOptions = this.bookingOptionsForm.get(
        'payment.checkBasicOptions'
      ) as FormArray;
      checkBasicOptions.push(new FormControl(false));
    });
    this.bookingParams.paymentExtraOptions.forEach((option) => {
      const checkExtraOptions = this.bookingOptionsForm.get(
        'payment.checkExtraOptions'
      ) as FormArray;
      checkExtraOptions.push(new FormControl(false));
    });
  }
}
