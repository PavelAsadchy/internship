import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenuItem } from '../../../apps/booking/src/app/shared/models/menu-item.model';

@Injectable()
export class MenuService {
  menuItemList: BehaviorSubject<IMenuItem[]> = new BehaviorSubject<IMenuItem[]>(
    []
  );

  menuItemList$: Observable<IMenuItem[]> = this.menuItemList.asObservable();

  baseRouterLink$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setMenuItemList(menu: IMenuItem[], link: string): void {
    this.menuItemList.next(menu);
    this.baseRouterLink$.next(link);
  }
}
