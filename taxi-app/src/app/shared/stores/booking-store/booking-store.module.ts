import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookingEffects } from './booking.effects';
import * as fromBooking from './booking.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('booking', fromBooking.reducer),
    EffectsModule.forFeature([BookingEffects]),
  ],
})
export class BookingStoreModule {}
