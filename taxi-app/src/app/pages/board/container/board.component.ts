import { Component, OnInit } from '@angular/core';
import { USER_NAME } from 'src/app/shared/consts/app.consts';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [MenuService],
})
export class BoardComponent implements OnInit {
  isNavActive = false;

  user: string;

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
    private readonly httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {
    this.menuService.setMenuItemList(this.menuContent);
    this.user = localStorage.getItem(USER_NAME);
  }

  navToggle(): void {
    this.isNavActive = !this.isNavActive;
  }

  trigger() {
    this.httpClientService.test().subscribe();
  }
}
