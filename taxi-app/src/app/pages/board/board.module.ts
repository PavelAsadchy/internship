import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardDriverComponent } from './components/board-driver/board-driver.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { MenuSideComponent } from './components/menu-side/menu-side.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { CreateBookingModule } from 'src/app/pages/create-booking/create-booking.module';

@NgModule({
  declarations: [
    BoardComponent,
    BoardAdminComponent,
    BoardDriverComponent,
    BoardUserComponent,
    MenuSideComponent,
    MenuMainComponent,
    BookingListComponent
  ],
  imports: [
    SharedModule,
    BoardRoutingModule,
    CreateBookingModule,
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
