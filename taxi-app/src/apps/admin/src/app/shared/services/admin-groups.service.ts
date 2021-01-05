import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/libs/@shared/services/http-client.service';
import { environment } from 'src/apps/admin/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { GenericService } from 'src/libs/@shared/services/generic.service';
import { Observable } from 'rxjs';
import { IAdminGroup } from '../models/admin-group.model';
import { IServerAdminResponse } from '../models/server-admin-response';
import { map } from 'rxjs/operators';
import {
  IPaginateParams,
  IQueryParams,
  ISortParams,
} from 'src/libs/@shared/models/query-params.model';

@Injectable({
  providedIn: 'root',
})
export class AdminGroupsService extends HttpClientService {
  databaseUrl: string;

  constructor(
    http: HttpClient,
    datePipe: DatePipe,
    genericService: GenericService
  ) {
    super(http, datePipe, genericService);
    this.databaseUrl = environment.databaseApiUrl;
  }

  loadAdminGroups(queryParams: IQueryParams): Observable<IServerAdminResponse> {
    return this.myGet<IAdminGroup[]>({
      url: `${this.databaseUrl}.json`,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    }).pipe(
      map((adminGroups: IAdminGroup[]) => {
        if (!adminGroups) return { adminGroups: [], totalLength: 0 };

        const sortedAdminGroups = this.doSort(adminGroups, queryParams.sort);

        const totalLength = sortedAdminGroups.length;

        const paginatedAdminGroups = this.doPaginate(
          sortedAdminGroups,
          queryParams.paginate
        );

        return {
          adminGroups: paginatedAdminGroups,
          totalLength,
        };
      })
    );
  }

  loadAdminGroupById(adminGroupId: string): Observable<IAdminGroup> {
    return this.myGet<IAdminGroup>({
      url: `${this.databaseUrl}/${adminGroupId}.json`,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    });
  }

  updateAdminGroup(adminGroup: IAdminGroup): Observable<IAdminGroup> {
    return this.myPatch<IAdminGroup>({
      url: `${this.databaseUrl}/${adminGroup.id}.json`,
      payload: adminGroup,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    });
  }

  doSort(data: IAdminGroup[], queryParams: ISortParams): IAdminGroup[] {
    if (!queryParams.field) return data;
    if (queryParams.field && queryParams.direction === 'asc') {
      return data.sort((a: IAdminGroup, b: IAdminGroup) => {
        if (a[queryParams.field] > b[queryParams.field]) return 1;
        if (a[queryParams.field] < b[queryParams.field]) return -1;
        return 0;
      });
    } else
      return data.sort((a: IAdminGroup, b: IAdminGroup) => {
        if (a[queryParams.field] > b[queryParams.field]) return -1;
        if (a[queryParams.field] < b[queryParams.field]) return 1;
        return 0;
      });
  }

  doPaginate(data: IAdminGroup[], queryParams: IPaginateParams) {
    if (!data.length) return [];

    const paginatedData = data.slice(
      queryParams.pageIndex * queryParams.pageSize,
      queryParams.pageSize * (queryParams.pageIndex + 1)
    );

    if (paginatedData.length) {
      return paginatedData;
    } else {
      return this.doPaginate(data, {
        pageIndex: queryParams.pageIndex - 1,
        pageSize: queryParams.pageSize,
      });
    }
  }
}
