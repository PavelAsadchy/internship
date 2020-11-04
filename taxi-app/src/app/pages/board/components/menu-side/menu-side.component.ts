import { Component } from '@angular/core';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent {

  public menuContent: IMenuItem[] = null;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuItemList$.subscribe(
      menuItems => this.menuContent = menuItems
    );
  }
}
