import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { combineLatest, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
import { IBooking } from 'src/app/shared/models/booking.model';
import { BookingOptionsService } from 'src/app/shared/services/booking-options.service';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';
import { UPDATE_BOOKING_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { SELECT_CURRENT_BOOKING } from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss'],
})
export class BookingEditComponent implements OnInit, OnDestroy {
  bookingOptions: IBookingOptions;

  price: number;

  isSliderChecked = false;

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

  private sub: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store<IBookingState>,
    private readonly bookingOptionsService: BookingOptionsService,
    private readonly createBookingCalculationService: CreateBookingCalculationService
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

    const booking$: Observable<IBooking> = this.store.select(
      SELECT_CURRENT_BOOKING
    );

    booking$.subscribe((currentBooking: IBooking) => {
      if (currentBooking) {
        this.bookingOptionsForm.patchValue({
          bookingChannel: {
            channel: currentBooking.bookingChannel,
          },
          pickUp: {
            time: currentBooking.pickUpUrgencyFlag,
            point: currentBooking.pickUpPoint,
            address: currentBooking.pickUpAddress,
          },
          dropOff: {
            point: currentBooking.dropOffPoint,
            address: currentBooking.dropOffAddress,
          },
          vehicle: {
            items: currentBooking.vehicle,
          },
          customerInformation: {
            phone: currentBooking.customerPhone,
            email: currentBooking.customerEmail,
            name: currentBooking.customerName,
          },
          passengerInformation: {
            phone: currentBooking.passengerPhone,
            name: currentBooking.passengerName,
          },
          payment: {
            paymentOptions: {
              channel: currentBooking.paymentChannel,
              type: currentBooking.paymentType,
            },
            checkBasicOptions: currentBooking.paymentBasicOptions,
            checkExtraOptions: currentBooking.paymentExtraOptions,
          },
          notes: {
            toDriver: currentBooking.notesToDriver,
            toDispatcher: currentBooking.notesToDispatcher,
          },
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  onBookingEditSubmit(): void {
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

    this.store.dispatch(UPDATE_BOOKING_ACTION({ booking: formObj }));
    this.bookingOptionsForm.reset();
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
}
