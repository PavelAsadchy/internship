import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './container/board-admin.component';
import { AdminGroupsComponent } from '../admin-groups/container/admin-groups.component';
import { AdminEditComponent } from '../admin-edit/container/admin-edit.component';
import { BoardAdminContentComponent } from './components/board-admin-content/board-admin-content.component';
import { AdminDetailComponent } from '../admin-detail/container/admin-detail.component';

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
        path: 'groups',
        redirectTo: 'groups/list',
        pathMatch: 'full',
      },
      {
        path: 'groups',
        children: [
          {
            path: 'list',
            component: AdminGroupsComponent,
          },
          {
            path: 'list/:id',
            component: AdminDetailComponent,
            data: { animation: 'Detail' },
          },
          {
            path: 'edit',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: 'edit/:id',
            component: AdminEditComponent,
          },
        ],
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('src/libs/@modules/profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardAdminRoutingModule {}
