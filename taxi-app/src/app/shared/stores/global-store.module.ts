import { NgModule } from '@angular/core';
import { AuthStoreModule } from './auth-store/auth-store.module';
import { BookingStoreModule } from './booking-store/booking-store.module';
import { MessageStoreModule } from './message-store/message-store.module';

@NgModule({
  imports: [AuthStoreModule, MessageStoreModule, BookingStoreModule],
})
export class GlobalStoreModule {}
