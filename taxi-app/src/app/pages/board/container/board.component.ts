import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';
import { SELECT_AUTH_USER } from 'src/app/shared/stores/auth-store/auth.selectors';
import { IAuthState } from 'src/app/shared/stores/auth-store/auth.state';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [MenuService],
})
export class BoardComponent implements OnInit {
  isNavActive = false;

  user$: Observable<string> = this.store$.select(SELECT_AUTH_USER);

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
    new IMenuItem('item3', 'description', 'account_box', 'board'),
    new IMenuItem('item4', 'description', 'account_box', 'board'),
  ];

  constructor(
    private readonly menuService: MenuService,
    private store$: Store<IAuthState>
  ) {}

  ngOnInit(): void {
    this.menuService.setMenuItemList(this.menuContent);
  }

  navToggle(): void {
    this.isNavActive = !this.isNavActive;
  }
}
