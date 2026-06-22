import { siteConfig, type LocaleKey } from "../config/site";

type Link = {
  label: string;
  href: string;
};

type Action = Link & {
  clarityEvent: string;
};

type WhyCard = {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
};

type FeatureCard = {
  title: string;
  desc: string;
  bg: string;
  sticker: "purple" | "green" | "yellow" | "blue";
  icon: string;
  iconAlt: string;
};

type PricingFeature = {
  text: string;
  included: boolean;
};

type PricingCard = {
  name: string;
  amount: string;
  period: string;
  featured: boolean;
  badge?: string;
  features: PricingFeature[];
  cta: Action & { variant: "primary" | "secondary" };
};

type FaqItem = {
  question: string;
  answer: string;
};

type FooterColumn = {
  title: string;
  links: Link[];
};

export type LandingContent = {
  key: LocaleKey;
  lang: string;
  path: string;
  ogLocale: string;
  ogLocaleAlternate: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  header: {
    homeAria: string;
    nav: Link[];
    languageLink: Link & { lang: string };
    cta: Action;
  };
  hero: {
    titleHtml: string;
    text: string;
    primaryCta: Action;
    secondaryCta: Action;
    imageAlt: string;
  };
  whyFluxo: {
    titleHtml: string;
    cards: WhyCard[];
  };
  features: {
    titleHtml: string;
    aiBadge: string;
    streakHtml: string;
    catAlt: string;
    leftCards: FeatureCard[];
    rightCards: FeatureCard[];
    cta: Action;
  };
  pricing: {
    titleHtml: string;
    cards: PricingCard[];
  };
  faq: {
    titleHtml: string;
    items: FaqItem[];
  };
  cta: {
    titleHtml: string;
    placeholder: string;
    submit: Action;
    noteHtml: string;
  };
  modal: {
    title: string;
    description: string;
    placeholder: string;
    submit: string;
    closeAria: string;
  };
  toast: {
    success: string;
    error: string;
  };
  footer: {
    brandAlt: string;
    socials: { label: string; href: string }[];
    columns: FooterColumn[];
    consentPreferences: string;
    copyright: string;
  };
  structuredData: {
    description: string;
  };
};

export const landingContent = {
  en: {
    key: "en",
    lang: "en",
    path: "/",
    ogLocale: "en_US",
    ogLocaleAlternate: "uk_UA",
    meta: {
      title: `${siteConfig.name} — Learn quickly, remember forever`,
      description:
        "Fluxo turns passive reading into active long-term memory with structured knowledge spaces, AI summaries, and spaced repetition. Learn quickly and keep knowledge fresh forever.",
      ogTitle: `${siteConfig.name} — Learn quickly, remember forever`,
      ogDescription:
        "Capture what you study, structure custom knowledge nodes, and let spaced repetition lock ideas in your brain.",
      twitterTitle: `${siteConfig.name} — Learn quickly, remember forever`,
      twitterDescription:
        "Knowledge spaces, AI summaries, and spaced repetition that turn reading into lasting memory.",
    },
    header: {
      homeAria: `${siteConfig.name} home`,
      nav: [
        { label: "Why Fluxo", href: "#why" },
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact us", href: "#cta" },
      ],
      languageLink: { label: "UK", href: "/uk/", lang: "uk" },
      cta: { label: "Get started", href: "#cta", clarityEvent: "header_cta_click" },
    },
    hero: {
      titleHtml: `Learn quickly. Keep <span class="hero-keyword">knowledge</span> fresh forever`,
      text:
        "Stop just scrolling past summaries. Fluxo captures what you study, structures custom knowledge nodes, and schedules active repetitions to lock ideas in your brain.",
      primaryCta: { label: "Get started for free", href: "#cta", clarityEvent: "hero_primary_click" },
      secondaryCta: { label: "How it works", href: "#features", clarityEvent: "hero_how_it_works" },
      imageAlt: "Fluxo in action",
    },
    whyFluxo: {
      titleHtml: "AI can read everything for you, but learning happens in your mind",
      cards: [
        {
          title: "Save everything, remember nothing?",
          desc:
            "Notes and bookmarks, but without structured review they are rarely revisited. Knowledge needs repetition to turn into memory.",
          image: "assets/card-1.png",
          imageAlt: "Save everything, remember nothing?",
        },
        {
          title: "AI is fast. Your memory is not?",
          desc:
            "Having instant access to information doesn't mean understanding it. Learning requires time, repetition, and consistent engagement.",
          image: "assets/card-2.png",
          imageAlt: "AI is fast. Your memory is not?",
        },
        {
          title: "Endless summaries, no retention?",
          desc:
            "You summarize everything but remember nothing after a week. True learning requires active call-and-response.",
          image: "assets/card-3.png",
          imageAlt: "Endless summaries, no retention?",
        },
      ],
    },
    features: {
      titleHtml: `Fluxo doesn't replace your<br/>brain. It trains it`,
      aiBadge: "AI support",
      streakHtml: `4 day<br/>streak`,
      catAlt: "Fluxo cat",
      leftCards: [
        {
          title: "Learning spaces",
          desc:
            "Create a space for any topic — English, design, history, code. Your knowledge, organized the way your brain works.",
          bg: "#E0E1FF",
          sticker: "purple",
          icon: "assets/tree-structure.svg",
          iconAlt: "Learning spaces",
        },
        {
          title: "Smart repetition & progress",
          desc:
            "Fluxo reminds you to review at the exact right moment. See your streaks, retention scores, and real growth — learning feels less like work when you can see it working.",
          bg: "#D5FFB7",
          sticker: "green",
          icon: "assets/trend-up.svg",
          iconAlt: "Smart repetition",
        },
      ],
      rightCards: [
        {
          title: "Summaries Your way",
          desc:
            "Write your own or use an AI template. Either way, you capture what matters — in your words, on your terms.",
          bg: "#FEFFC2",
          sticker: "yellow",
          icon: "assets/pencil-line.svg",
          iconAlt: "Summaries",
        },
        {
          title: "Works everywhere",
          desc:
            "iOS, Android, web, desktop. Fully synced, always up to date. Works offline — keep learning anywhere, your all updates syncs automatically when connection returns.",
          bg: "#E0F2FF",
          sticker: "blue",
          icon: "assets/arrows-clockwise.svg",
          iconAlt: "Works everywhere",
        },
      ],
      cta: { label: "Get started for free", href: "#cta", clarityEvent: "features_cta_click" },
    },
    pricing: {
      titleHtml: `Simple pricing tiers<br/>Find your pace`,
      cards: [
        {
          name: "Free",
          amount: "$0",
          period: "/ eternal",
          featured: false,
          features: [
            { text: "4 knowledge spaces", included: true },
            { text: "Basic AI summaries (500 words)", included: true },
            { text: "Limited training sessions", included: false },
            { text: "Sync across 2 devices", included: true },
          ],
          cta: { label: "Start Free", href: "#cta", clarityEvent: "pricing_free_click", variant: "secondary" },
        },
        {
          name: "Premium",
          amount: "$9.99",
          period: "/ month",
          featured: true,
          badge: "Most Popular",
          features: [
            { text: "Unlimited knowledge spaces", included: true },
            { text: "Full AI summaries & axioms", included: true },
            { text: "Unlimited training sessions", included: true },
            { text: "Spaced repetition algorithm", included: true },
            { text: "Sync across all devices", included: true },
          ],
          cta: { label: "Start Premium", href: "#cta", clarityEvent: "pricing_premium_click", variant: "primary" },
        },
        {
          name: "Premium Plus",
          amount: "$19.99",
          period: "/ month",
          featured: false,
          features: [
            { text: "Everything in Premium", included: true },
            { text: "Analytics dashboard", included: true },
            { text: "Export formats (Notion, CSV, Anki)", included: true },
            { text: "Custom training intervals", included: true },
          ],
          cta: {
            label: "Start Premium Plus",
            href: "#cta",
            clarityEvent: "pricing_premium_plus_click",
            variant: "secondary",
          },
        },
      ],
    },
    faq: {
      titleHtml: "Questions you might have",
      items: [
        {
          question: "What exactly is Fluxo?",
          answer:
            "Fluxo is a learning app that helps you truly remember what you study. It combines structured knowledge spaces, AI-powered summaries, and spaced repetition to turn passive reading into active long-term memory.",
        },
        {
          question: "Is Fluxo only for students?",
          answer:
            "No. Fluxo is for anyone who wants to learn something new — whether you're studying for exams, picking up a new skill at work, or exploring a hobby. If you want to remember what you read, Fluxo is for you.",
        },
        {
          question: "How does Fluxo help me learn faster and stay consistent?",
          answer:
            `You set your own schedule – how much time per week and which topics matter to you. Fluxo takes care of the rest: it reminds you when it's time to review and gives you the shortest path from "open the app" to "done." No deciding what to study, no planning. Depending on your topic, Fluxo automatically creates a quiz, flashcards, or a summary to re-read – so every session feels different and you never repeat the same format twice.`,
        },
        {
          question: "Can I use it offline or on my phone?",
          answer:
            "Yes. Fluxo offers offline access on mobile apps for iOS and Android. Whether you're commuting or in a no-WiFi zone, your notes and reviews are always available. When you reconnect, everything syncs automatically.",
        },
        {
          question: "Is Fluxo free?",
          answer:
            "Yes. The free plan includes 4 Knowledge Spaces, note editor, spaced repetition reviews, and cross-device sync. Need more? Premium unlocks unlimited Spaces, advanced features, and offline access.",
        },
      ],
    },
    cta: {
      titleHtml: `Ready to actually<br/><strong>remember</strong> what you learn?`,
      placeholder: "Enter your email",
      submit: { label: "Get Early Access", href: "#", clarityEvent: "signup_submit" },
      noteHtml: `First 50 users get <strong>premium plus 60%</strong> discount`,
    },
    modal: {
      title: "We haven't launched yet",
      description:
        "Fluxo isn't live yet — but the first members get exclusive early-bird discounts. Leave your email and we'll let you know the moment we launch.",
      placeholder: "Enter your email",
      submit: "Notify me",
      closeAria: "Close",
    },
    toast: {
      success: "Thanks! You're on the early-access list.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      brandAlt: `${siteConfig.name}`,
      socials: [
        { label: "TikTok", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "X", href: "#" },
      ],
      columns: [
        {
          title: "Product",
          links: [
            { label: "Why Fluxo", href: "#why" },
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQs", href: "#faq" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About Us", href: "#" },
            { label: "Blog Node", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Privacy Policy", href: "/privacy/" },
            { label: "Cookie Policy", href: "/cookies/" },
            { label: "Terms of Service", href: "#" },
          ],
        },
        {
          title: "Knowledge Hub",
          links: [
            { label: "How to remember what you learn?", href: "#" },
            { label: "How to learn without forgetting?", href: "#" },
            { label: "Best study routine", href: "#" },
            { label: "The second brain for learning", href: "#" },
            { label: "How to track learning progress?", href: "#" },
            { label: "Best way to learn new vocabulary", href: "#" },
            { label: "How to study while working full time?", href: "#" },
          ],
        },
      ],
      consentPreferences: "Cookie Preferences",
      copyright: `© 2026 ${siteConfig.name} all rights reserved`,
    },
    structuredData: {
      description:
        "Fluxo is a learning app that combines structured knowledge spaces, AI summaries, and spaced repetition to turn passive reading into active long-term memory.",
    },
  },
  uk: {
    key: "uk",
    lang: "uk",
    path: "/uk/",
    ogLocale: "uk_UA",
    ogLocaleAlternate: "en_US",
    meta: {
      title: `${siteConfig.name} — Вчись швидко, пам'ятай завжди`,
      description:
        "Fluxo перетворює пасивне читання на активну довготривалу пам'ять завдяки структурованим просторам знань, ШІ-конспектам та інтервальному повторенню. Вчись швидко й тримай знання свіжими назавжди.",
      ogTitle: `${siteConfig.name} — Вчись швидко, пам'ятай завжди`,
      ogDescription:
        "Фіксуй те, що вивчаєш, структуруй власні вузли знань, а інтервальне повторення закріпить ідеї в пам'яті.",
      twitterTitle: `${siteConfig.name} — Вчись швидко, пам'ятай завжди`,
      twitterDescription:
        "Простори знань, ШІ-конспекти та інтервальне повторення, що перетворюють читання на стійку пам'ять.",
    },
    header: {
      homeAria: `${siteConfig.name} home`,
      nav: [
        { label: "Чому Fluxo", href: "#why" },
        { label: "Можливості", href: "#features" },
        { label: "Як це працює", href: "#features" },
        { label: "Тарифи", href: "#pricing" },
        { label: "Контакти", href: "#cta" },
      ],
      languageLink: { label: "EN", href: "/", lang: "en" },
      cta: { label: "Почати", href: "#cta", clarityEvent: "header_cta_click" },
    },
    hero: {
      titleHtml: `Вчись швидко. Тримай <span class="hero-keyword">знання</span> свіжими назавжди`,
      text:
        "Досить просто гортати чужі конспекти. Fluxo фіксує те, що ти вивчаєш, структурує власні вузли знань і планує активні повторення, щоб закріпити ідеї в твоєму мозку.",
      primaryCta: { label: "Почати безкоштовно", href: "#cta", clarityEvent: "hero_primary_click" },
      secondaryCta: { label: "Як це працює", href: "#features", clarityEvent: "hero_how_it_works" },
      imageAlt: "Fluxo у дії",
    },
    whyFluxo: {
      titleHtml: "ШІ може прочитати все за тебе, але навчання відбувається у твоїй голові",
      cards: [
        {
          title: "Зберігаєш усе, не пам'ятаєш нічого?",
          desc:
            "Нотатки й закладки, але без структурованого повторення до них рідко повертаються. Знанням потрібне повторення, щоб стати пам'яттю.",
          image: "assets/card-1.png",
          imageAlt: "Зберігаєш усе, не пам'ятаєш нічого?",
        },
        {
          title: "ШІ швидкий. Твоя пам'ять — ні?",
          desc:
            "Миттєвий доступ до інформації не означає її розуміння. Навчання потребує часу, повторення та постійної залученості.",
          image: "assets/card-2.png",
          imageAlt: "ШІ швидкий. Твоя пам'ять — ні?",
        },
        {
          title: "Безкінечні конспекти, нуль засвоєння?",
          desc:
            "Ти конспектуєш усе, але за тиждень нічого не пам'ятаєш. Справжнє навчання потребує активного «питання-відповідь».",
          image: "assets/card-3.png",
          imageAlt: "Безкінечні конспекти, нуль засвоєння?",
        },
      ],
    },
    features: {
      titleHtml: `Fluxo не замінює твій<br/>мозок. Він його тренує`,
      aiBadge: "Підтримка ШІ",
      streakHtml: `4 дні<br/>поспіль`,
      catAlt: "Котик Fluxo",
      leftCards: [
        {
          title: "Простори знань",
          desc:
            "Створи простір для будь-якої теми — англійська, дизайн, історія, код. Твої знання, організовані так, як працює твій мозок.",
          bg: "#E0E1FF",
          sticker: "purple",
          icon: "assets/tree-structure.svg",
          iconAlt: "Простори знань",
        },
        {
          title: "Розумне повторення та прогрес",
          desc:
            "Fluxo нагадає повторити саме в потрібний момент. Дивись свої серії, показники запам'ятовування та реальний ріст — навчання менше схоже на роботу, коли видно, що воно працює.",
          bg: "#D5FFB7",
          sticker: "green",
          icon: "assets/trend-up.svg",
          iconAlt: "Розумне повторення",
        },
      ],
      rightCards: [
        {
          title: "Конспекти на твій лад",
          desc:
            "Пиши власні або використовуй ШІ-шаблон. У будь-якому разі ти фіксуєш головне — своїми словами, на своїх умовах.",
          bg: "#FEFFC2",
          sticker: "yellow",
          icon: "assets/pencil-line.svg",
          iconAlt: "Конспекти",
        },
        {
          title: "Працює всюди",
          desc:
            "iOS, Android, веб, десктоп. Повна синхронізація, завжди актуально. Працює офлайн — навчайся будь-де, усі оновлення синхронізуються автоматично, щойно з'явиться зв'язок.",
          bg: "#E0F2FF",
          sticker: "blue",
          icon: "assets/arrows-clockwise.svg",
          iconAlt: "Працює всюди",
        },
      ],
      cta: { label: "Почати безкоштовно", href: "#cta", clarityEvent: "features_cta_click" },
    },
    pricing: {
      titleHtml: `Прості тарифи<br/>Обери свій темп`,
      cards: [
        {
          name: "Безкоштовно",
          amount: "$0",
          period: "/ назавжди",
          featured: false,
          features: [
            { text: "4 простори знань", included: true },
            { text: "Базові ШІ-конспекти (500 слів)", included: true },
            { text: "Обмежені тренування", included: false },
            { text: "Синхронізація на 2 пристроях", included: true },
          ],
          cta: { label: "Почати безкоштовно", href: "#cta", clarityEvent: "pricing_free_click", variant: "secondary" },
        },
        {
          name: "Premium",
          amount: "$9.99",
          period: "/ місяць",
          featured: true,
          badge: "Найпопулярніший",
          features: [
            { text: "Необмежені простори знань", included: true },
            { text: "Повні ШІ-конспекти та аксіоми", included: true },
            { text: "Необмежені тренування", included: true },
            { text: "Алгоритм інтервального повторення", included: true },
            { text: "Синхронізація на всіх пристроях", included: true },
          ],
          cta: { label: "Обрати Premium", href: "#cta", clarityEvent: "pricing_premium_click", variant: "primary" },
        },
        {
          name: "Premium Plus",
          amount: "$19.99",
          period: "/ місяць",
          featured: false,
          features: [
            { text: "Усе з Premium", included: true },
            { text: "Панель аналітики", included: true },
            { text: "Експорт (Notion, CSV, Anki)", included: true },
            { text: "Власні інтервали тренувань", included: true },
          ],
          cta: {
            label: "Обрати Premium Plus",
            href: "#cta",
            clarityEvent: "pricing_premium_plus_click",
            variant: "secondary",
          },
        },
      ],
    },
    faq: {
      titleHtml: "Питання, які можуть виникнути",
      items: [
        {
          question: "Що таке Fluxo?",
          answer:
            "Fluxo — це застосунок для навчання, який допомагає по-справжньому запам'ятовувати вивчене. Він поєднує структуровані простори знань, ШІ-конспекти та інтервальне повторення, щоб перетворити пасивне читання на активну довготривалу пам'ять.",
        },
        {
          question: "Fluxo лише для студентів?",
          answer:
            "Ні. Fluxo для всіх, хто хоче вчити щось нове — готуєшся до іспитів, опановуєш новий навик на роботі чи захопився хобі. Якщо хочеш пам'ятати прочитане — Fluxo для тебе.",
        },
        {
          question: "Як Fluxo допомагає вчитися швидше й не кидати?",
          answer:
            `Ти задаєш власний графік — скільки часу на тиждень і які теми важливі. Решту бере на себе Fluxo: нагадує, коли час повторити, і дає найкоротший шлях від «відкрив застосунок» до «готово». Не треба вирішувати, що вчити, чи планувати. Залежно від теми Fluxo автоматично створює квіз, картки або конспект для перечитування — тож кожна сесія інша, і ти ніколи не повторюєш той самий формат двічі.`,
        },
        {
          question: "Чи можна користуватися офлайн або на телефоні?",
          answer:
            "Так. Fluxo дає офлайн-доступ у мобільних застосунках для iOS та Android. У дорозі чи там, де немає Wi-Fi, твої нотатки й повторення завжди під рукою. Щойно з'явиться зв'язок — усе синхронізується автоматично.",
        },
        {
          question: "Fluxo безкоштовний?",
          answer:
            "Так. Безкоштовний план включає 4 простори знань, редактор нотаток, інтервальні повторення та синхронізацію між пристроями. Потрібно більше? Premium відкриває необмежені простори, розширені функції та офлайн-доступ.",
        },
      ],
    },
    cta: {
      titleHtml: `Готовий справді<br/><strong>пам'ятати</strong> те, що вивчаєш?`,
      placeholder: "Введіть ваш email",
      submit: { label: "Отримати ранній доступ", href: "#", clarityEvent: "signup_submit" },
      noteHtml: `Перші 50 користувачів отримають <strong>знижку 60% на Premium Plus</strong>`,
    },
    modal: {
      title: "Ми ще не запустилися",
      description:
        "Fluxo поки не запущено — але перші учасники отримають ексклюзивні знижки. Залиш свій email, і ми повідомимо, щойно запустимося.",
      placeholder: "Введіть ваш email",
      submit: "Повідомити мене",
      closeAria: "Закрити",
    },
    toast: {
      success: "Дякуємо! Ти у списку раннього доступу.",
      error: "Щось пішло не так. Спробуй ще раз.",
    },
    footer: {
      brandAlt: `${siteConfig.name}`,
      socials: [
        { label: "TikTok", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "X", href: "#" },
      ],
      columns: [
        {
          title: "Продукт",
          links: [
            { label: "Чому Fluxo", href: "#why" },
            { label: "Можливості", href: "#features" },
            { label: "Тарифи", href: "#pricing" },
            { label: "Питання", href: "#faq" },
          ],
        },
        {
          title: "Компанія",
          links: [
            { label: "Про нас", href: "#" },
            { label: "Блог", href: "#" },
            { label: "Контакти", href: "#" },
            { label: "Політика конфіденційності", href: "/privacy/" },
            { label: "Політика cookie", href: "/cookies/" },
            { label: "Умови використання", href: "#" },
          ],
        },
        {
          title: "База знань",
          links: [
            { label: "Як запам'ятати те, що вивчаєш?", href: "#" },
            { label: "Як вчитися й не забувати?", href: "#" },
            { label: "Найкращий розклад навчання", href: "#" },
            { label: "Другий мозок для навчання", href: "#" },
            { label: "Як відстежувати прогрес навчання?", href: "#" },
            { label: "Найкращий спосіб вчити нові слова", href: "#" },
            { label: "Як вчитися, працюючи на повну ставку?", href: "#" },
          ],
        },
      ],
      consentPreferences: "Налаштування cookie",
      copyright: `© 2026 ${siteConfig.name}. Усі права захищені`,
    },
    structuredData: {
      description:
        "Fluxo — застосунок для навчання, що поєднує структуровані простори знань, ШІ-конспекти та інтервальне повторення, перетворюючи пасивне читання на активну довготривалу пам'ять.",
    },
  },
} satisfies Record<LocaleKey, LandingContent>;
