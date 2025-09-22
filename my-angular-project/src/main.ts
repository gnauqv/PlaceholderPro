import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

// Boots your app
bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
