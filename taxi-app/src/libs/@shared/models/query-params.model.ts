export interface IFilterParams {
  bookingId: string;
  price: number;
  search: string;
  statuses: string[];
  dateFrom: string;
  channels: string[];
  dateTo: string;
  vehicle: string[];
}

export interface ISortParams {
  field: string;
  direction: string;
}

export interface IPaginateParams {
  pageIndex: number;
  pageSize: number;
}

export interface IQueryParams {
  filter?: IFilterParams;
  sort?: ISortParams;
  paginate?: IPaginateParams;
}
