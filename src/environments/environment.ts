// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firestore: {
    apiKey: 'AIzaSyBOY0-wxronEhBH8lMd2z8uCBZMQu_oly0',
    authDomain: 'cookbook-develop.firebaseapp.com',
    databaseURL: 'https://cookbook-develop.firebaseio.com',
    projectId: 'cookbook-develop',
    storageBucket: 'cookbook-develop.appspot.com',
    messagingSenderId: '467633736946',
    appId: '1:467633736946:web:b802bfea7fce41f7',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
