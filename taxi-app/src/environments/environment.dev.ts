import { IEnvironment } from './ienvironment.model';

export const environment: IEnvironment = {
  production: false,
  authApiUrl: 'http://localhost:8080',
  databaseApiUrl: 'https://taxi-app-294611.firebaseio.com/booking-list',
  databaseApiKey: 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8',
  locationApiUrl: 'https://ipapi.co/json/',
  mapsApiKey: 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8',
  telOptions: {
    initialCountry: 'us',
    prefix: '',
    preferredCountries: ['us', 'ca'],
  },
};
