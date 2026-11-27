import type { LocaleKey } from "@kit/config/site";
import type { DownloadApp, DownloadContent } from "@kit/lib/download";
import { storeLinks, webAppLinks } from "@site/config/stores";

// Copy for the kit's Download page. Facts (iOS version, iPad, languages, Boost) come
// from the App Store listing; keep them in step when the listing changes.
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
    lead: "Fluxo turns your notes into a quiz, flashcards or a short summary, then brings each note back with spaced repetition just before you would forget it. Free on every device, with one account everywhere.",
    yourDevice: "Your device",
    platforms: {
      ios: {
        name: "iPhone & iPad",
        desc: "Daily reviews and reminders in your pocket.",
        cta: "Download on the App Store",
        heading: "Fluxo for iPhone and iPad",
        body: "Get the Fluxo app on the App Store. Write or dictate notes, import a PDF or a photo, and review them as a quiz or flashcards. Fluxo reminds you on your study days, and a tap on the reminder takes you straight into the review.",
        facts: ["Requires iOS 16.4 or later", "iPhone and iPad", "Free, with optional Fluxo Boost"],
      },
      android: {
        name: "Android",
        desc: "Daily reviews and reminders in your pocket.",
        cta: "Get it on Google Play",
        heading: "Fluxo for Android",
        body: "Get the Fluxo app on Google Play. You get the same notes, quizzes, flashcards and spaced repetition reviews as on iPhone, with reminders on the days you choose to study.",
        facts: ["Free on Google Play", "Optional Fluxo Boost subscription"],
      },
      web: {
        name: "Web",
        desc: "Nothing to install. Open Fluxo in your browser.",
        cta: "Open in browser",
        heading: "Fluxo on the web",
        body: "Open Fluxo at app.fluxo.today and sign in with the same account you use on your phone. Your notes sync across your devices, so you can write long notes at your computer and review them on the go.",
        facts: ["Works in your browser", "Nothing to install", "Same account as on your phone"],
      },
    },
    featuresTitle: "What you get on every device",
    features: [
      {
        title: "Notes for everything you learn",
        desc: "Write lecture and book notes, dictate a voice note, or import a PDF, Word document or photo as a note you can edit.",
      },
      {
        title: "AI quizzes and flashcards",
        desc: "Fluxo writes quiz questions and flashcards from your own note, or a short summary when you only need the main ideas.",
      },
      {
        title: "Spaced repetition",
        desc: "Each note comes back just before it starts to fade. The better you know something, the less often you see it.",
      },
      {
        title: "Reminders on your study days",
        desc: "Pick your days and a time, and Fluxo reminds you only when there is something to review.",
      },
      {
        title: "Spaces and search",
        desc: "Give every subject its own Space, sort notes into folders and find anything with full-text search.",
      },
      {
        title: "Streaks and statistics",
        desc: "A cat companion cheers on every session, and statistics show how much you have reviewed and learned.",
      },
    ],
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
      {
        question: "Which languages does the Fluxo app support?",
        answer: "The app is available in English and Ukrainian.",
      },
      {
        question: "Where do I download Fluxo for Android?",
        answer: "Download Fluxo from Google Play. Installing it from there keeps the app updated automatically.",
      },
    ],
  },
  uk: {
    metaTitle: "Завантажити Fluxo: застосунок для флеш-карток на iPhone, Android і у вебі",
    metaDescription:
      "Встанови Fluxo безкоштовно з App Store чи Google Play або відкрий у браузері. Перетворюй нотатки на тести й флеш-картки та запам'ятовуй їх з інтервальним повторенням.",
    breadcrumb: "Завантажити",
    titleHtml: `Завантажити <span class="hero-keyword">Fluxo</span> для iPhone, Android і вебу`,
    lead: "Fluxo перетворює нотатки на тест, флеш-картки чи короткий конспект і повертає кожну нотатку з інтервальним повторенням саме тоді, коли вона почала б забуватися. Безкоштовно на кожному пристрої, один акаунт усюди.",
    yourDevice: "Твій пристрій",
    platforms: {
      ios: {
        name: "iPhone і iPad",
        desc: "Щоденні повторення й нагадування завжди під рукою.",
        cta: "Завантажити з App Store",
        heading: "Fluxo для iPhone і iPad",
        body: "Встанови Fluxo з App Store. Пиши або надиктовуй нотатки, імпортуй PDF чи фото й повторюй їх як тест або флеш-картки. Fluxo нагадує в дні навчання, а натискання на нагадування одразу відкриває повторення.",
        facts: ["Потрібна iOS 16.4 або новіша", "iPhone і iPad", "Безкоштовно, Fluxo Boost за бажанням"],
      },
      android: {
        name: "Android",
        desc: "Щоденні повторення й нагадування завжди під рукою.",
        cta: "Завантажити з Google Play",
        heading: "Fluxo для Android",
        body: "Встанови Fluxo з Google Play. Тут ті самі нотатки, тести, флеш-картки й інтервальні повторення, що й на iPhone, з нагадуваннями в дні, які ти обереш для навчання.",
        facts: ["Безкоштовно в Google Play", "Підписка Fluxo Boost за бажанням"],
      },
      web: {
        name: "Веб",
        desc: "Нічого не треба встановлювати. Відкрий Fluxo у браузері.",
        cta: "Відкрити в браузері",
        heading: "Fluxo у вебі",
        body: "Відкрий Fluxo на app.fluxo.today і увійди з тим самим акаунтом, що й на телефоні. Нотатки синхронізуються між пристроями, тож довгі конспекти зручно писати за комп'ютером, а повторювати в дорозі.",
        facts: ["Працює в браузері", "Нічого не треба встановлювати", "Той самий акаунт, що й на телефоні"],
      },
    },
    featuresTitle: "Що є на кожному пристрої",
    features: [
      {
        title: "Нотатки для всього, що ти вчиш",
        desc: "Пиши конспекти лекцій і книжок, надиктовуй голосові нотатки або імпортуй PDF, документ Word чи фото як нотатку, яку можна редагувати.",
      },
      {
        title: "ШІ-тести й флеш-картки",
        desc: "Fluxo складає питання й флеш-картки з твоєї нотатки або короткий конспект, коли потрібні лише головні думки.",
      },
      {
        title: "Інтервальне повторення",
        desc: "Кожна нотатка повертається саме перед тим, як почне забуватися. Що краще ти її знаєш, то рідше бачиш.",
      },
      {
        title: "Нагадування в дні навчання",
        desc: "Обери дні й час, і Fluxo нагадає лише тоді, коли є що повторити.",
      },
      {
        title: "Простори й пошук",
        desc: "Дай кожному предмету власний Простір, розклади нотатки по папках і знаходь що завгодно повнотекстовим пошуком.",
      },
      {
        title: "Серії й статистика",
        desc: "Котик-компаньйон підбадьорює на кожному занятті, а статистика показує, скільки вже повторено й вивчено.",
      },
    ],
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
      {
        question: "Якими мовами доступний застосунок Fluxo?",
        answer: "Застосунок доступний англійською та українською.",
      },
      {
        question: "Де завантажити Fluxo для Android?",
        answer: "Завантаж Fluxo з Google Play. Так застосунок оновлюватиметься автоматично.",
      },
    ],
  },
  es: {
    metaTitle: "Descarga la app de flashcards Fluxo para iPhone, Android y web",
    metaDescription:
      "Consigue Fluxo gratis en App Store y Google Play, o ábrelo en tu navegador. Convierte tus apuntes en tests y flashcards y recuérdalos con repetición espaciada.",
    breadcrumb: "Descargar",
    titleHtml: `Descarga <span class="hero-keyword">Fluxo</span> para iPhone, Android y web`,
    lead: "Fluxo convierte tus apuntes en un test, flashcards o un resumen breve, y te devuelve cada apunte con repetición espaciada justo antes de que lo olvides. Gratis en todos tus dispositivos, con una sola cuenta.",
    yourDevice: "Tu dispositivo",
    platforms: {
      ios: {
        name: "iPhone y iPad",
        desc: "Repasos diarios y recordatorios siempre contigo.",
        cta: "Descargar en App Store",
        heading: "Fluxo para iPhone y iPad",
        body: "Descarga la app de Fluxo en App Store. Escribe o dicta apuntes, importa un PDF o una foto y repásalos como test o flashcards. Fluxo te avisa en tus días de estudio, y al tocar el aviso entras directo al repaso.",
        facts: ["Requiere iOS 16.4 o posterior", "iPhone y iPad", "Gratis, con Fluxo Boost opcional"],
      },
      android: {
        name: "Android",
        desc: "Repasos diarios y recordatorios siempre contigo.",
        cta: "Disponible en Google Play",
        heading: "Fluxo para Android",
        body: "Descarga la app de Fluxo en Google Play. Tienes los mismos apuntes, tests, flashcards y repasos con repetición espaciada que en iPhone, con recordatorios los días que elijas para estudiar.",
        facts: ["Gratis en Google Play", "Suscripción Fluxo Boost opcional"],
      },
      web: {
        name: "Web",
        desc: "Sin instalar nada. Abre Fluxo en tu navegador.",
        cta: "Abrir en el navegador",
        heading: "Fluxo en la web",
        body: "Abre Fluxo en app.fluxo.today e inicia sesión con la misma cuenta que usas en el móvil. Tus apuntes se sincronizan entre dispositivos: escribe apuntes largos en el ordenador y repásalos donde estés.",
        facts: ["Funciona en el navegador", "Sin instalar nada", "La misma cuenta que en el móvil"],
      },
    },
    featuresTitle: "Lo que tienes en cada dispositivo",
    features: [
      {
        title: "Apuntes para todo lo que aprendes",
        desc: "Escribe apuntes de clases y libros, dicta una nota de voz o importa un PDF, un documento de Word o una foto como apunte editable.",
      },
      {
        title: "Tests y flashcards con IA",
        desc: "Fluxo escribe preguntas y flashcards a partir de tu propio apunte, o un resumen breve cuando solo necesitas las ideas clave.",
      },
      {
        title: "Repetición espaciada",
        desc: "Cada apunte vuelve justo antes de empezar a olvidarse. Cuanto mejor lo sabes, menos veces lo ves.",
      },
      {
        title: "Recordatorios en tus días de estudio",
        desc: "Elige tus días y una hora, y Fluxo te avisa solo cuando hay algo que repasar.",
      },
      {
        title: "Espacios y búsqueda",
        desc: "Dale a cada asignatura su propio Espacio, ordena los apuntes en carpetas y encuentra cualquier cosa con la búsqueda de texto completo.",
      },
      {
        title: "Rachas y estadísticas",
        desc: "Un gato compañero te anima en cada sesión, y las estadísticas muestran cuánto has repasado y aprendido.",
      },
    ],
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
      {
        question: "¿En qué idiomas está la app de Fluxo?",
        answer: "La app está disponible en inglés y ucraniano.",
      },
      {
        question: "¿Dónde descargo Fluxo para Android?",
        answer: "Descarga Fluxo desde Google Play. Así la app se actualiza automáticamente.",
      },
    ],
  },
  de: {
    metaTitle: "Fluxo Karteikarten-App für iPhone, Android und Web herunterladen",
    metaDescription:
      "Hol dir Fluxo kostenlos im App Store und bei Google Play oder öffne es im Browser. Mach aus Notizen Quizze und Karteikarten und merk sie dir mit Spaced Repetition.",
    breadcrumb: "Download",
    titleHtml: `<span class="hero-keyword">Fluxo</span> für iPhone, Android und Web herunterladen`,
    lead: "Fluxo macht aus deinen Notizen ein Quiz, Karteikarten oder eine kurze Zusammenfassung und bringt jede Notiz mit Spaced Repetition zurück, kurz bevor du sie vergessen würdest. Kostenlos auf jedem Gerät, mit einem Konto überall.",
    yourDevice: "Dein Gerät",
    platforms: {
      ios: {
        name: "iPhone & iPad",
        desc: "Tägliche Wiederholungen und Erinnerungen immer dabei.",
        cta: "Im App Store laden",
        heading: "Fluxo für iPhone und iPad",
        body: "Lade die Fluxo-App im App Store. Schreib oder diktiere Notizen, importiere ein PDF oder ein Foto und wiederhole sie als Quiz oder Karteikarten. Fluxo erinnert dich an deinen Lerntagen, und ein Tipp auf die Erinnerung bringt dich direkt zur Wiederholung.",
        facts: ["Erfordert iOS 16.4 oder neuer", "iPhone und iPad", "Kostenlos, Fluxo Boost optional"],
      },
      android: {
        name: "Android",
        desc: "Tägliche Wiederholungen und Erinnerungen immer dabei.",
        cta: "Bei Google Play holen",
        heading: "Fluxo für Android",
        body: "Lade die Fluxo-App bei Google Play. Du bekommst dieselben Notizen, Quizze, Karteikarten und Wiederholungen mit Spaced Repetition wie auf dem iPhone, mit Erinnerungen an den Tagen, an denen du lernen willst.",
        facts: ["Kostenlos bei Google Play", "Optionales Fluxo Boost-Abo"],
      },
      web: {
        name: "Web",
        desc: "Keine Installation nötig. Öffne Fluxo im Browser.",
        cta: "Im Browser öffnen",
        heading: "Fluxo im Web",
        body: "Öffne Fluxo unter app.fluxo.today und melde dich mit demselben Konto an wie auf dem Handy. Deine Notizen synchronisieren sich zwischen deinen Geräten: lange Notizen am Computer schreiben, unterwegs wiederholen.",
        facts: ["Läuft im Browser", "Keine Installation nötig", "Dasselbe Konto wie auf dem Handy"],
      },
    },
    featuresTitle: "Was du auf jedem Gerät bekommst",
    features: [
      {
        title: "Notizen für alles, was du lernst",
        desc: "Schreib Vorlesungs- und Buchnotizen, diktiere eine Sprachnotiz oder importiere ein PDF, ein Word-Dokument oder ein Foto als bearbeitbare Notiz.",
      },
      {
        title: "KI-Quizze und Karteikarten",
        desc: "Fluxo schreibt Quizfragen und Karteikarten aus deiner eigenen Notiz, oder eine kurze Zusammenfassung, wenn du nur die Kernideen brauchst.",
      },
      {
        title: "Spaced Repetition",
        desc: "Jede Notiz kommt zurück, kurz bevor sie verblasst. Je besser du etwas kannst, desto seltener siehst du es.",
      },
      {
        title: "Erinnerungen an deinen Lerntagen",
        desc: "Wähle deine Tage und eine Uhrzeit, und Fluxo erinnert dich nur, wenn es etwas zu wiederholen gibt.",
      },
      {
        title: "Spaces und Suche",
        desc: "Gib jedem Fach seinen eigenen Space, sortiere Notizen in Ordner und finde alles mit der Volltextsuche.",
      },
      {
        title: "Serien und Statistiken",
        desc: "Eine Katze als Begleiter feuert dich bei jeder Session an, und Statistiken zeigen, wie viel du wiederholt und gelernt hast.",
      },
    ],
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
      {
        question: "In welchen Sprachen gibt es die Fluxo-App?",
        answer: "Die App gibt es auf Englisch und Ukrainisch.",
      },
      {
        question: "Wo lade ich Fluxo für Android herunter?",
        answer: "Lade Fluxo bei Google Play herunter. So wird die App automatisch aktualisiert.",
      },
    ],
  },
};
