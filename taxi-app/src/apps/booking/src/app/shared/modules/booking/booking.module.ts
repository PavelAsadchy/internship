import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { BookingChannelComponent } from './components/booking-channel/booking-channel.component';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { DropOffComponent } from './components/drop-off/drop-off.component';
import { NotesComponent } from './components/notes/notes.component';
import { PassengerInformationComponent } from './components/passenger-information/passenger-information.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PickUpComponent } from './components/pick-up/pick-up.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { BookingBoardComponent } from './container/booking-board.component';

@NgModule({
  declarations: [
    BookingBoardComponent,
    BookingChannelComponent,
    PickUpComponent,
    CustomerInformationComponent,
    PassengerInformationComponent,
    DropOffComponent,
    NotesComponent,
    PaymentComponent,
    VehicleComponent,
    CustomerInformationComponent,
    VehicleItemComponent,
  ],
  imports: [SharedModule],
  providers: [],
  exports: [
    BookingBoardComponent,
    BookingChannelComponent,
    PickUpComponent,
    CustomerInformationComponent,
    PassengerInformationComponent,
    DropOffComponent,
    NotesComponent,
    PaymentComponent,
    VehicleComponent,
    CustomerInformationComponent,
    VehicleItemComponent,
  ],
})
export class BookingModule {}
