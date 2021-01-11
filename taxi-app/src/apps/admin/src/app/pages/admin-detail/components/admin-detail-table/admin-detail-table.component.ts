import { Component, Input } from '@angular/core';
import { PRIVILEGE_OPTIONS } from '../../../../shared/consts/privileges.const';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';

@Component({
  selector: 'app-admin-detail-table',
  templateUrl: './admin-detail-table.component.html',
  styleUrls: ['./admin-detail-table.component.scss']
})
export class AdminDetailTableComponent {
  @Input()
  adminGroup: IAdminGroup;
  privilegeOptions = PRIVILEGE_OPTIONS;
}
