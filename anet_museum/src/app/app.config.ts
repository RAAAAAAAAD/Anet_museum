import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
providers: [
provideRouter(
routes,
withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
withViewTransitions() // smooth route transitions in modern browsers
),
provideAnimations(),
]
};