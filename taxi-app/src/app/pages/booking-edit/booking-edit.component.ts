import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ACTIVATED_ROUTE_PARAMS } from 'src/app/shared/consts/app.consts';
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
import {
  LOAD_BOOKING_ACTION,
  UPDATE_BOOKING_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
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

  id: string;

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
    private readonly createBookingCalculationService: CreateBookingCalculationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      LOAD_BOOKING_ACTION({
        bookingId: this.activatedRoute.snapshot.params[ACTIVATED_ROUTE_PARAMS],
      })
    );

    this.bookingOptionsService
      .loadBookingOptions()
      .pipe(takeUntil(this.sub))
      .subscribe((data: IBookingOptions) => {
        this.bookingOptions = data;
      });

    this.bookingOptionsForm.valueChanges.subscribe((status) => {
      this.createBookingCalculationService.createRandomCalculation(status);
      this.createBookingCalculationService.price$
        .pipe(takeUntil(this.sub))
        .subscribe((newPrice) => (this.price = newPrice));
    });

    const booking$: Observable<IBooking> = this.store.select(
      SELECT_CURRENT_BOOKING
    );

    booking$.subscribe((currentBooking: IBooking) => {
      if (currentBooking) {
        this.price = currentBooking.price;
        this.id = currentBooking.id;
        this.bookingOptionsForm.patchValue({
          bookingChannel: {
            channel: currentBooking.bookingChannel || null,
          },
          pickUp: {
            time: currentBooking.pickUpUrgencyFlag || null,
            point: currentBooking.pickUpPoint || null,
            address: currentBooking.pickUpAddress || '',
          },
          dropOff: {
            point: currentBooking.dropOffPoint || null,
            address: currentBooking.dropOffAddress || '',
          },
          vehicle: {
            items: currentBooking.vehicle || null,
          },
          customerInformation: {
            phone: currentBooking.customerPhone || '',
            email: currentBooking.customerEmail || '',
            name: currentBooking.customerName || '',
          },
          passengerInformation: {
            phone: currentBooking.passengerPhone || '',
            name: currentBooking.passengerName || '',
          },
          payment: {
            paymentOptions: {
              channel: currentBooking.paymentChannel || null,
              type: currentBooking.paymentType || null,
            },
            checkBasicOptions: currentBooking.paymentBasicOptions || [],
            checkExtraOptions: currentBooking.paymentExtraOptions || [],
          },
          notes: {
            toDriver: currentBooking.notesToDriver || '',
            toDispatcher: currentBooking.notesToDispatcher || '',
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
    const updatedBooking: IBooking = {
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
      id: this.id,
    };

    this.store.dispatch(UPDATE_BOOKING_ACTION({ booking: updatedBooking }));
    this.router.navigate(['board', 'booking', 'list']);
  }

  onReturnWithoutChanges() {
    this.router.navigate(['board', 'booking', 'list']);
  }

  checkFormValidity(): boolean {
    return !this.price;
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
