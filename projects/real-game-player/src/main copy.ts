import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { registerLocaleData } from '@angular/common';
import localeFrCa from '@angular/common/locales/fr-CA';
import localeFrCaExtra from '@angular/common/locales/extra/fr-CA';
import localeEsUs from '@angular/common/locales/es-US';
import localeEsUsExtra from '@angular/common/locales/extra/es-US';

bootstrapApplication(AppComponent, appConfig)
  .then((moduleRef) => {
    registerLocaleData(localeFrCa, localeFrCaExtra);
    registerLocaleData(localeEsUs, localeEsUsExtra);
    const injector = moduleRef.injector;
    const realGameElement = createCustomElement(AppComponent, {
      injector: injector,
    });
    if (!customElements.get('real-game-student')) {
      customElements.define('real-game-student', realGameElement);
    }
  })
  .catch((err) => console.error(err));
