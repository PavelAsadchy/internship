import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GROUPS_DISPLAYED_COLUMNS } from '../../../../shared/consts/admin-groups.const';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';
import { REFRESH_ADMIN_GROUPS_QUERY_PARAMS_ACTION } from '../../../../shared/stores/admin-store/admin.actions';
import {
  SELECT_ADMIN_GROUPS,
  SELECT_ADMIN_GROUPS_LENGTH,
  SELECT_ADMIN_LOADING,
} from '../../../../shared/stores/admin-store/admin.selector';
import {
  DEFAULT_ADMIN_GROUPS_SORT_PARAMS,
  IAdminState,
} from '../../../../shared/stores/admin-store/admin.state';

@Component({
  selector: 'app-admin-groups-table',
  templateUrl: './admin-groups-table.component.html',
  styleUrls: ['./admin-groups-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminGroupsTableComponent implements OnInit {
  displayedColumns: string[] = GROUPS_DISPLAYED_COLUMNS;
  dataSource$: Observable<IAdminGroup[]>;
  isLoading$: Observable<boolean>;
  totalLength$: Observable<number>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<IAdminState>) {}

  ngOnInit(): void {
    this.dataSource$ = this.store.select(SELECT_ADMIN_GROUPS);
    this.totalLength$ = this.store.select(SELECT_ADMIN_GROUPS_LENGTH);
    this.isLoading$ = this.store.select(SELECT_ADMIN_LOADING);
  }

  onQueryParamsChange(): void {
    this.store.dispatch(
      REFRESH_ADMIN_GROUPS_QUERY_PARAMS_ACTION({
        params: {
          sort: {
            field: this.sort.active || DEFAULT_ADMIN_GROUPS_SORT_PARAMS.field,
            direction:
              this.sort.direction || DEFAULT_ADMIN_GROUPS_SORT_PARAMS.direction,
          },
          paginate: {
            pageIndex: this.paginator.pageIndex,
            pageSize: this.paginator.pageSize,
          },
        },
      })
    );
  }
}
