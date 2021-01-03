import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './container/board-admin.component';
import { MenuMainComponent } from 'src/apps/booking/src/app/pages/board/components/menu-main/menu-main.component';
import { AdminGroupsComponent } from '../admin-groups/admin-groups.component';
// import { AdminDetailComponent } from '../admin-detail/admin-detail.component';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BoardAdminComponent,
    children: [
      // {
      //   path: '',
      //   component: MenuMainComponent,
      // },
      {
        path: 'admin',
        redirectTo: 'admin/groups',
        pathMatch: 'full',
      },
      {
        path: 'admin',
        children: [
          {
            path: 'groups',
            component: AdminGroupsComponent,
          },
          // {
          //   path: 'groups/:id',
          //   component: AdminDetailComponent,
          // },
          {
            path: 'groups/:id',
            component: AdminEditComponent,
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
export class BoardAdminRoutingModule {}
