import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingCreateComponent } from 'apps/booking/src/app/pages/booking-create/container/booking-create.component';
import { BoardComponent } from './container/board.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { BookingEditComponent } from '../booking-edit/container/booking-edit.component';
import { BookingListComponent } from '../booking-list/container/booking-list.component';

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
        path: 'booking',
        redirectTo: 'booking/create',
        pathMatch: 'full',
      },
      {
        path: 'booking',
        children: [
          {
            path: 'create',
            component: BookingCreateComponent,
          },
          {
            path: 'list',
            component: BookingListComponent,
          },
          {
            path: 'update/:id',
            component: BookingEditComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
