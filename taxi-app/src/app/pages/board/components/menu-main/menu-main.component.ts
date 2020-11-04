import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  public menuContent: IMenuItem[] = null;

  public menu: IMenuItem[] = null;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.sub = this.menuService.menuItemList$.subscribe(
      menuItems => this.menuContent = menuItems
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
