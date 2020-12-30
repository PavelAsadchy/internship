import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';
import { UnsubscribeService } from 'src/app/shared/services/unsubscribe.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss'],
})
export class MenuMainComponent implements OnInit, OnDestroy {
  menuContent: IMenuItem[] = null;

  menu: IMenuItem[] = null;

  constructor(
    private readonly menuService: MenuService,
    private readonly unsubscribeService: UnsubscribeService
  ) {}

  ngOnInit(): void {
    this.menuService.menuItemList$
      .pipe(takeUntil(this.unsubscribeService.subscription()))
      .subscribe((menuItems) => (this.menuContent = menuItems));
  }

  ngOnDestroy(): void {
    this.unsubscribeService.destroy;
  }
}
