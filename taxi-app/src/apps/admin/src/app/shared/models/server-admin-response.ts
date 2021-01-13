import { IAdminGroup } from './admin-group.model';

export interface IServerAdminResponse {
  adminGroups: IAdminGroup[];
  totalLength: number;
}
