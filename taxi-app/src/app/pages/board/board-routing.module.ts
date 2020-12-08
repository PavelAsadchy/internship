import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookingComponent } from 'src/app/pages/create-booking/container/create-booking.component';
import { BoardComponent } from './container/board.component';
import { BookingListComponent } from 'src/app/pages/booking-list/container/booking-list.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { BookingEditComponent } from '../booking-edit/booking-edit.component';
import { BookingEditGuard } from 'src/app/shared/guards/booking-edit.guard';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: [
      {
        path: '',
        component: MenuMainComponent,
      },
      {
        path: 'create-booking',
        component: CreateBookingComponent,
      },
      {
        path: 'booking-list',
        component: BookingListComponent,
      },
      {
        path: 'booking-list/:id',
        component: BookingEditComponent,
        canActivate: [BookingEditGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
