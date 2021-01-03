import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../../../../libs/@modules/auth/container/auth.component';
import { NotFoundComponent } from '../../../../libs/@modules/not-found/not-found.component';
import { AuthGuard } from '../../../../libs/@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'board',
    loadChildren: () =>
      import('src/apps/booking/src/app/pages/board/board.module').then(
        (module) => module.BoardModule
      ),
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
