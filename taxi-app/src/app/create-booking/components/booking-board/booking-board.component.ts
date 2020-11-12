import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BookingChannel, CustomerInformation, DropOff, IBookingOptions, Notes, PassengerInformation, PaymentOptions, PickUp, Vehicle } from 'src/app/shared/models/bookingOptions.model';
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

  bookingOptionsForm = this.fb.group({
    bookingChannel: this.fb.group(new BookingChannel()),
    pickUp: this.fb.group(new PickUp()),
    dropOff: this.fb.group(new DropOff()),
    vehicle: this.fb.group(new Vehicle()),
    customerInformation: this.fb.group(new CustomerInformation()),
    passengerInformation: this.fb.group(new PassengerInformation()),
    paymentOptions: this.fb.group(new PaymentOptions()),
    checkBasicOptions: this.fb.array([]),
    checkExtraOptions: this.fb.array([]),
    notes: this.fb.group(new Notes()),
    // new BookingChannel(),
    // new PickUp()
    // channel: [null, Validators.required],
    // time: [null, Validators.required],
    // point: [null, Validators.required],
    // address: ['', Validators.required],
    
    // pickUpTime: [null, Validators.required],
    // bookingChannel: this.fb.group(new BookingChannel()),
    // pickUp: this.fb.group(new PickUp()),
    // dropOff: this.fb.group(new DropOff()),
    // vehicle: this.fb.group(new Vehicle()),
    // customerInformation: this.fb.group(new CustomerInformation()),
    // passengerInformation: this.fb.group(new PassengerInformation()),
    // paymentOptions: this.fb.group(new PaymentOptions()),
    // notes: this.fb.group(new Notes()),
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
      
      this.bookingOptions.paymentOptions.basicOptions.options.forEach(check => {
        
      })
    });

    this.bookingOptionsForm.valueChanges
    .subscribe(value => console.log(value));
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  onChanged(event: Event) {
    console.log(event);
  }

  trigger(): void {
    console.log(this.isSliderChecked)
  }

  onBookingOptionsSubmit(): void {
    console.log('form submit')
  }
}
