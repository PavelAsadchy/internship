import { IQueryParams } from 'src/apps/booking/src/app/shared/models/query-params.model';

export interface IHeaders {
  name: string;
  value: string;
}

export interface IMyRequestParams {
  url: string;
  search?: IQueryParams;
  headers?: IHeaders;
  payload?: any;
}
