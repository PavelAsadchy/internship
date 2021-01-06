export interface IEnvironmentBooking {
  production: boolean;
  authApiUrl: string;
  databaseApiUrl: string;
  databaseApiKey: string;
  locationApiUrl: string;
  mapsApiKey: string;
  telOptions: {
    initialCountry: string;
    prefix: string;
    preferredCountries: string[];
  };
}
