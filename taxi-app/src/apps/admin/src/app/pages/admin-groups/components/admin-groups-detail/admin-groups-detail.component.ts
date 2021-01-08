import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PRIVILEGE_OPTIONS } from '../../../../shared/consts/privileges.const';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';
import { TOGGLE_DETAIL_BAR_ACTION } from '../../../../shared/stores/admin-store/admin.actions';
import { SELECT_CURRENT_GROUP } from '../../../../shared/stores/admin-store/admin.selector';
import { IAdminState } from '../../../../shared/stores/admin-store/admin.state';

@Component({
  selector: 'app-admin-groups-detail',
  templateUrl: './admin-groups-detail.component.html',
  styleUrls: ['./admin-groups-detail.component.scss'],
})
export class AdminGroupsDetailComponent implements OnInit {
  selectedGroup$: Observable<IAdminGroup>;
  privilegeOptions = PRIVILEGE_OPTIONS;

  constructor(private store: Store<IAdminState>) {}

  ngOnInit(): void {
    this.selectedGroup$ = this.store.select(SELECT_CURRENT_GROUP);
  }

  onDetailBarClose(): void {
    this.store.dispatch(TOGGLE_DETAIL_BAR_ACTION({ isDetailBarOpen: false }));
  }
}
