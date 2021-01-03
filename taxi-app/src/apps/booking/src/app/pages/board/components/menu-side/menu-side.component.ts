import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { IMenuItem } from 'src/apps/booking/src/app/shared/models/menu-item.model';
import { MenuService } from 'src/apps/booking/src/app/shared/services/menu.service';
import { UnsubscribeService } from 'src/apps/booking/src/app/shared/services/unsubscribe.service';
import { AUTH_LOGOUT_ACTION } from 'src/apps/booking/src/app/shared/stores/auth-store/auth.actions';
import { IAuthState } from 'src/apps/booking/src/app/shared/stores/auth-store/auth.state';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss'],
})
export class MenuSideComponent implements OnInit, OnDestroy {
  menuContent: IMenuItem[] = null;

  menuItemHome: IMenuItem = new IMenuItem(
    'Home page',
    'Return to home page',
    'home',
    ''
  );

  menuItemLogout: IMenuItem = new IMenuItem(
    'Log out',
    'Return to login page',
    'exit_to_app',
    ''
  );

  constructor(
    private readonly menuService: MenuService,
    private readonly unsubscribeService: UnsubscribeService,
    private store: Store<IAuthState>
  ) {}

  ngOnInit(): void {
    this.menuService.menuItemList$
      .pipe(takeUntil(this.unsubscribeService.subscription))
      .subscribe((menuItems) => (this.menuContent = menuItems));
  }

  ngOnDestroy(): void {
    this.unsubscribeService.destroy();
  }

  logout(): void {
    this.store.dispatch(AUTH_LOGOUT_ACTION());
  }
}
