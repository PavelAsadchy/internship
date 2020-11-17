export interface ILoggedInUser {
  id?: string;
  username: string;
  jwt: string;
  refreshToken: string;
}
