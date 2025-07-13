export const locales = ['en', 'vi'] as const;
export type AppLocale = (typeof locales)[number]; //  'vi' | 'en'
export const defaultLocale: AppLocale = 'en';