import { NgModule } from '@angular/core';
import { SharedModule } from 'apps/booking/src/app/shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './container/board.component';
import { MenuSideComponent } from './components/menu-side/menu-side.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { BookingCreateModule } from 'apps/booking/src/app/pages/booking-create/booking-create.module';
import { BookingListModule } from '../booking-list/booking-list.module';
import { BookingEditModule } from '../booking-edit/booking-edit.module';

@NgModule({
  declarations: [BoardComponent, MenuSideComponent, MenuMainComponent],
  imports: [
    SharedModule,
    BoardRoutingModule,
    BookingCreateModule,
    BookingListModule,
    BookingEditModule,
  ],
  exports: [BoardComponent],
})
export class BoardModule {}
