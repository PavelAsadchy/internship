import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMenuItem } from 'src/libs/@shared/models/menu-item.model';
import { MenuService } from 'src/libs/@shared/services/menu.service';
import { SELECT_AUTH_USER } from 'src/libs/@stores/auth-store/auth.selectors';
import { IAdminState } from '../../../shared/stores/admin-store/admin.state';
import { slideInAnimation } from '../route-animation';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss'],
  providers: [MenuService],
  animations: [slideInAnimation],
})
export class BoardAdminComponent implements OnInit {
  isNavActive = false;
  baseRouterLink = '/admin';
  user$: Observable<string>;

  menuContent: IMenuItem[] = [
    new IMenuItem(
      'Manage Groups',
      'View/Edit managed groups',
      'security',
      '/groups/list'
    ),
  ];

  constructor(
    private readonly menuService: MenuService,
    private store: Store<IAdminState>
  ) {}

  ngOnInit(): void {
    this.menuService.setMenuItemList(this.menuContent, this.baseRouterLink);
    this.user$ = this.store.select(SELECT_AUTH_USER);
  }

  navToggle(): void {
    this.isNavActive = !this.isNavActive;
  }
}
