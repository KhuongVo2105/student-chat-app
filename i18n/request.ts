import { getRequestConfig, RequestConfig } from "next-intl/server";
import { AppLocale, locales } from "../src/config";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  const fallbackLocale: AppLocale = "en";

  const typedLocale = locales.includes(locale as AppLocale)
    ? (locale as AppLocale)
    : fallbackLocale;

  return {
    locale: typedLocale,
    messages: (await import(`../src/locales/${typedLocale}.json`)).default,
  };
});
