import { Component, OnInit } from '@angular/core';
import { USER_NAME } from 'src/libs/@shared/consts/app.consts';
import { IMenuItem } from 'src/libs/@shared/models/menu-item.model';
import { MenuService } from 'src/libs/@shared/services/menu.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [MenuService],
})
export class BoardComponent implements OnInit {
  isNavActive = false;
  baseRouterLink = '/board';
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
  ];

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.setMenuItemList(this.menuContent, this.baseRouterLink);
    this.user = localStorage.getItem(USER_NAME);
  }

  navToggle(): void {
    this.isNavActive = !this.isNavActive;
  }
}
