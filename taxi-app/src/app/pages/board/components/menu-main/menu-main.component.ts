import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent {

  @Input()
  public menuContent: IMenuItem[];

}
