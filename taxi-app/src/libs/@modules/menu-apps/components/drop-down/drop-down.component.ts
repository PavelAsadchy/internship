import { Component } from '@angular/core';
import { IMenuItem } from 'src/libs/@shared/models/menu-item.model';
import { environment } from 'src/apps/admin/src/environments/environment';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  menuContent: IMenuItem[];

  constructor() {
    this.menuContent = [
      new IMenuItem(
        'Booking',
        'Booking App',
        'local_phone',
        environment.bookingAppLink
      ),
      new IMenuItem(
        'Admin',
        'Edit user privileges',
        'settings',
        environment.adminAppLink
      ),
    ];
  }
}
