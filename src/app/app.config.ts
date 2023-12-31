import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';//NO OLVIDAR ESTE IMPORT

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),//Para Navefar en la SPA
    provideHttpClient() //NO OLVIDAR ESTE IMPORT
  ]
};