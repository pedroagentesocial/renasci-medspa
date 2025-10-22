export const locales = ["es", "en"] as const;
export const defaultLocale = "es";

export type Locale = typeof locales[number];

export function t(locale: string, key: string, dict: Record<string, any>) {
  return (dict[locale] && dict[locale][key]) || key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && locales.includes(lang as Locale)) {
    return lang as Locale;
  }
  return defaultLocale;
}