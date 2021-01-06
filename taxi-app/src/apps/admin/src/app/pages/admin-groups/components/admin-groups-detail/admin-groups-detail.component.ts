import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TOGGLE_DETAIL_BAR_ACTION } from '../../../../shared/stores/admin-store/admin.actions';
import { IAdminState } from '../../../../shared/stores/admin-store/admin.state';

@Component({
  selector: 'app-admin-groups-detail',
  templateUrl: './admin-groups-detail.component.html',
  styleUrls: ['./admin-groups-detail.component.scss'],
})
export class AdminGroupsDetailComponent implements OnInit {
  constructor(private store: Store<IAdminState>) {}

  ngOnInit(): void {}

  onDetailBarClose(): void {
    this.store.dispatch(TOGGLE_DETAIL_BAR_ACTION({ isDetailBarOpen: false }));
  }
}
