// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnvironment } from './ienvironment.model';

export const environment: IEnvironment = {
  production: false,
  authApiUrl: 'http://localhost:8080',
  databaseApiKey: 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8',
  locationApiUrl: 'https://ipapi.co/json/',
  mapsApiKey: 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8',
  telOptions: {
    initialCountry: 'by',
    prefix: '',
    preferredCountries: ['by', 'ru'],
  },
  apps: [
    {
      name: 'Admin',
      description: 'Edit user privileges',
      icon: 'settings',
      link: 'http://localhost:4222/admin',
      databaseUrl: 'https://taxi-app-294611.firebaseio.com/groups',
    },
    {
      name: 'Booking',
      description: 'Booking App',
      icon: 'local_phone',
      link: 'http://localhost:4200/board',
      databaseUrl: 'https://taxi-app-294611.firebaseio.com/booking-list',
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
