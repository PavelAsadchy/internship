import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [MenuService]
})
export class BoardComponent implements OnInit {

  public isNavActive = false;

  public menuContent: IMenuItem[] = [
    new IMenuItem('Create Booking', 'Add a new booking entry', 'book', 'create-booking'),
    new IMenuItem('Booking List', 'View a list of bookings', 'library_books', 'booking-list'),
    new IMenuItem('item3', 'description', 'account_box', 'board'),
    new IMenuItem('item4', 'description', 'account_box', 'board'),
  ];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.setMenuItemList(this.menuContent);
  }

  public navToggle(): void {
    this.isNavActive = !this.isNavActive;
  }

}
