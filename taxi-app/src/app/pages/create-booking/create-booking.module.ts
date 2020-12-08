import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CreateBookingComponent } from './container/create-booking.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { BookingModule } from 'src/app/shared/modules/booking/booking.module';

@NgModule({
  declarations: [CreateBookingComponent, MapComponent],
  imports: [SharedModule, AgmCoreModule, BookingModule],
  providers: [],
  exports: [CreateBookingComponent],
})
export class CreateBookingModule {}
