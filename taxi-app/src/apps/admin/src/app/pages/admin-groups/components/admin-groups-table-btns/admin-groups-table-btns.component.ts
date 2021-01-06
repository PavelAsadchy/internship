import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';
import {
  LOAD_GROUP_PRIVILEGES_ACTION,
  SET_ADMIN_GROUP_ACTION,
  TOGGLE_DETAIL_BAR_ACTION,
} from '../../../../shared/stores/admin-store/admin.actions';
import { IAdminState } from '../../../../shared/stores/admin-store/admin.state';

@Component({
  selector: 'app-admin-groups-table-btns',
  templateUrl: './admin-groups-table-btns.component.html',
  styleUrls: ['./admin-groups-table-btns.component.scss'],
})
export class AdminGroupsTableBtnsComponent implements OnInit {
  @Input()
  element: IAdminGroup;

  constructor(private store: Store<IAdminState>) {}

  ngOnInit(): void {}

  onDetail(): void {
    this.store.dispatch(SET_ADMIN_GROUP_ACTION({ adminGroup: this.element }));
    this.store.dispatch(TOGGLE_DETAIL_BAR_ACTION({ isDetailBarOpen: true }));
  }

  onEdit(): void {
    this.selectAminGroup();
  }

  private selectAminGroup(): void {
    this.store.dispatch(
      LOAD_GROUP_PRIVILEGES_ACTION({ adminGroupId: this.element.id })
    );
  }
}
