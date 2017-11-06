// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDVNtYTJLlZEvVBhvRVxBs9qYV_206fe54',
    authDomain: 't-challan.firebaseapp.com',
    databaseURL: 'https://t-challan.firebaseio.com',
    projectId: 't-challan',
    storageBucket: 't-challan.appspot.com',
    messagingSenderId: '943717171374'
  },
  openALPR: {
    publishableKey: 'pk_ec78ca9bc2fe1ac7e588b20b',
    secretKey: 'sk_d5d208163d3a1bdde0d5cf81'
  }
};
