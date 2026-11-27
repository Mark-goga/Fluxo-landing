import type { LocaleKey } from "@kit/config/site";
import { localeMeta, type LanguageOption } from "./locales";

export type DownloadPlatform = "ios" | "android" | "web";

export type DownloadPlatformCopy = {
  name: string;
  desc: string;
  cta: string;
};

export type DownloadContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titleHtml: string;
  lead: string;
  /** Badge on the card that matches the visitor's device. */
  yourDevice: string;
  platforms: Record<DownloadPlatform, DownloadPlatformCopy>;
};

const downloadLocaleOrder: LocaleKey[] = ["en", "uk", "es", "de"];

export const downloadPath = (locale: LocaleKey) => (locale === "en" ? "/download/" : `/${locale}/download/`);

/** Language switcher for the Download page: each option stays on Download, in that language. */
export const downloadLanguageNav = (): LanguageOption[] =>
  downloadLocaleOrder.map((locale) => ({
    locale,
    code: localeMeta[locale].code,
    name: localeMeta[locale].name,
    href: downloadPath(locale),
  }));

export const downloadContent: Record<LocaleKey, DownloadContent> = {
  en: {
    metaTitle: "Download Fluxo for iPhone, Android and web",
    metaDescription:
      "Get Fluxo on the App Store or Google Play, or open it in your browser. Sign in with the same account on every device.",
    breadcrumb: "Download",
    titleHtml: `Fluxo, wherever you <span class="hero-keyword">learn</span>`,
    lead: "Review on your phone, take notes at your computer. Sign in with the same account on every device.",
    yourDevice: "Your device",
    platforms: {
      ios: { name: "iPhone", desc: "Daily reviews and reminders in your pocket.", cta: "Download on the App Store" },
      android: { name: "Android", desc: "Daily reviews and reminders in your pocket.", cta: "Get it on Google Play" },
      web: { name: "Web", desc: "Nothing to install. Open Fluxo in your browser.", cta: "Open in browser" },
    },
  },
  uk: {
    metaTitle: "Завантажити Fluxo для iPhone, Android і вебу",
    metaDescription:
      "Встанови Fluxo з App Store чи Google Play або відкрий у браузері. Входь з одним акаунтом на кожному пристрої.",
    breadcrumb: "Завантажити",
    titleHtml: `Fluxo там, де ти <span class="hero-keyword">вчишся</span>`,
    lead: "Повторюй на телефоні, пиши нотатки за комп'ютером. Входь з одним акаунтом на кожному пристрої.",
    yourDevice: "Твій пристрій",
    platforms: {
      ios: { name: "iPhone", desc: "Щоденні повторення й нагадування завжди під рукою.", cta: "Завантажити з App Store" },
      android: { name: "Android", desc: "Щоденні повторення й нагадування завжди під рукою.", cta: "Завантажити з Google Play" },
      web: { name: "Веб", desc: "Нічого не треба встановлювати. Відкрий Fluxo у браузері.", cta: "Відкрити в браузері" },
    },
  },
  es: {
    metaTitle: "Descarga Fluxo para iPhone, Android y web",
    metaDescription:
      "Consigue Fluxo en App Store o Google Play, o ábrelo en tu navegador. Inicia sesión con la misma cuenta en cada dispositivo.",
    breadcrumb: "Descargar",
    titleHtml: `Fluxo, donde sea que <span class="hero-keyword">aprendas</span>`,
    lead: "Repasa en el móvil, toma notas en el ordenador. Inicia sesión con la misma cuenta en cada dispositivo.",
    yourDevice: "Tu dispositivo",
    platforms: {
      ios: { name: "iPhone", desc: "Repasos diarios y recordatorios siempre contigo.", cta: "Descargar en App Store" },
      android: { name: "Android", desc: "Repasos diarios y recordatorios siempre contigo.", cta: "Disponible en Google Play" },
      web: { name: "Web", desc: "Sin instalar nada. Abre Fluxo en tu navegador.", cta: "Abrir en el navegador" },
    },
  },
  de: {
    metaTitle: "Fluxo für iPhone, Android und Web herunterladen",
    metaDescription:
      "Hol dir Fluxo im App Store oder bei Google Play, oder öffne es im Browser. Melde dich auf jedem Gerät mit demselben Konto an.",
    breadcrumb: "Download",
    titleHtml: `Fluxo, wo immer du <span class="hero-keyword">lernst</span>`,
    lead: "Wiederhole am Handy, schreib Notizen am Computer. Melde dich auf jedem Gerät mit demselben Konto an.",
    yourDevice: "Dein Gerät",
    platforms: {
      ios: { name: "iPhone", desc: "Tägliche Wiederholungen und Erinnerungen immer dabei.", cta: "Im App Store laden" },
      android: { name: "Android", desc: "Tägliche Wiederholungen und Erinnerungen immer dabei.", cta: "Bei Google Play holen" },
      web: { name: "Web", desc: "Keine Installation nötig. Öffne Fluxo im Browser.", cta: "Im Browser öffnen" },
    },
  },
};
