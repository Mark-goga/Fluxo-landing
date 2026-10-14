import type { LocaleKey } from "@kit/config/site";
import { localeMeta, type LanguageOption } from "./locales";

// A paragraph is a list of runs: plain text, or { b } for a highlighted (bold) phrase.
// Keep the spaces inside the strings — runs are rendered back to back.
export type AboutRun = string | { b: string };
export type AboutParagraph = AboutRun[];

export type AboutContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  title: string;
  lead: string;
  scrollAria: string;
  storyTitle: string;
  story: AboutParagraph[];
  builtTitle: string;
  gallery: { prev: string; next: string; alts: [string, string, string] };
  journey: AboutParagraph[];
  whyTitle: string;
  why: AboutParagraph[];
  peopleQuote: string;
  peopleLabel: string;
  founders: [{ name: string; role: string }, { name: string; role: string }];
};

const aboutLocaleOrder: LocaleKey[] = ["en", "uk", "es", "de"];

export const aboutPath = (locale: LocaleKey) => (locale === "en" ? "/about/" : `/${locale}/about/`);

/** Language switcher for the About page: each option stays on About, in that language. */
export const aboutLanguageNav = (): LanguageOption[] =>
  aboutLocaleOrder.map((locale) => ({
    locale,
    code: localeMeta[locale].code,
    name: localeMeta[locale].name,
    href: aboutPath(locale),
  }));

export const aboutContent: Record<LocaleKey, AboutContent> = {
  en: {
    metaTitle: "About us",
    metaDescription:
      "Learning shouldn't end when you close your notes. Meet Sofiya and Markiian, the designer and developer behind Fluxo.",
    breadcrumb: "About us",
    title: "Learning shouldn't end when you close your notes",
    lead: "We spend hours learning new things. Reading articles, watching videos, taking courses, and saving everything that seems worth remembering. But somewhere along the way, most of that knowledge gets lost.",
    scrollAria: "Scroll to our story",
    storyTitle: "Our story",
    story: [
      [{ b: "Fluxo started with a simple problem we experienced ourselves." }],
      ["We're Sofiya and Markiian, a designer and a developer who had wanted to build something together for a long time."],
      [
        "It started when Markiian was looking for a better way to organize everything he was learning. Like many people, he had notes and useful materials scattered across different places.",
      ],
      ["But the more we talked about it, the more we realized that organization was only part of the problem."],
      [{ b: "The real challenge was remembering what we'd learned." }],
      ["We didn't need another place to collect information. ", { b: "We needed a reason to come back to it." }],
    ],
    builtTitle: "So we started building Fluxo",
    gallery: {
      prev: "Previous photo",
      next: "Next photo",
      alts: [
        "Fluxo landing page open in Figma on a desk monitor, with a pug asleep on the keyboard",
        "Laptop with Fluxo app screens in progress on a garden table at sunset",
        "Fluxo onboarding and paywall screens laid out in Figma late at night",
      ],
    },
    journey: [
      [
        "Our first ideas weren't perfect. Some changed completely after we spoke with other learners. And that became an important part of how we approach the product: ",
        { b: "understanding how people actually learn, rather than assuming we already know." },
      ],
      ["We're still early in the journey, and there's a lot we want to improve."],
    ],
    whyTitle: "Why we're building Fluxo",
    why: [
      [
        "We believe learning should be more than collecting information you'll never revisit. It should be something you can return to naturally, practice in small steps, and gradually turn into knowledge that stays with you.",
      ],
      [
        "That's why we're bringing notes, smart reminders, and interactive practice into one simple experience. Not to make people learn more. To help them remember more of what they already learn. And that's what we're building Fluxo for.",
      ],
    ],
    peopleQuote: "Born from our needs and shaped by yours",
    peopleLabel: "The people behind Fluxo",
    founders: [
      { name: "Sofiya", role: "Co-founder & UX/UI Designer" },
      { name: "Markiian", role: "Co-founder & Developer" },
    ],
  },

  uk: {
    metaTitle: "Про нас",
    metaDescription:
      "Навчання не має закінчуватися, коли ти закриваєш нотатки. Знайомтеся: Софія та Маркіян — дизайнерка й розробник, які створюють Fluxo.",
    breadcrumb: "Про нас",
    title: "Навчання не має закінчуватися, коли ти закриваєш нотатки",
    lead: "Ми витрачаємо години, щоб вивчати нове: читаємо статті, дивимося відео, проходимо курси й зберігаємо все, що здається вартим запам'ятовування. Але десь по дорозі більшість цих знань губиться.",
    scrollAria: "Прокрутити до нашої історії",
    storyTitle: "Наша історія",
    story: [
      [{ b: "Fluxo почався з простої проблеми, з якою ми зіткнулися самі." }],
      ["Ми — Софія та Маркіян, дизайнерка й розробник, які давно хотіли створити щось разом."],
      [
        "Усе почалося з того, що Маркіян шукав кращий спосіб упорядкувати все, що вивчав. Як і в багатьох людей, його нотатки та корисні матеріали були розкидані по різних місцях.",
      ],
      ["Але що більше ми про це говорили, то краще розуміли, що впорядкування — лише частина проблеми."],
      [{ b: "Справжнім викликом було запам'ятати те, що ми вивчили." }],
      ["Нам не потрібне було ще одне місце для збору інформації. ", { b: "Нам потрібна була причина до неї повертатися." }],
    ],
    builtTitle: "Тож ми почали створювати Fluxo",
    gallery: {
      prev: "Попереднє фото",
      next: "Наступне фото",
      alts: [
        "Лендінг Fluxo відкритий у Figma на моніторі, а на клавіатурі спить мопс",
        "Ноутбук з екранами застосунку Fluxo на столі в саду на заході сонця",
        "Екрани онбордингу й пейволу Fluxo у Figma пізно ввечері",
      ],
    },
    journey: [
      [
        "Наші перші ідеї не були ідеальними. Деякі з них повністю змінилися після розмов з іншими людьми, які навчаються. І це стало важливою частиною нашого підходу до продукту: ",
        { b: "розуміти, як люди насправді навчаються, а не вважати, що ми вже це знаємо." },
      ],
      ["Ми ще на початку шляху, і є багато чого, що ми хочемо покращити."],
    ],
    whyTitle: "Чому ми створюємо Fluxo",
    why: [
      [
        "Ми віримо, що навчання — це більше, ніж збирати інформацію, до якої ти ніколи не повернешся. До нього має бути легко повертатися, його можна практикувати маленькими кроками й поступово перетворювати на знання, які залишаються з тобою.",
      ],
      [
        "Саме тому ми поєднуємо нотатки, розумні нагадування та інтерактивну практику в одному простому досвіді. Не для того, щоб люди вчили більше. А щоб допомогти їм запам'ятовувати більше з того, що вони вже вчать. І саме для цього ми створюємо Fluxo.",
      ],
    ],
    peopleQuote: "Народжений з наших потреб і сформований вашими",
    peopleLabel: "Люди, які стоять за Fluxo",
    founders: [
      { name: "Софія", role: "Співзасновниця, UX/UI-дизайнерка" },
      { name: "Маркіян", role: "Співзасновник, розробник" },
    ],
  },

  es: {
    metaTitle: "Sobre nosotros",
    metaDescription:
      "El aprendizaje no debería terminar cuando cierras tus notas. Conoce a Sofiya y Markiian, la diseñadora y el desarrollador detrás de Fluxo.",
    breadcrumb: "Sobre nosotros",
    title: "El aprendizaje no debería terminar cuando cierras tus notas",
    lead: "Pasamos horas aprendiendo cosas nuevas. Leemos artículos, vemos vídeos, hacemos cursos y guardamos todo lo que parece digno de recordar. Pero en algún punto del camino, la mayor parte de ese conocimiento se pierde.",
    scrollAria: "Ir a nuestra historia",
    storyTitle: "Nuestra historia",
    story: [
      [{ b: "Fluxo nació de un problema sencillo que vivimos en primera persona." }],
      ["Somos Sofiya y Markiian, una diseñadora y un desarrollador que llevaban mucho tiempo queriendo crear algo juntos."],
      [
        "Todo empezó cuando Markiian buscaba una forma mejor de organizar todo lo que estaba aprendiendo. Como mucha gente, tenía notas y materiales útiles repartidos en distintos sitios.",
      ],
      ["Pero cuanto más hablábamos de ello, más nos dábamos cuenta de que la organización era solo una parte del problema."],
      [{ b: "El verdadero reto era recordar lo que habíamos aprendido." }],
      ["No necesitábamos otro lugar donde acumular información. ", { b: "Necesitábamos un motivo para volver a ella." }],
    ],
    builtTitle: "Así que empezamos a crear Fluxo",
    gallery: {
      prev: "Foto anterior",
      next: "Foto siguiente",
      alts: [
        "La landing de Fluxo abierta en Figma en un monitor, con un pug dormido sobre el teclado",
        "Portátil con pantallas de la app Fluxo en una mesa de jardín al atardecer",
        "Pantallas de onboarding y paywall de Fluxo en Figma a altas horas de la noche",
      ],
    },
    journey: [
      [
        "Nuestras primeras ideas no eran perfectas. Algunas cambiaron por completo después de hablar con otras personas que aprenden. Y eso se convirtió en una parte importante de cómo enfocamos el producto: ",
        { b: "entender cómo aprende realmente la gente, en lugar de dar por hecho que ya lo sabemos." },
      ],
      ["Todavía estamos al principio del camino y hay mucho que queremos mejorar."],
    ],
    whyTitle: "Por qué creamos Fluxo",
    why: [
      [
        "Creemos que aprender debería ser más que acumular información que nunca vas a volver a mirar. Debería ser algo a lo que puedas volver de forma natural, practicar en pequeños pasos y convertir poco a poco en conocimiento que se queda contigo.",
      ],
      [
        "Por eso reunimos notas, recordatorios inteligentes y práctica interactiva en una experiencia sencilla. No para que la gente aprenda más. Para ayudarla a recordar más de lo que ya aprende. Y para eso estamos creando Fluxo.",
      ],
    ],
    peopleQuote: "Nacido de nuestras necesidades, moldeado por las tuyas",
    peopleLabel: "Las personas detrás de Fluxo",
    founders: [
      { name: "Sofiya", role: "Cofundadora y diseñadora UX/UI" },
      { name: "Markiian", role: "Cofundador y desarrollador" },
    ],
  },

  de: {
    metaTitle: "Über uns",
    metaDescription:
      "Lernen sollte nicht enden, wenn du deine Notizen schließt. Lerne Sofiya und Markiian kennen – die Designerin und den Entwickler hinter Fluxo.",
    breadcrumb: "Über uns",
    title: "Lernen sollte nicht enden, wenn du deine Notizen schließt",
    lead: "Wir verbringen Stunden damit, Neues zu lernen: Wir lesen Artikel, schauen Videos, belegen Kurse und speichern alles, was es wert scheint, behalten zu werden. Doch irgendwo auf dem Weg geht das meiste dieses Wissens verloren.",
    scrollAria: "Zu unserer Geschichte scrollen",
    storyTitle: "Unsere Geschichte",
    story: [
      [{ b: "Fluxo begann mit einem einfachen Problem, das wir selbst erlebt haben." }],
      ["Wir sind Sofiya und Markiian – eine Designerin und ein Entwickler, die schon lange gemeinsam etwas aufbauen wollten."],
      [
        "Angefangen hat alles damit, dass Markiian nach einem besseren Weg suchte, alles zu ordnen, was er lernte. Wie bei vielen Menschen waren seine Notizen und nützlichen Materialien über verschiedene Orte verstreut.",
      ],
      ["Doch je mehr wir darüber sprachen, desto klarer wurde uns, dass Organisation nur ein Teil des Problems war."],
      [{ b: "Die eigentliche Herausforderung war, uns an das Gelernte zu erinnern." }],
      ["Wir brauchten keinen weiteren Ort, um Informationen zu sammeln. ", { b: "Wir brauchten einen Grund, zu ihnen zurückzukehren." }],
    ],
    builtTitle: "Also haben wir angefangen, Fluxo zu bauen",
    gallery: {
      prev: "Vorheriges Foto",
      next: "Nächstes Foto",
      alts: [
        "Die Fluxo-Landingpage in Figma auf einem Monitor, ein Mops schläft auf der Tastatur",
        "Laptop mit Screens der Fluxo-App auf einem Gartentisch bei Sonnenuntergang",
        "Onboarding- und Paywall-Screens von Fluxo in Figma spät in der Nacht",
      ],
    },
    journey: [
      [
        "Unsere ersten Ideen waren nicht perfekt. Manche haben sich komplett verändert, nachdem wir mit anderen Lernenden gesprochen hatten. Und genau das ist zu einem wichtigen Teil unserer Herangehensweise an das Produkt geworden: ",
        { b: "zu verstehen, wie Menschen tatsächlich lernen, statt anzunehmen, dass wir es schon wissen." },
      ],
      ["Wir stehen noch am Anfang unseres Weges, und es gibt vieles, das wir verbessern wollen."],
    ],
    whyTitle: "Warum wir Fluxo bauen",
    why: [
      [
        "Wir glauben, dass Lernen mehr sein sollte, als Informationen zu sammeln, die man nie wieder ansieht. Es sollte etwas sein, zu dem man ganz natürlich zurückkehrt, das man in kleinen Schritten übt und das nach und nach zu Wissen wird, das bleibt.",
      ],
      [
        "Deshalb bringen wir Notizen, smarte Erinnerungen und interaktives Üben in einem einfachen Erlebnis zusammen. Nicht, damit Menschen mehr lernen. Sondern damit sie sich mehr von dem merken, was sie ohnehin schon lernen. Und genau dafür bauen wir Fluxo.",
      ],
    ],
    peopleQuote: "Aus unseren Bedürfnissen entstanden, von deinen geprägt",
    peopleLabel: "Die Menschen hinter Fluxo",
    founders: [
      { name: "Sofiya", role: "Mitgründerin & UX/UI-Designerin" },
      { name: "Markiian", role: "Mitgründer & Entwickler" },
    ],
  },
};
