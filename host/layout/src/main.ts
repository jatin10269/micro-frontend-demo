import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('/host/layout/assets/mainfest/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));


// fetch('/assets/mainfest/module-federation.manifest.json')
//   .then((res) => res.json())
//   .then((definitions) => setRemoteDefinitions(definitions))
//   .then(() => import('./bootstrap').catch((err) => console.error(err)));
