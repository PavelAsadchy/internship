import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import {
  BookingChannel,
  CustomerInformation,
  DropOff,
  Notes,
  PassengerInformation,
  PaymentOptions,
  PickUp,
  Vehicle,
} from 'src/apps/booking/src/app/shared/models/booking-options.model';
import { CreateBookingCalculationService } from 'src/apps/booking/src/app/shared/services/create-booking-calculation.service';
import { takeUntil } from 'rxjs/operators';
import { IBooking } from 'src/apps/booking/src/app/shared/models/booking.model';
import * as moment from 'moment';
import {
  CHECK_BASIC_OPTIONS,
  CHECK_EXTRA_OPTIONS,
} from 'src/apps/booking/src/app/shared/consts/booking-options.consts';
import { EventEmitter } from '@angular/core';
import { UnsubscribeService } from 'src/libs/@shared/services/unsubscribe.service';

@Component({
  selector: 'app-booking-board',
  templateUrl: './booking-board.component.html',
  styleUrls: ['./booking-board.component.scss'],
  providers: [CreateBookingCalculationService],
})
export class BookingBoardComponent implements OnInit, OnDestroy {
  @Input()
  bookingParams: IBooking;

  @Output()
  onFormSubmit: EventEmitter<IBooking> = new EventEmitter<IBooking>();

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

  get checkBasicOptions() {
    return this.bookingOptionsForm.get(
      'payment.checkBasicOptions'
    ) as FormArray;
  }

  get checkExtraOptions() {
    return this.bookingOptionsForm.get(
      'payment.checkExtraOptions'
    ) as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private readonly createBookingCalculationService: CreateBookingCalculationService,
    private readonly unsubscribeService: UnsubscribeService
  ) {}

  ngOnInit(): void {
    this.createBookingCalculationService.price$
      .pipe(takeUntil(this.unsubscribeService.subscription))
      .subscribe((price: number) => {
        this.price = price;
      });

    this.bookingOptionsForm.valueChanges
      .pipe(takeUntil(this.unsubscribeService.subscription))
      .subscribe((status) => {
        this.createBookingCalculationService.createRandomCalculation(status);
      });

    this.patchValueToForm();
  }

  ngOnDestroy(): void {
    this.unsubscribeService.destroy();
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
      passengerPhone: this.bookingOptionsForm.get('passengerInformation.phone')
        .value,
      paymentChannel: this.bookingOptionsForm.get(
        'payment.paymentOptions.channel'
      ).value,
      paymentType: this.bookingOptionsForm.get('payment.paymentOptions.type')
        .value,
      paymentBasicOptions: this.checkBasicOptions.value
        .map((isChecked: boolean, i: number) =>
          isChecked ? CHECK_BASIC_OPTIONS[i].value : null
        )
        .filter(Boolean),
      paymentExtraOptions: this.checkExtraOptions.value
        .map((isChecked: boolean, i: number) =>
          isChecked ? CHECK_EXTRA_OPTIONS[i].value : null
        )
        .filter(Boolean),
      notesToDispatcher: this.bookingOptionsForm.get('notes.toDispatcher')
        .value,
      notesToDriver: this.bookingOptionsForm.get('notes.toDriver').value,
      price: this.price,
      bookingTime: moment().format(),
      pickUpTime: this.createBookingCalculationService
        .setPickUpTime(this.bookingOptionsForm.get('pickUp.time').value)
        .format(),
      pickUpUrgency: this.createBookingCalculationService.setRandomPickUpUrgency(),
      status: this.createBookingCalculationService.setRandomStatus(),
    };

    this.onFormSubmit.emit(formObj);

    this.patchValueToForm();
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
      },
      notes: {
        toDriver: this.bookingParams.notesToDriver || '',
        toDispatcher: this.bookingParams.notesToDispatcher || '',
      },
    });
    CHECK_BASIC_OPTIONS.forEach((option) => {
      this.checkBasicOptions.push(
        new FormControl(
          this.bookingParams.paymentBasicOptions
            ? this.bookingParams.paymentBasicOptions.includes(option.value)
            : false
        )
      );
    });
    CHECK_EXTRA_OPTIONS.forEach((option) => {
      this.checkExtraOptions.push(
        new FormControl(
          this.bookingParams.paymentExtraOptions
            ? this.bookingParams.paymentExtraOptions.includes(option.value)
            : false
        )
      );
    });
  }
}
