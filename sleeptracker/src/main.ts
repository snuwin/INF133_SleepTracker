import { RouteReuseStrategy, 
        provideRouter, 
        withPreloading, 
        PreloadAllModules 
      } from '@angular/router';

import { IonicRouteStrategy, 
        provideIonicAngular 
      } from '@ionic/angular/standalone';

      // new imports
import { importProvidersFrom } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';
import { BrowserModule } from '@angular/platform-browser'; 
import { bootstrapApplication } from '@angular/platform-browser';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    importProvidersFrom(
      BrowserModule,
      IonicStorageModule.forRoot()
    ),
  ],
});
