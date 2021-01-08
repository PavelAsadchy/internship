import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { DEFAULT_ADMIN_GROUPS } from '../../../shared/consts/admin-groups.const';
import { AdminGroupsService } from '../../../shared/services/admin-groups.service';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss'],
})
export class AdminGroupsComponent implements OnInit, OnDestroy {
  isDetailBarOpen$: Observable<boolean>;

  constructor(
    private store: Store<IAdminState>,
    private readonly unsubscribeService: UnsubscribeService,
    private http: AdminGroupsService
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

  ngOnDestroy(): void {
    this.unsubscribeService.destroy();
  }

  trigger() {
    // DEFAULT_ADMIN_GROUPS.forEach((group) => {
    //   this.http
    //     .myPost({
    //       url: 'https://taxi-app-294611.firebaseio.com/groups.json',
    //       payload: group,
    //       headers: {
    //         name: 'InterceptorSkipHeader',
    //         value: '',
    //       },
    //     })
    //     .subscribe((res) => console.log(res));
    // });
  }
}
