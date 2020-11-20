import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { MenuSideComponent } from './components/menu-side/menu-side.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { CreateBookingModule } from 'src/app/pages/create-booking/create-booking.module';
import { BookingListModule } from '../booking-list/booking-list.module';

@NgModule({
  declarations: [BoardComponent, MenuSideComponent, MenuMainComponent],
  imports: [
    SharedModule,
    BoardRoutingModule,
    CreateBookingModule,
    BookingListModule,
  ],
  exports: [BoardComponent],
})
export class BoardModule {}
