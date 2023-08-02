import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment'; // Import the environment configuration

if (environment.production) {
  enableProdMode(); // Enable production mode if the environment is set to production
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
