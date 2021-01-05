import { NgModule } from '@angular/core';
import { BookingModule } from 'src/apps/booking/src/app/shared/modules/booking/booking.module';
import { MapModule } from 'src/apps/booking/src/app/shared/modules/map/map.module';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { BookingEditComponent } from './container/booking-edit.component';

@NgModule({
  declarations: [BookingEditComponent],
  imports: [SharedModule, MapModule, BookingModule],
  exports: [BookingEditComponent],
})
export class BookingEditModule {}
