import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/libs/@shared/services/http-client.service';
import { environment } from 'src/apps/admin/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DEFAULT_ADMIN_GROUPS } from '../../../shared/consts/admin-groups.const';
import { Store } from '@ngrx/store';
import { UnsubscribeService } from 'src/libs/@shared/services/unsubscribe.service';
import { IAdminState } from '../../../shared/stores/admin-store/admin.state';
import { SELECT_ADMIN_GROUPS_QUERY_PARAMS } from '../../../shared/stores/admin-store/admin.selector';
import { takeUntil } from 'rxjs/operators';
import { IQueryParams } from 'src/libs/@shared/models/query-params.model';
import { LOAD_ADMIN_GROUPS_ACTION } from '../../../shared/stores/admin-store/admin.actions';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss'],
})
export class AdminGroupsComponent implements OnInit {
  databaseUrl: string;
  groups = DEFAULT_ADMIN_GROUPS;

  constructor(
    private store: Store<IAdminState>,
    private readonly unsubscribeService: UnsubscribeService,
    // httpClientService: HttpClientService,
    private httpClient: HttpClient
  ) {
    this.databaseUrl = environment.databaseApiUrl;
  }

  ngOnInit(): void {
    this.store
      .select(SELECT_ADMIN_GROUPS_QUERY_PARAMS)
      .pipe(takeUntil(this.unsubscribeService.subscription))
      .subscribe((adminGroupsQueryParams: IQueryParams) => {
        this.store.dispatch(
          LOAD_ADMIN_GROUPS_ACTION({ params: adminGroupsQueryParams })
        );
      });
  }

  // save(): void {
  //   this.httpClient
  //     .put(`${this.databaseUrl}.json`, this.groups)
  //     .subscribe((resp) => console.log(resp));
  // }

  // read(): void {
  //   this.httpClient.get(`${this.databaseUrl}`);
  // }
}
