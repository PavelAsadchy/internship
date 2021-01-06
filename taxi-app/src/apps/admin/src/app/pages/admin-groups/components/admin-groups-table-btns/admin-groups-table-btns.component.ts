import { Component, Input, OnInit } from '@angular/core';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';

@Component({
  selector: 'app-admin-groups-table-btns',
  templateUrl: './admin-groups-table-btns.component.html',
  styleUrls: ['./admin-groups-table-btns.component.scss'],
})
export class AdminGroupsTableBtnsComponent implements OnInit {
  @Input()
  element: IAdminGroup;

  constructor() {}

  ngOnInit(): void {}
}
