import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';
import {
  SELECT_ADMIN_GROUP_ACTION,
  TOGGLE_DETAIL_BAR_ACTION,
} from '../../../../shared/stores/admin-store/admin.actions';
import { IAdminState } from '../../../../shared/stores/admin-store/admin.state';

@Component({
  selector: 'app-admin-groups-table-btns',
  templateUrl: './admin-groups-table-btns.component.html',
  styleUrls: ['./admin-groups-table-btns.component.scss'],
})
export class AdminGroupsTableBtnsComponent {
  @Input()
  element: IAdminGroup;

  constructor(private store: Store<IAdminState>, private router: Router) {}

  onDetail(): void {
    this.store.dispatch(
      SELECT_ADMIN_GROUP_ACTION({ adminGroup: this.element })
    );
    this.store.dispatch(TOGGLE_DETAIL_BAR_ACTION({ isDetailBarOpen: true }));
  }

  onEdit(): void {
    this.router.navigate(['admin', 'groups', 'edit', this.element.id]);
  }
}
