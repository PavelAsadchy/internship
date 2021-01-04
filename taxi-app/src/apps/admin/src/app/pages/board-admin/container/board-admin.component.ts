import { Component, OnInit } from '@angular/core';
import { USER_NAME } from 'src/libs/@shared/consts/app.consts';
import { IMenuItem } from 'src/apps/booking/src/app/shared/models/menu-item.model';
import { MenuService } from 'src/libs/@shared/services/menu.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss'],
  providers: [MenuService],
})
export class BoardAdminComponent implements OnInit {
  isNavActive = false;
  baseRouterLink = '/admin';
  user: string;

  menuContent: IMenuItem[] = [
    new IMenuItem(
      'Manage Groups',
      'View/Edit managed groups',
      'security',
      '/admin/groups'
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
