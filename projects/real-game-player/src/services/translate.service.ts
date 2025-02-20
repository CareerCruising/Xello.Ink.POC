import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { APP_CONSTANTS, SupportedLanguage } from '../shared/app.constants';
import { en } from '../assets/translations/locale-rgs_en-US';
import { es } from '../assets/translations/locale-rgs_es-US';
import { fr } from '../assets/translations/locale-rgs_fr-CA';
import { en as enCA } from '../assets/translations/locale-rgs_en-CA';
import { en as enGB } from '../assets/translations/locale-rgs_en-GB';

@Injectable({
  providedIn: 'root',
})
export class TranslationLocalService {
  private availableLangs: { [key in SupportedLanguage]: any } = {
    'en-US': en,
    'es-US': es,
    'en-CA': enCA,
    'fr-CA': fr,
    'en-GB': enGB,
  };

  constructor(private translateService: TranslateService) {}

  get language(): string {
    return (
      localStorage.getItem(APP_CONSTANTS.CULTURE_STORAGE_KEY) ||
      APP_CONSTANTS.DEFAULT_CULTURE
    );
  }

  setLanguage(hostAppLanguage?: string): void {
    const language = hostAppLanguage;

    if (language && language !== this.translateService.currentLang) {
      this.translateService
        .use(language)
        .pipe(take(1))
        .subscribe({ error: console.error });
    }
  }

  init(culture: string): void {
    this.translateService.addLangs(APP_CONSTANTS.SUPPORTED_LANGUAGES);

    APP_CONSTANTS.SUPPORTED_LANGUAGES.forEach((lang) => {
      this.translateService.setTranslation(
        lang,
        this.availableLangs[lang],
        true,
      );
    });

    this.setLanguage(culture);
  }
}
