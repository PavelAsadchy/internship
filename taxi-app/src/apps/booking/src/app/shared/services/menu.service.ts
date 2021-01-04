import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenuItem } from '../models/menu-item.model';

@Injectable()
export class MenuService {
  menuItemList: BehaviorSubject<IMenuItem[]> = new BehaviorSubject<IMenuItem[]>(
    []
  );

  menuItemList$: Observable<IMenuItem[]> = this.menuItemList.asObservable();

  setMenuItemList(menu: IMenuItem[]): void {
    this.menuItemList.next(menu);
  }
}
