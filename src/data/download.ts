import type { LocaleKey } from "@kit/config/site";
import type { DownloadApp, DownloadContent } from "@kit/lib/download";
import { storeLinks, webAppLinks } from "@site/config/stores";

// Copy for the kit's Download page. Facts (iOS version, iPad, Boost) come from the App
// Store listing; keep them in step when the listing changes.
export const downloadApp: DownloadApp = {
  name: "Fluxo",
  applicationCategory: "EducationalApplication",
  links: {
    ios: storeLinks.appStore,
    android: storeLinks.googlePlay,
    web: webAppLinks.signUp,
  },
  iosMinVersion: "16.4",
};

export const downloadContent: Record<LocaleKey, DownloadContent> = {
  en: {
    metaTitle: "Download the Fluxo flashcard app for iPhone, Android and web",
    metaDescription:
      "Get Fluxo free on the App Store and Google Play, or open it in your browser. Turn notes into quizzes and flashcards and remember them with spaced repetition.",
    breadcrumb: "Download",
    titleHtml: `Download <span class="hero-keyword">Fluxo</span> for iPhone, Android and web`,
    lead: "Turn notes into quizzes and flashcards and remember them with spaced repetition. Free on every device, with one account everywhere.",
    yourDevice: "Your device",
    platforms: {
      ios: {
        name: "iPhone & iPad",
        desc: "For iPhone and iPad with iOS 16.4 or later.",
        cta: "Download on the App Store",
      },
      android: {
        name: "Android",
        desc: "Free on Google Play.",
        cta: "Get it on Google Play",
      },
      web: {
        name: "Web",
        desc: "Nothing to install. Open Fluxo in your browser.",
        cta: "Open in browser",
      },
    },
    faqTitle: "Questions about downloading Fluxo",
    faq: [
      {
        question: "Is Fluxo free?",
        answer:
          "Yes. Fluxo is free to download and use. Fluxo Boost is an optional monthly or yearly subscription that unlocks unlimited Spaces and notes, more files in your notes and more Fluxo AI.",
      },
      {
        question: "Is there a Fluxo app for iPad?",
        answer: "Yes. The App Store version runs on iPhone and iPad with iOS 16.4 or later.",
      },
      {
        question: "Can I use Fluxo on my computer?",
        answer: "Yes. Open app.fluxo.today in your browser and sign in. There is nothing to install.",
      },
      {
        question: "Do my notes sync between my phone and the web?",
        answer: "Yes. Sign in with the same account on each device and your notes sync across them.",
      },
    ],
  },
  uk: {
    metaTitle: "Завантажити Fluxo: застосунок для флеш-карток на iPhone, Android і у вебі",
    metaDescription:
      "Встанови Fluxo безкоштовно з App Store чи Google Play або відкрий у браузері. Перетворюй нотатки на тести й флеш-картки та запам'ятовуй їх з інтервальним повторенням.",
    breadcrumb: "Завантажити",
    titleHtml: `Завантажити <span class="hero-keyword">Fluxo</span> для iPhone, Android і вебу`,
    lead: "Перетворюй нотатки на тести й флеш-картки та запам'ятовуй їх з інтервальним повторенням. Безкоштовно на кожному пристрої, один акаунт усюди.",
    yourDevice: "Твій пристрій",
    platforms: {
      ios: {
        name: "iPhone і iPad",
        desc: "Для iPhone і iPad з iOS 16.4 або новішою.",
        cta: "Завантажити з App Store",
      },
      android: {
        name: "Android",
        desc: "Безкоштовно в Google Play.",
        cta: "Завантажити з Google Play",
      },
      web: {
        name: "Веб",
        desc: "Нічого не треба встановлювати. Відкрий Fluxo у браузері.",
        cta: "Відкрити в браузері",
      },
    },
    faqTitle: "Питання про завантаження Fluxo",
    faq: [
      {
        question: "Fluxo безкоштовний?",
        answer:
          "Так. Fluxo можна безкоштовно завантажити й користуватися ним. Fluxo Boost — це підписка на місяць або рік за бажанням: необмежені Простори й нотатки, більше файлів у нотатках і більше Fluxo AI.",
      },
      {
        question: "Чи є Fluxo для iPad?",
        answer: "Так. Версія з App Store працює на iPhone і iPad з iOS 16.4 або новішою.",
      },
      {
        question: "Чи можна користуватися Fluxo на комп'ютері?",
        answer: "Так. Відкрий app.fluxo.today у браузері й увійди. Нічого не треба встановлювати.",
      },
      {
        question: "Чи синхронізуються нотатки між телефоном і вебом?",
        answer: "Так. Увійди з тим самим акаунтом на кожному пристрої, і нотатки синхронізуються між ними.",
      },
    ],
  },
  es: {
    metaTitle: "Descarga la app de flashcards Fluxo para iPhone, Android y web",
    metaDescription:
      "Consigue Fluxo gratis en App Store y Google Play, o ábrelo en tu navegador. Convierte tus apuntes en tests y flashcards y recuérdalos con repetición espaciada.",
    breadcrumb: "Descargar",
    titleHtml: `Descarga <span class="hero-keyword">Fluxo</span> para iPhone, Android y web`,
    lead: "Convierte tus apuntes en tests y flashcards y recuérdalos con repetición espaciada. Gratis en todos tus dispositivos, con una sola cuenta.",
    yourDevice: "Tu dispositivo",
    platforms: {
      ios: {
        name: "iPhone y iPad",
        desc: "Para iPhone y iPad con iOS 16.4 o posterior.",
        cta: "Descargar en App Store",
      },
      android: {
        name: "Android",
        desc: "Gratis en Google Play.",
        cta: "Disponible en Google Play",
      },
      web: {
        name: "Web",
        desc: "Sin instalar nada. Abre Fluxo en tu navegador.",
        cta: "Abrir en el navegador",
      },
    },
    faqTitle: "Preguntas sobre la descarga de Fluxo",
    faq: [
      {
        question: "¿Fluxo es gratis?",
        answer:
          "Sí. Fluxo se descarga y se usa gratis. Fluxo Boost es una suscripción mensual o anual opcional que desbloquea Espacios y apuntes ilimitados, más archivos en tus apuntes y más Fluxo AI.",
      },
      {
        question: "¿Hay una app de Fluxo para iPad?",
        answer: "Sí. La versión de App Store funciona en iPhone y iPad con iOS 16.4 o posterior.",
      },
      {
        question: "¿Puedo usar Fluxo en el ordenador?",
        answer: "Sí. Abre app.fluxo.today en tu navegador e inicia sesión. No hay nada que instalar.",
      },
      {
        question: "¿Mis apuntes se sincronizan entre el móvil y la web?",
        answer: "Sí. Inicia sesión con la misma cuenta en cada dispositivo y tus apuntes se sincronizan entre ellos.",
      },
    ],
  },
  de: {
    metaTitle: "Fluxo Karteikarten-App für iPhone, Android und Web herunterladen",
    metaDescription:
      "Hol dir Fluxo kostenlos im App Store und bei Google Play oder öffne es im Browser. Mach aus Notizen Quizze und Karteikarten und merk sie dir mit Spaced Repetition.",
    breadcrumb: "Download",
    titleHtml: `<span class="hero-keyword">Fluxo</span> für iPhone, Android und Web herunterladen`,
    lead: "Mach aus Notizen Quizze und Karteikarten und merk sie dir mit Spaced Repetition. Kostenlos auf jedem Gerät, mit einem Konto überall.",
    yourDevice: "Dein Gerät",
    platforms: {
      ios: {
        name: "iPhone & iPad",
        desc: "Für iPhone und iPad ab iOS 16.4.",
        cta: "Im App Store laden",
      },
      android: {
        name: "Android",
        desc: "Kostenlos bei Google Play.",
        cta: "Bei Google Play holen",
      },
      web: {
        name: "Web",
        desc: "Keine Installation nötig. Öffne Fluxo im Browser.",
        cta: "Im Browser öffnen",
      },
    },
    faqTitle: "Fragen zum Download von Fluxo",
    faq: [
      {
        question: "Ist Fluxo kostenlos?",
        answer:
          "Ja. Fluxo kannst du kostenlos laden und nutzen. Fluxo Boost ist ein optionales Monats- oder Jahresabo mit unbegrenzten Spaces und Notizen, mehr Dateien in Notizen und mehr Fluxo AI.",
      },
      {
        question: "Gibt es Fluxo für das iPad?",
        answer: "Ja. Die Version aus dem App Store läuft auf iPhone und iPad mit iOS 16.4 oder neuer.",
      },
      {
        question: "Kann ich Fluxo am Computer nutzen?",
        answer: "Ja. Öffne app.fluxo.today im Browser und melde dich an. Du musst nichts installieren.",
      },
      {
        question: "Synchronisieren sich meine Notizen zwischen Handy und Web?",
        answer: "Ja. Melde dich auf jedem Gerät mit demselben Konto an, dann synchronisieren sich deine Notizen.",
      },
    ],
  },
};
