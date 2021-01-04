import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenuItem } from 'src/apps/booking/src/app/shared/models/menu-item.model';
import { MenuService } from 'src/apps/booking/src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss'],
})
export class MenuMainComponent implements OnInit {
  menuContent$: Observable<IMenuItem[]>;
  baseRouterLink$: BehaviorSubject<string>;

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.menuContent$ = this.menuService.menuItemList$;
    this.baseRouterLink$ = this.menuService.baseRouterLink$;
  }
}
