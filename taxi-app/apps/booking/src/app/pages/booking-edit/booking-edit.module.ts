import { NgModule } from '@angular/core';
import { BookingModule } from 'apps/booking/src/app/shared/modules/booking/booking.module';
import { MapModule } from 'apps/booking/src/app/shared/modules/map/map.module';
import { SharedModule } from 'apps/booking/src/app/shared/shared.module';
import { BookingEditComponent } from './container/booking-edit.component';

@NgModule({
  declarations: [BookingEditComponent],
  imports: [SharedModule, MapModule, BookingModule],
  exports: [BookingEditComponent],
})
export class BookingEditModule {}
