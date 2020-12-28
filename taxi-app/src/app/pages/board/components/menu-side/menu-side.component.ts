import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';
import { UnsubscribeService } from 'src/app/shared/services/unsubscribe.service';
import { AUTH_LOGOUT_ACTION } from 'src/app/shared/stores/auth-store/auth.actions';
import { IAuthState } from 'src/app/shared/stores/auth-store/auth.state';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss'],
})
export class MenuSideComponent extends UnsubscribeService implements OnInit {
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
    private store: Store<IAuthState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.menuService.menuItemList$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((menuItems) => (this.menuContent = menuItems));
  }

  logout(): void {
    this.store.dispatch(AUTH_LOGOUT_ACTION());
  }
}
