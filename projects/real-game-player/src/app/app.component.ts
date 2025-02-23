import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Inject,
  Input,
  RendererFactory2,
} from '@angular/core';
import { loadScript, loadStyle } from '../helpers/url.helpers';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserStore } from '../../store/user.store';
import { environment } from '../environments/environment';
import { CareerStore } from '../../store/career.store';
import { TranslationLocalService } from '../services/translate.service';
import { SupportedLanguage } from '../shared/app.constants';

export const scriptIDs = {
  TACO_SCRIPT_ID: 'taco-js',
  GOOGLE_MAPS_ID: 'google-maps',
  TACO_STYLE_ID: 'taco-css-v2',
  TACO_STYLE_OLD_ID: 'taco-css',
  TACO_INDEX_STYLE_ID: 'taco-index-css',
  LOTTIE_PLAYER_ID: 'lottie-player-js',
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  providers: [
    HttpClient
  ]
})
export class AppComponent {

  userStore = inject(UserStore);
  careerStore = inject(CareerStore);

  @Input() set language(value: SupportedLanguage) {
    this.translateService.setLanguage(value);
  }

  constructor(
    rendererFactory: RendererFactory2,
    private translateService: TranslationLocalService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translateService.init(this.language || 'en-US');
    const renderer = rendererFactory.createRenderer(null, null);

    loadScript(
      `${environment.CDN_ABSOLUTE_URL}/design-system/latest/taco-components/bundled.js`,
      this.document,
      renderer,
      scriptIDs.TACO_SCRIPT_ID
    );

    loadScript(
      `${environment.CDN_ABSOLUTE_URL}cdnjs/lottie-player.js`,
      this.document,
      renderer,
      scriptIDs.LOTTIE_PLAYER_ID
    );

    loadStyle(
      `${environment.CDN_ABSOLUTE_URL}/design-system/latest/taco-tokens/css/design-tokens-v1.css`,
      this.document,
      renderer,
      scriptIDs.TACO_STYLE_OLD_ID
    );

    loadStyle(
      `${environment.CDN_ABSOLUTE_URL}/design-system/latest/taco-tokens/css/design-tokens-v2.css`,
      this.document,
      renderer,
      scriptIDs.TACO_STYLE_ID
    );
  }
}
