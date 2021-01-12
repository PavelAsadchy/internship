import { IEnvironment } from './ienvironment.model';

export const environment: IEnvironment = {
  production: false,
  authApiUrl: 'http://localhost:8080',
  databaseApiKey: 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8',
  locationApiUrl: 'https://ipapi.co/json/',
  mapsApiKey: 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8',
  telOptions: {
    initialCountry: 'us',
    prefix: '',
    preferredCountries: ['us', 'ca'],
  },
  apps: [
    {
      name: 'Admin',
      description: 'Edit user privileges',
      icon: 'settings',
      link: 'http://localhost:4222',
      databaseUrl: 'https://taxi-app-294611.firebaseio.com/groups',
    },
    {
      name: 'Booking',
      description: 'Booking App',
      icon: 'local_phone',
      link: 'http://localhost:4200',
      databaseUrl: 'https://taxi-app-294611.firebaseio.com/booking-list',
    },
  ],
};
