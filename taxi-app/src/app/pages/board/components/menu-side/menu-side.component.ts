import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent implements OnInit, OnDestroy {

  menuContent: IMenuItem[] = null;

  menuItemHome: IMenuItem = new IMenuItem('Home page', 'Return to home page', 'home', '')

  private sub: Subject<void> = new Subject<void>();

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuItemList$
    .pipe(
      takeUntil(this.sub)
    ).subscribe(
      menuItems => this.menuContent = menuItems
    );
  }
  
  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }
}
