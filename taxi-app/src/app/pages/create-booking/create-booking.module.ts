import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CreateBookingComponent } from './container/create-booking.component';
import { BookingModule } from 'src/app/shared/modules/booking/booking.module';
import { MapModule } from 'src/app/shared/modules/map/map.module';

@NgModule({
  declarations: [CreateBookingComponent],
  imports: [SharedModule, BookingModule, MapModule],
  providers: [],
  exports: [CreateBookingComponent],
})
export class CreateBookingModule {}
