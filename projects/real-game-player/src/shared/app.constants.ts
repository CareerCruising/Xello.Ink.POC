export type SupportedLanguage = 'en-US' | 'es-US' | 'fr-CA' | 'en-CA' | 'en-GB';

export interface AppConstants {
  CULTURE_STORAGE_KEY: string;
  DEFAULT_CULTURE: SupportedLanguage;
  INSTITUTION_ID_KEY: string;
  SUPPORTED_LANGUAGES: SupportedLanguage[];
  TOKEN_KEY: string;
  DEFAULT_LOAN_INTEREST_RATE: number;
}

export const APP_CONSTANTS: AppConstants = {
  CULTURE_STORAGE_KEY: 'culture',
  INSTITUTION_ID_KEY: 'institutionId',
  DEFAULT_CULTURE: 'en-US',
  SUPPORTED_LANGUAGES: ['en-US', 'es-US', 'fr-CA', 'en-CA', 'en-GB'],
  TOKEN_KEY: 'token',
  DEFAULT_LOAN_INTEREST_RATE: 6.53,
};
