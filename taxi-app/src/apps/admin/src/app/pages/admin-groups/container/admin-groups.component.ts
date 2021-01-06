import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UnsubscribeService } from 'src/libs/@shared/services/unsubscribe.service';
import { IAdminState } from '../../../shared/stores/admin-store/admin.state';
import {
  SELECT_ADMIN_GROUPS_QUERY_PARAMS,
  SELECT_IS_DETAIL_BAR_OPEN,
} from '../../../shared/stores/admin-store/admin.selector';
import { takeUntil } from 'rxjs/operators';
import { IQueryParams } from 'src/libs/@shared/models/query-params.model';
import { LOAD_ADMIN_GROUPS_ACTION } from '../../../shared/stores/admin-store/admin.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss'],
})
export class AdminGroupsComponent implements OnInit {
  isDetailBarOpen$: Observable<boolean>;

  constructor(
    private store: Store<IAdminState>,
    private readonly unsubscribeService: UnsubscribeService
  ) {}

  ngOnInit(): void {
    this.store
      .select(SELECT_ADMIN_GROUPS_QUERY_PARAMS)
      .pipe(takeUntil(this.unsubscribeService.subscription))
      .subscribe((adminGroupsQueryParams: IQueryParams) => {
        this.store.dispatch(
          LOAD_ADMIN_GROUPS_ACTION({ params: adminGroupsQueryParams })
        );
      });

    this.isDetailBarOpen$ = this.store.select(SELECT_IS_DETAIL_BAR_OPEN);
  }
}
