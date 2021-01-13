export interface IAppsEnvironment {
  name: string;
  description: string;
  icon: string;
  link: string;
  databaseUrl: string;
}

export interface IEnvironment {
  production: boolean;
  authApiUrl: string;
  databaseApiKey: string;
  locationApiUrl: string;
  mapsApiKey: string;
  telOptions: {
    initialCountry: string;
    prefix: string;
    preferredCountries: string[];
  };
  apps: IAppsEnvironment[];
}
