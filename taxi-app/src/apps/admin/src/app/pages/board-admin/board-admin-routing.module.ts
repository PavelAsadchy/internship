import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './container/board-admin.component';
import { AdminGroupsComponent } from '../admin-groups/admin-groups.component';
import { AdminDetailComponent } from '../admin-detail/admin-detail.component';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';
import { BoardAdminContentComponent } from './components/board-admin-content/board-admin-content.component';

const routes: Routes = [
  {
    path: '',
    component: BoardAdminComponent,
    children: [
      {
        path: '',
        component: BoardAdminContentComponent,
      },
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
          {
            path: 'groups/:id',
            component: AdminDetailComponent,
          },
          {
            path: 'groups/:id/edit',
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
