import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenuItem } from '../models/menu-item.model';

@Injectable()
export class MenuService {
  private menuItemList: BehaviorSubject<IMenuItem[]> = new BehaviorSubject<IMenuItem[]>([]);

  public menuItemList$: Observable<IMenuItem[]> = this.menuItemList.asObservable();

  public setMenuItemList(menu: IMenuItem[]): void {
    this.menuItemList.next(menu);
  }
}
