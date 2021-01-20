import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAdminState } from 'src/apps/admin/src/app/shared/stores/admin-store/admin.state';
import { IMenuItem } from 'src/libs/@shared/models/menu-item.model';
import { MenuService } from 'src/libs/@shared/services/menu.service';
import { SELECT_AUTH_USER } from 'src/libs/@stores/auth-store/auth.selectors';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [MenuService],
})
export class BoardComponent implements OnInit {
  isNavActive = false;
  baseRouterLink = '/board';
  user$: Observable<string>;

  menuContent: IMenuItem[] = [
    new IMenuItem(
      'Create Booking',
      'Add a new booking entry',
      'book',
      '/booking/create'
    ),
    new IMenuItem(
      'Booking List',
      'View a list of bookings',
      'library_books',
      '/booking/list'
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
