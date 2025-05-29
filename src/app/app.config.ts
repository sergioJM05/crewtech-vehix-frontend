import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

/**
 * @summary HttpLoaderFactory is a arrow function that creates an instance of TranslateHttpLoader
 * @author Julca Minaya Sergio Gino U202318274
 */
export const HttpLoaderFactory=(http: HttpClient) => new TranslateHttpLoader(http)

/**
 * @summary appConfig is an object that contains the configuration for the application
 * @author Julca Minaya Sergio Gino U202318274
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))
  ]

};
