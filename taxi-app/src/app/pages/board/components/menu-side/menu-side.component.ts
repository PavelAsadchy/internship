import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';
import {
  AUTH_LOGOUT_ACTION,
  AUTH_REFRESH_TOKEN,
} from 'src/app/shared/stores/auth-store/auth.actions';

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

  private sub: Subject<void> = new Subject<void>();

  constructor(
    private readonly menuService: MenuService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.menuService.menuItemList$
      .pipe(takeUntil(this.sub))
      .subscribe((menuItems) => (this.menuContent = menuItems));
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  logout(): void {
    this.store.dispatch(AUTH_LOGOUT_ACTION());
  }

  trigger(): void {
    this.store.dispatch(AUTH_REFRESH_TOKEN());
  }
}
