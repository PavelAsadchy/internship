import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';

@Component({
  selector: 'app-admin-groups-table-btns',
  templateUrl: './admin-groups-table-btns.component.html',
  styleUrls: ['./admin-groups-table-btns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminGroupsTableBtnsComponent {
  @Input()
  element: IAdminGroup;

  constructor(private router: Router) {}

  onClick(route: string): void {
    this.router.navigate(['admin', 'groups', route, this.element.id]);
  }
}
