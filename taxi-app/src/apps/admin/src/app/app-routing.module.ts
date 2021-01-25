import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/libs/@modules/auth/components/login/login.component';
import { RegisterComponent } from 'src/libs/@modules/auth/components/register/register.component';
import { AuthComponent } from 'src/libs/@modules/auth/container/auth.component';
import { NotFoundComponent } from 'src/libs/@modules/not-found/not-found.component';
import { AuthGuard } from 'src/libs/@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import(
        'src/apps/admin/src/app/pages/board-admin/board-admin.module'
      ).then((module) => module.BoardAdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
