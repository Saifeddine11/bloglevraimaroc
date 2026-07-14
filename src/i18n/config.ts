export const locales = ['fr', 'en', 'es', 'nl'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string; ogLocale: string }> = {
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr', ogLocale: 'fr_MA' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
  es: { label: 'Español', short: 'ES', htmlLang: 'es', ogLocale: 'es_ES' },
  nl: { label: 'Nederlands', short: 'NL', htmlLang: 'nl', ogLocale: 'nl_NL' },
};

export const nonDefaultLocales = locales.filter((locale) => locale !== defaultLocale);

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
}
