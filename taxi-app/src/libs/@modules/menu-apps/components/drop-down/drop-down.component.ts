import { Component } from '@angular/core';
import { IMenuItem } from 'src/libs/@shared/models/menu-item.model';
import { environment } from 'src/environments/environment';
import { IAppsEnvironment } from 'src/environments/ienvironment.model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  menuContent: IMenuItem[] = [];

  constructor() {
    environment.apps.forEach((app: IAppsEnvironment) =>
      this.menuContent.push(
        new IMenuItem(app.name, app.description, app.icon, app.link)
      )
    );
  }
}
