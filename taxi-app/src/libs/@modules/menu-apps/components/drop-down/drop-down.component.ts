import { Component } from '@angular/core';
import { IMenuItem } from 'src/libs/@shared/models/menu-item.model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  menuContent: IMenuItem[] = [
    new IMenuItem(
      'Booking',
      'Booking App',
      'local_phone',
      'http://localhost:4200/board'
    ),
    new IMenuItem(
      'Admin',
      'Edit user privileges',
      'settings',
      'http://localhost:4222/admin'
    ),
  ];
}
