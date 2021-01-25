import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenuItem } from 'src/libs/@shared/models/menu-item.model';
import { MenuService } from 'src/libs/@shared/services/menu.service';
import { AUTH_LOGOUT_ACTION } from 'src/libs/@stores/auth-store/auth.actions';
import { IAuthState } from 'src/libs/@stores/auth-store/auth.state';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSideComponent implements OnInit {
  @Input()
  userName$: Observable<string>;

  @Input()
  isNavActive: boolean;

  menuContent$: Observable<IMenuItem[]>;
  baseRouterLink$: BehaviorSubject<string>;

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
    this.baseRouterLink$ = this.menuService.baseRouterLink$;
  }

  logout(): void {
    this.store.dispatch(AUTH_LOGOUT_ACTION());
  }
}
