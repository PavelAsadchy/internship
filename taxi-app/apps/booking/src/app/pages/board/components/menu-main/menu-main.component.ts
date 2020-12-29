import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { IMenuItem } from 'apps/booking/src/app/shared/models/menu-item.model';
import { MenuService } from 'apps/booking/src/app/shared/services/menu.service';
import { UnsubscribeService } from 'apps/booking/src/app/shared/services/unsubscribe.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss'],
})
export class MenuMainComponent extends UnsubscribeService implements OnInit {
  menuContent: IMenuItem[] = null;

  menu: IMenuItem[] = null;

  constructor(private readonly menuService: MenuService) {
    super();
  }

  ngOnInit(): void {
    this.menuService.menuItemList$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((menuItems) => (this.menuContent = menuItems));
  }
}
