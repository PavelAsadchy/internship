export interface IUserAuthorized {
  id: string;
  username: string;
  email: string;
  roles: string[];
  jwt: string;
  refreshToken: string;
}
