import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit, OnDestroy {

  menuContent: IMenuItem[] = null;

  menu: IMenuItem[] = null;
  
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
