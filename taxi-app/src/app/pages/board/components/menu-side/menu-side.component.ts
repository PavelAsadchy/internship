import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent {

  @Input()
  public menuContent: IMenuItem[];

}
