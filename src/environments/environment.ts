// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // IRONHUB API URL
  API_BASE_URL: 'http://localhost:3000/api/v1',

  // Ironhack campuses
  CAMPUSES: ['Barcelona','Madrid','Mexico','Miami','Paris'],

  // Ironhack programs
  PROGRAMS: ['Web Development Bootcamp','UX/UI Design Bootcamp','Web Development Part-Time','UX/UI Design Part-Time'],

  // Ironhack default profile image URL
  DEFAULT_PROFILE_IMG_URL: 'http://learnonline.canberra.edu.au/theme/image.php/uc/core/1499280925/u/f1'

};
