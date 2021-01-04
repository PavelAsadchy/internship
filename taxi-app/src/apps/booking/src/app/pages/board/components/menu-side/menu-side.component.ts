import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMenuItem } from 'src/apps/booking/src/app/shared/models/menu-item.model';
import { MenuService } from 'src/apps/booking/src/app/shared/services/menu.service';
import { AUTH_LOGOUT_ACTION } from 'src/apps/booking/src/app/shared/stores/auth-store/auth.actions';
import { IAuthState } from 'src/apps/booking/src/app/shared/stores/auth-store/auth.state';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSideComponent implements OnInit {
  @Input()
  userName: string;

  @Input()
  isNavActive: boolean;

  menuContent$: Observable<IMenuItem[]>;

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
  ) {}

  ngOnInit(): void {
    this.menuContent$ = this.menuService.menuItemList$;
  }

  logout(): void {
    this.store.dispatch(AUTH_LOGOUT_ACTION());
  }
}
