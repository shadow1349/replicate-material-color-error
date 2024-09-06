import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { StorageOption, withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';
import { appRoutes } from './app.routes';
import { TestAppState } from './app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(
      [TestAppState],
      withNgxsStoragePlugin({
        keys: '*',
        storage: StorageOption.SessionStorage,
        namespace: 'TEST APP',
      }),
      withNgxsReduxDevtoolsPlugin({ disabled: false })
    ),
  ],
};
