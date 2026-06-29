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
  imageBg: string;
  sticker: "purple" | "green" | "yellow" | "blue";
  icon: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
};

type PricingFeature = {
  text: string;
  included: boolean;
};

type PricingCard = {
  name: string;
  amount: string;
  period: string;
  description?: string;
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
    languageAria: string;
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
        { label: "Pricing", href: "#pricing" },
        { label: "About us", href: "#cta" },
      ],
      languageAria: "Change language",
      cta: { label: "Get started", href: "#cta", clarityEvent: "header_cta_click" },
    },
    hero: {
      titleHtml: `Learn quickly. Keep <span class="hero-keyword">knowledge</span> fresh forever`,
      text:
        "Stop just scrolling past summaries. Fluxo captures what you study, structures custom knowledge nodes, and schedules active repetitions to lock ideas in your brain.",
      primaryCta: { label: "Get started", href: "#cta", clarityEvent: "hero_primary_click" },
      secondaryCta: { label: "How it works", href: "#features", clarityEvent: "hero_how_it_works" },
      imageAlt: "Fluxo in action",
    },
    whyFluxo: {
      titleHtml: `AI can read everything for you, but learning happens in your <span class="hero-keyword">mind</span>`,
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
      titleHtml: `<span class="hero-keyword">Fluxo</span> doesn't replace your brain. It trains it`,
      aiBadge: "AI support",
      streakHtml: `4 day<br/>streak`,
      catAlt: "Fluxo cat",
      leftCards: [
        {
          title: "Learning spaces",
          desc:
            "Create a space for any topic — English, design, history, code. Your knowledge, organized the way your brain works.",
          bg: "#E0E1FF",
          imageBg: "#F1F1FF",
          sticker: "purple",
          icon: "assets/tree-structure.svg",
          iconAlt: "Learning spaces",
          image: "assets/Learning_spaces.png",
          imageAlt: "Learning spaces interface",
        },
        {
          title: "Summaries Your way",
          desc:
            "Write your own or use an AI template. Either way, you capture what matters — in your words, on your terms.",
          bg: "#FEFFC2",
          imageBg: "#FFFEE0",
          sticker: "yellow",
          icon: "assets/pencil-line.svg",
          iconAlt: "Summaries",
          image: "assets/summaries _your_way.png",
          imageAlt: "Summaries interface",
        },
      ],
      rightCards: [
        {
          title: "Smart repetition & progress",
          desc:
            "Fluxo reminds you to review at the exact right moment. See your streaks, retention scores, and real growth — learning feels less like work when you can see it working.",
          bg: "#D5FFB7",
          imageBg: "#EAFFDA",
          sticker: "green",
          icon: "assets/trend-up.svg",
          iconAlt: "Smart repetition",
          image: "assets/smart_repetition.png",
          imageAlt: "Smart repetition interface",
        },
        {
          title: "Works everywhere",
          desc:
            "iOS, Android, web, desktop. Fully synced, always up to date. Works offline — keep learning anywhere, your all updates syncs automatically when connection returns.",
          bg: "#E0F2FF",
          imageBg: "#F0F8FF",
          sticker: "blue",
          icon: "assets/arrows-clockwise.svg",
          iconAlt: "Works everywhere",
          image: "assets/works_everywhere.png",
          imageAlt: "Works everywhere interface",
        },
      ],
      cta: { label: "Get started", href: "#cta", clarityEvent: "features_cta_click" },
    },
    pricing: {
      titleHtml: `Simple pricing tiers<br/>Find your pace`,
      cards: [
        {
          name: "Free",
          amount: "$0",
          period: "",
          description: "Perfect for getting started with Fluxo",
          featured: false,
          features: [
            { text: "3 Knowledge Spaces", included: true },
            { text: "Voice & Screenshot Capture", included: true },
            { text: "Import from Notion, Obsidian, Markdown", included: true },
            { text: "PDF & file import (up to 5MB)", included: true },
            { text: "5 AI Summaries per month", included: true },
            { text: "Training Sessions & Quizzes", included: true },
            { text: "Sync across all devices", included: true },
          ],
          cta: { label: "Start Free", href: "#cta", clarityEvent: "pricing_free_click", variant: "secondary" },
        },
        {
          name: "Premium",
          amount: "$9",
          period: "/ month",
          description: "Unlock the full Fluxo experience",
          featured: true,
          badge: "Most Popular",
          features: [
            { text: "Unlimited Knowledge Spaces & Notes", included: true },
            { text: "Import & export without limits", included: true },
            { text: "AI Summaries, Axioms & Key Insights", included: true },
            { text: "AI Flashcard Generation from any note", included: true },
            { text: "Spaced Repetition with trigger-based review", included: true },
            { text: "Streak Freeze & Flexible Goals", included: true },
            { text: "500 AI Credits/month", included: true },
          ],
          cta: { label: "Start Premium", href: "#cta", clarityEvent: "pricing_premium_click", variant: "primary" },
        },
        {
          name: "Premium Plus",
          amount: "$20",
          period: "/ month",
          description: "Full AI learning suite for serious learners",
          featured: false,
          features: [
            { text: "Everything in Premium", included: true },
            { text: "AI Answer Grading & Explanations", included: true },
            { text: "Retention Dashboard & Progress Analytics", included: true },
            { text: "Custom Training Intervals", included: true },
            { text: "5,000 AI Credits/month", included: true },
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
        "Fluxo isn't live yet – but the first members get exclusive early-bird discounts. Leave your email and we'll let you know the moment we launch.",
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
            { label: "Contact", href: "#" },
            { label: "Privacy Policy", href: "/privacy/" },
            { label: "Cookie Policy", href: "/cookies/" },
            { label: "Terms of Service", href: "#" },
          ],
        },
        {
          title: "Knowledge Hub",
          links: [
            { label: "How to remember what you learn?", href: "/blog/how-to-remember-what-you-learn/" },
            { label: "How to learn without forgetting?", href: "/blog/how-to-learn-without-forgetting/" },
            { label: "Best study routine", href: "/blog/best-study-routine/" },
            { label: "The second brain for learning", href: "/blog/the-second-brain-for-learning/" },
            { label: "How to track learning progress?", href: "/blog/how-to-track-learning-progress/" },
            { label: "Best way to learn new vocabulary", href: "/blog/best-way-to-learn-new-vocabulary/" },
            { label: "How to study while working full time?", href: "/blog/how-to-study-while-working-full-time/" },
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
        { label: "Тарифи", href: "#pricing" },
        { label: "Контакти", href: "#cta" },
      ],
      languageAria: "Змінити мову",
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
      titleHtml: `ШІ може прочитати все за тебе, але навчання відбувається у твоїй <span class="hero-keyword">голові</span>`,
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
      titleHtml: `<span class="hero-keyword">Fluxo</span> не замінює твій<br/>мозок. Він його тренує`,
      aiBadge: "Підтримка ШІ",
      streakHtml: `4 дні<br/>поспіль`,
      catAlt: "Котик Fluxo",
      leftCards: [
        {
          title: "Простори знань",
          desc:
            "Створи простір для будь-якої теми — англійська, дизайн, історія, код. Твої знання, організовані так, як працює твій мозок.",
          bg: "#E0E1FF",
          imageBg: "#F1F1FF",
          sticker: "purple",
          icon: "assets/tree-structure.svg",
          iconAlt: "Простори знань",
          image: "assets/Learning_spaces.png",
          imageAlt: "Інтерфейс просторів знань",
        },
        {
          title: "Конспекти на твій лад",
          desc:
            "Пиши власні або використовуй ШІ-шаблон. У будь-якому разі ти фіксуєш головне — своїми словами, на своїх умовах.",
          bg: "#FEFFC2",
          imageBg: "#FFFEE0",
          sticker: "yellow",
          icon: "assets/pencil-line.svg",
          iconAlt: "Конспекти",
          image: "assets/summaries _your_way.png",
          imageAlt: "Інтерфейс конспектів",
        },
      ],
      rightCards: [
        {
          title: "Розумне повторення та прогрес",
          desc:
            "Fluxo нагадає повторити саме в потрібний момент. Дивись свої серії, показники запам'ятовування та реальний ріст — навчання менше схоже на роботу, коли видно, що воно працює.",
          bg: "#D5FFB7",
          imageBg: "#EAFFDA",
          sticker: "green",
          icon: "assets/trend-up.svg",
          iconAlt: "Розумне повторення",
          image: "assets/smart_repetition.png",
          imageAlt: "Інтерфейс повторення",
        },
        {
          title: "Працює всюди",
          desc:
            "iOS, Android, веб, десктоп. Повна синхронізація, завжди актуально. Працює офлайн — навчайся будь-де, усі оновлення синхронізуються автоматично, щойно з'явиться зв'язок.",
          bg: "#E0F2FF",
          sticker: "blue",
          icon: "assets/arrows-clockwise.svg",
          iconAlt: "Працює всюди",
          imageBg: "#F0F8FF",
          image: "assets/works_everywhere.png",
          imageAlt: "Інтерфейс синхронізації",
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
            { label: "Як запам'ятати те, що вивчаєш?", href: "/uk/blog/how-to-remember-what-you-learn/" },
            { label: "Як вчитися й не забувати?", href: "/uk/blog/how-to-learn-without-forgetting/" },
            { label: "Найкращий розклад навчання", href: "/uk/blog/best-study-routine/" },
            { label: "Другий мозок для навчання", href: "/uk/blog/the-second-brain-for-learning/" },
            { label: "Як відстежувати прогрес навчання?", href: "/uk/blog/how-to-track-learning-progress/" },
            { label: "Найкращий спосіб вчити нові слова", href: "/uk/blog/best-way-to-learn-new-vocabulary/" },
            { label: "Як вчитися, працюючи на повну ставку?", href: "/uk/blog/how-to-study-while-working-full-time/" },
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
  es: {
    key: "es",
    lang: "es",
    path: "/es/",
    ogLocale: "es_ES",
    ogLocaleAlternate: "en_US",
    meta: {
      title: `${siteConfig.name} — Aprende rápido, recuerda para siempre`,
      description:
        "Fluxo convierte la lectura pasiva en memoria activa a largo plazo con espacios de conocimiento estructurados, resúmenes con IA y repetición espaciada. Aprende rápido y mantén tu conocimiento fresco para siempre.",
      ogTitle: `${siteConfig.name} — Aprende rápido, recuerda para siempre`,
      ogDescription:
        "Captura lo que estudias, estructura tus propios nodos de conocimiento y deja que la repetición espaciada fije las ideas en tu cerebro.",
      twitterTitle: `${siteConfig.name} — Aprende rápido, recuerda para siempre`,
      twitterDescription:
        "Espacios de conocimiento, resúmenes con IA y repetición espaciada que convierten la lectura en memoria duradera.",
    },
    header: {
      homeAria: `Inicio de ${siteConfig.name}`,
      nav: [
        { label: "Por qué Fluxo", href: "#why" },
        { label: "Funciones", href: "#features" },
        { label: "Precios", href: "#pricing" },
        { label: "Sobre nosotros", href: "#cta" },
      ],
      languageAria: "Cambiar idioma",
      cta: { label: "Empieza ahora", href: "#cta", clarityEvent: "header_cta_click" },
    },
    hero: {
      titleHtml: `Aprende rápido. Mantén tu <span class="hero-keyword">conocimiento</span> fresco para siempre`,
      text:
        "Deja de pasar de largo por los resúmenes. Fluxo captura lo que estudias, estructura tus propios nodos de conocimiento y programa repeticiones activas para fijar las ideas en tu cerebro.",
      primaryCta: { label: "Empieza ahora", href: "#cta", clarityEvent: "hero_primary_click" },
      secondaryCta: { label: "Cómo funciona", href: "#features", clarityEvent: "hero_how_it_works" },
      imageAlt: "Fluxo en acción",
    },
    whyFluxo: {
      titleHtml: `La IA puede leerlo todo por ti, pero el aprendizaje ocurre en tu <span class="hero-keyword">mente</span>`,
      cards: [
        {
          title: "¿Lo guardas todo y no recuerdas nada?",
          desc:
            "Notas y marcadores, pero sin un repaso estructurado rara vez vuelves a ellos. El conocimiento necesita repetición para convertirse en memoria.",
          image: "assets/card-1.png",
          imageAlt: "¿Lo guardas todo y no recuerdas nada?",
        },
        {
          title: "La IA es rápida. ¿Tu memoria no?",
          desc:
            "Tener acceso instantáneo a la información no significa entenderla. Aprender requiere tiempo, repetición y constancia.",
          image: "assets/card-2.png",
          imageAlt: "La IA es rápida. ¿Tu memoria no?",
        },
        {
          title: "¿Resúmenes infinitos y nada de retención?",
          desc:
            "Resumes todo pero a la semana no recuerdas nada. El aprendizaje real necesita un «pregunta y respuesta» activo.",
          image: "assets/card-3.png",
          imageAlt: "¿Resúmenes infinitos y nada de retención?",
        },
      ],
    },
    features: {
      titleHtml: `<span class="hero-keyword">Fluxo</span> no reemplaza tu cerebro. Lo entrena`,
      aiBadge: "Asistencia de IA",
      streakHtml: `4 días<br/>seguidos`,
      catAlt: "Gato de Fluxo",
      leftCards: [
        {
          title: "Espacios de aprendizaje",
          desc:
            "Crea un espacio para cualquier tema: inglés, diseño, historia, código. Tu conocimiento, organizado como funciona tu cerebro.",
          bg: "#E0E1FF",
          imageBg: "#F1F1FF",
          sticker: "purple",
          icon: "assets/tree-structure.svg",
          iconAlt: "Espacios de aprendizaje",
          image: "assets/Learning_spaces.png",
          imageAlt: "Interfaz de espacios de aprendizaje",
        },
        {
          title: "Resúmenes a tu manera",
          desc:
            "Escríbelos tú o usa una plantilla de IA. En cualquier caso, capturas lo importante: con tus palabras, en tus términos.",
          bg: "#FEFFC2",
          imageBg: "#FFFEE0",
          sticker: "yellow",
          icon: "assets/pencil-line.svg",
          iconAlt: "Resúmenes",
          image: "assets/summaries _your_way.png",
          imageAlt: "Interfaz de resúmenes",
        },
      ],
      rightCards: [
        {
          title: "Repetición inteligente y progreso",
          desc:
            "Fluxo te recuerda repasar justo en el momento exacto. Mira tus rachas, tus niveles de retención y tu crecimiento real: aprender se siente menos como trabajo cuando ves que funciona.",
          bg: "#D5FFB7",
          imageBg: "#EAFFDA",
          sticker: "green",
          icon: "assets/trend-up.svg",
          iconAlt: "Repetición inteligente",
          image: "assets/smart_repetition.png",
          imageAlt: "Interfaz de repetición",
        },
        {
          title: "Funciona en todas partes",
          desc:
            "iOS, Android, web, escritorio. Totalmente sincronizado, siempre al día. Funciona sin conexión: sigue aprendiendo donde sea y todo se sincroniza automáticamente cuando vuelve la conexión.",
          bg: "#E0F2FF",
          imageBg: "#F0F8FF",
          sticker: "blue",
          icon: "assets/arrows-clockwise.svg",
          iconAlt: "Funciona en todas partes",
          image: "assets/works_everywhere.png",
          imageAlt: "Interfaz de sincronización",
        },
      ],
      cta: { label: "Empieza ahora", href: "#cta", clarityEvent: "features_cta_click" },
    },
    pricing: {
      titleHtml: `Planes simples<br/>Encuentra tu ritmo`,
      cards: [
        {
          name: "Gratis",
          amount: "$0",
          period: "",
          description: "Perfecto para empezar con Fluxo",
          featured: false,
          features: [
            { text: "3 espacios de conocimiento", included: true },
            { text: "Captura por voz y captura de pantalla", included: true },
            { text: "Importa desde Notion, Obsidian, Markdown", included: true },
            { text: "Importación de PDF y archivos (hasta 5 MB)", included: true },
            { text: "5 resúmenes con IA al mes", included: true },
            { text: "Sesiones de entrenamiento y cuestionarios", included: true },
            { text: "Sincronización en todos los dispositivos", included: true },
          ],
          cta: { label: "Empezar gratis", href: "#cta", clarityEvent: "pricing_free_click", variant: "secondary" },
        },
        {
          name: "Premium",
          amount: "$9",
          period: "/ mes",
          description: "Desbloquea toda la experiencia Fluxo",
          featured: true,
          badge: "Más popular",
          features: [
            { text: "Espacios de conocimiento y notas ilimitados", included: true },
            { text: "Importación y exportación sin límites", included: true },
            { text: "Resúmenes, axiomas e ideas clave con IA", included: true },
            { text: "Generación de tarjetas con IA desde cualquier nota", included: true },
            { text: "Repetición espaciada con repaso por activadores", included: true },
            { text: "Congelar racha y metas flexibles", included: true },
            { text: "500 créditos de IA al mes", included: true },
          ],
          cta: { label: "Empezar Premium", href: "#cta", clarityEvent: "pricing_premium_click", variant: "primary" },
        },
        {
          name: "Premium Plus",
          amount: "$20",
          period: "/ mes",
          description: "Suite completa de aprendizaje con IA para quienes van en serio",
          featured: false,
          features: [
            { text: "Todo lo de Premium", included: true },
            { text: "Corrección y explicaciones de respuestas con IA", included: true },
            { text: "Panel de retención y analítica de progreso", included: true },
            { text: "Intervalos de entrenamiento personalizados", included: true },
            { text: "5000 créditos de IA al mes", included: true },
          ],
          cta: {
            label: "Empezar Premium Plus",
            href: "#cta",
            clarityEvent: "pricing_premium_plus_click",
            variant: "secondary",
          },
        },
      ],
    },
    faq: {
      titleHtml: "Preguntas que quizás tengas",
      items: [
        {
          question: "¿Qué es exactamente Fluxo?",
          answer:
            "Fluxo es una app de aprendizaje que te ayuda a recordar de verdad lo que estudias. Combina espacios de conocimiento estructurados, resúmenes con IA y repetición espaciada para convertir la lectura pasiva en memoria activa a largo plazo.",
        },
        {
          question: "¿Fluxo es solo para estudiantes?",
          answer:
            "No. Fluxo es para cualquiera que quiera aprender algo nuevo: ya sea que estudies para un examen, adquieras una habilidad para el trabajo o explores un hobby. Si quieres recordar lo que lees, Fluxo es para ti.",
        },
        {
          question: "¿Cómo me ayuda Fluxo a aprender más rápido y a ser constante?",
          answer:
            `Tú marcas tu propio ritmo: cuánto tiempo a la semana y qué temas te importan. Fluxo se encarga del resto: te recuerda cuándo toca repasar y te da el camino más corto desde «abrir la app» hasta «hecho». Sin decidir qué estudiar ni planificar. Según el tema, Fluxo crea automáticamente un cuestionario, tarjetas o un resumen para releer, así cada sesión se siente distinta y nunca repites el mismo formato dos veces.`,
        },
        {
          question: "¿Puedo usarlo sin conexión o en el móvil?",
          answer:
            "Sí. Fluxo ofrece acceso sin conexión en las apps móviles para iOS y Android. Estés de camino o en una zona sin WiFi, tus notas y repasos están siempre disponibles. Cuando vuelves a conectarte, todo se sincroniza automáticamente.",
        },
        {
          question: "¿Fluxo es gratis?",
          answer:
            "Sí. El plan gratuito incluye 4 espacios de conocimiento, editor de notas, repasos con repetición espaciada y sincronización entre dispositivos. ¿Necesitas más? Premium desbloquea espacios ilimitados, funciones avanzadas y acceso sin conexión.",
        },
      ],
    },
    cta: {
      titleHtml: `¿Listo para recordar de verdad<br/>lo que <strong>aprendes</strong>?`,
      placeholder: "Introduce tu email",
      submit: { label: "Consigue acceso anticipado", href: "#", clarityEvent: "signup_submit" },
      noteHtml: `Los primeros 50 usuarios consiguen un <strong>60% de descuento en Premium Plus</strong>`,
    },
    modal: {
      title: "Aún no hemos lanzado",
      description:
        "Fluxo todavía no está disponible, pero los primeros miembros consiguen descuentos exclusivos de lanzamiento. Déjanos tu email y te avisamos en cuanto lancemos.",
      placeholder: "Introduce tu email",
      submit: "Avísame",
      closeAria: "Cerrar",
    },
    toast: {
      success: "¡Gracias! Estás en la lista de acceso anticipado.",
      error: "Algo salió mal. Inténtalo de nuevo.",
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
          title: "Producto",
          links: [
            { label: "Por qué Fluxo", href: "#why" },
            { label: "Funciones", href: "#features" },
            { label: "Precios", href: "#pricing" },
            { label: "Preguntas frecuentes", href: "#faq" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Sobre nosotros", href: "#" },
            { label: "Contacto", href: "#" },
            { label: "Política de privacidad", href: "/privacy/" },
            { label: "Política de cookies", href: "/cookies/" },
            { label: "Términos del servicio", href: "#" },
          ],
        },
        {
          title: "Centro de conocimiento",
          links: [
            { label: "¿Cómo recordar lo que aprendes?", href: "/es/blog/how-to-remember-what-you-learn/" },
            { label: "¿Cómo aprender sin olvidar?", href: "/es/blog/how-to-learn-without-forgetting/" },
            { label: "La mejor rutina de estudio", href: "/es/blog/best-study-routine/" },
            { label: "El segundo cerebro para aprender", href: "/es/blog/the-second-brain-for-learning/" },
            { label: "¿Cómo medir tu progreso de aprendizaje?", href: "/es/blog/how-to-track-learning-progress/" },
            { label: "La mejor forma de aprender vocabulario", href: "/es/blog/best-way-to-learn-new-vocabulary/" },
            { label: "¿Cómo estudiar trabajando a tiempo completo?", href: "/es/blog/how-to-study-while-working-full-time/" },
          ],
        },
      ],
      consentPreferences: "Preferencias de cookies",
      copyright: `© 2026 ${siteConfig.name}. Todos los derechos reservados`,
    },
    structuredData: {
      description:
        "Fluxo es una app de aprendizaje que combina espacios de conocimiento estructurados, resúmenes con IA y repetición espaciada para convertir la lectura pasiva en memoria activa a largo plazo.",
    },
  },
  de: {
    key: "de",
    lang: "de",
    path: "/de/",
    ogLocale: "de_DE",
    ogLocaleAlternate: "en_US",
    meta: {
      title: `${siteConfig.name} — Schnell lernen, für immer behalten`,
      description:
        "Fluxo verwandelt passives Lesen in aktives Langzeitgedächtnis – mit strukturierten Wissensräumen, KI-Zusammenfassungen und verteiltem Wiederholen. Lerne schnell und halte dein Wissen für immer frisch.",
      ogTitle: `${siteConfig.name} — Schnell lernen, für immer behalten`,
      ogDescription:
        "Halte fest, was du lernst, baue eigene Wissensknoten auf und lass verteiltes Wiederholen die Ideen in deinem Kopf verankern.",
      twitterTitle: `${siteConfig.name} — Schnell lernen, für immer behalten`,
      twitterDescription:
        "Wissensräume, KI-Zusammenfassungen und verteiltes Wiederholen – sie machen aus Lesen bleibende Erinnerung.",
    },
    header: {
      homeAria: `${siteConfig.name} Startseite`,
      nav: [
        { label: "Warum Fluxo", href: "#why" },
        { label: "Funktionen", href: "#features" },
        { label: "Preise", href: "#pricing" },
        { label: "Über uns", href: "#cta" },
      ],
      languageAria: "Sprache wechseln",
      cta: { label: "Loslegen", href: "#cta", clarityEvent: "header_cta_click" },
    },
    hero: {
      titleHtml: `Schnell lernen. <span class="hero-keyword">Wissen</span> für immer frisch halten`,
      text:
        "Hör auf, nur durch fremde Zusammenfassungen zu scrollen. Fluxo erfasst, was du lernst, strukturiert deine eigenen Wissensknoten und plant aktive Wiederholungen, damit sich Ideen wirklich in deinem Kopf verankern.",
      primaryCta: { label: "Kostenlos starten", href: "#cta", clarityEvent: "hero_primary_click" },
      secondaryCta: { label: "So funktioniert's", href: "#features", clarityEvent: "hero_how_it_works" },
      imageAlt: "Fluxo in Aktion",
    },
    whyFluxo: {
      titleHtml: `KI kann alles für dich lesen, doch Lernen passiert in deinem <span class="hero-keyword">Kopf</span>`,
      cards: [
        {
          title: "Alles gespeichert, nichts behalten?",
          desc:
            "Notizen und Lesezeichen – aber ohne strukturiertes Wiederholen kehrst du selten zu ihnen zurück. Wissen braucht Wiederholung, um zu Erinnerung zu werden.",
          image: "assets/card-1.png",
          imageAlt: "Alles gespeichert, nichts behalten?",
        },
        {
          title: "KI ist schnell. Dein Gedächtnis nicht?",
          desc:
            "Sofortiger Zugriff auf Informationen heißt nicht, sie zu verstehen. Lernen braucht Zeit, Wiederholung und kontinuierliche Auseinandersetzung.",
          image: "assets/card-2.png",
          imageAlt: "KI ist schnell. Dein Gedächtnis nicht?",
        },
        {
          title: "Endlose Zusammenfassungen, kein Behalten?",
          desc:
            "Du fasst alles zusammen und weißt nach einer Woche nichts mehr. Echtes Lernen braucht aktives Frage-und-Antwort.",
          image: "assets/card-3.png",
          imageAlt: "Endlose Zusammenfassungen, kein Behalten?",
        },
      ],
    },
    features: {
      titleHtml: `<span class="hero-keyword">Fluxo</span> ersetzt dein Gehirn nicht. Es trainiert es`,
      aiBadge: "KI-Unterstützung",
      streakHtml: `4 Tage<br/>in Folge`,
      catAlt: "Fluxo-Katze",
      leftCards: [
        {
          title: "Lernräume",
          desc:
            "Erstelle einen Raum für jedes Thema – Englisch, Design, Geschichte, Code. Dein Wissen, so organisiert, wie dein Gehirn arbeitet.",
          bg: "#E0E1FF",
          imageBg: "#F1F1FF",
          sticker: "purple",
          icon: "assets/tree-structure.svg",
          iconAlt: "Lernräume",
          image: "assets/Learning_spaces.png",
          imageAlt: "Oberfläche der Lernräume",
        },
        {
          title: "Zusammenfassungen nach deinem Stil",
          desc:
            "Schreibe sie selbst oder nutze eine KI-Vorlage. So oder so hältst du fest, was wichtig ist – mit deinen Worten, zu deinen Bedingungen.",
          bg: "#FEFFC2",
          imageBg: "#FFFEE0",
          sticker: "yellow",
          icon: "assets/pencil-line.svg",
          iconAlt: "Zusammenfassungen",
          image: "assets/summaries _your_way.png",
          imageAlt: "Oberfläche für Zusammenfassungen",
        },
      ],
      rightCards: [
        {
          title: "Smartes Wiederholen & Fortschritt",
          desc:
            "Fluxo erinnert dich genau im richtigen Moment ans Wiederholen. Sieh deine Serien, deine Behaltensquote und echtes Wachstum – Lernen fühlt sich weniger nach Arbeit an, wenn du siehst, wie es wirkt.",
          bg: "#D5FFB7",
          imageBg: "#EAFFDA",
          sticker: "green",
          icon: "assets/trend-up.svg",
          iconAlt: "Smartes Wiederholen",
          image: "assets/smart_repetition.png",
          imageAlt: "Oberfläche für Wiederholungen",
        },
        {
          title: "Funktioniert überall",
          desc:
            "iOS, Android, Web, Desktop. Voll synchronisiert, immer aktuell. Funktioniert offline – lerne überall weiter, alle Updates synchronisieren sich automatisch, sobald die Verbindung wieder da ist.",
          bg: "#E0F2FF",
          imageBg: "#F0F8FF",
          sticker: "blue",
          icon: "assets/arrows-clockwise.svg",
          iconAlt: "Funktioniert überall",
          image: "assets/works_everywhere.png",
          imageAlt: "Oberfläche für Synchronisierung",
        },
      ],
      cta: { label: "Kostenlos starten", href: "#cta", clarityEvent: "features_cta_click" },
    },
    pricing: {
      titleHtml: `Einfache Preispläne<br/>Finde dein Tempo`,
      cards: [
        {
          name: "Kostenlos",
          amount: "0 $",
          period: "",
          description: "Perfekt, um mit Fluxo zu starten",
          featured: false,
          features: [
            { text: "3 Wissensräume", included: true },
            { text: "Sprach- und Screenshot-Erfassung", included: true },
            { text: "Import aus Notion, Obsidian, Markdown", included: true },
            { text: "PDF- und Datei-Import (bis 5 MB)", included: true },
            { text: "5 KI-Zusammenfassungen pro Monat", included: true },
            { text: "Trainingseinheiten & Quizze", included: true },
            { text: "Synchronisation auf allen Geräten", included: true },
          ],
          cta: { label: "Kostenlos starten", href: "#cta", clarityEvent: "pricing_free_click", variant: "secondary" },
        },
        {
          name: "Premium",
          amount: "9 $",
          period: "/ Monat",
          description: "Schalte das volle Fluxo-Erlebnis frei",
          featured: true,
          badge: "Am beliebtesten",
          features: [
            { text: "Unbegrenzte Wissensräume und Notizen", included: true },
            { text: "Import & Export ohne Limits", included: true },
            { text: "KI-Zusammenfassungen, Axiome & Kerneinsichten", included: true },
            { text: "KI-Karteikarten aus jeder Notiz erzeugen", included: true },
            { text: "Verteiltes Wiederholen mit Trigger-basiertem Repeat", included: true },
            { text: "Streak-Freeze & flexible Ziele", included: true },
            { text: "500 KI-Credits/Monat", included: true },
          ],
          cta: { label: "Premium starten", href: "#cta", clarityEvent: "pricing_premium_click", variant: "primary" },
        },
        {
          name: "Premium Plus",
          amount: "20 $",
          period: "/ Monat",
          description: "Komplette KI-Lernsuite für ernsthaft Lernende",
          featured: false,
          features: [
            { text: "Alles aus Premium", included: true },
            { text: "KI-Antwortbewertung & Erklärungen", included: true },
            { text: "Retention-Dashboard & Fortschrittsanalysen", included: true },
            { text: "Eigene Trainingsintervalle", included: true },
            { text: "5.000 KI-Credits/Monat", included: true },
          ],
          cta: {
            label: "Premium Plus starten",
            href: "#cta",
            clarityEvent: "pricing_premium_plus_click",
            variant: "secondary",
          },
        },
      ],
    },
    faq: {
      titleHtml: "Fragen, die du dir vielleicht stellst",
      items: [
        {
          question: "Was genau ist Fluxo?",
          answer:
            "Fluxo ist eine Lern-App, die dir hilft, das Gelernte wirklich zu behalten. Sie verbindet strukturierte Wissensräume, KI-gestützte Zusammenfassungen und verteiltes Wiederholen, um passives Lesen in aktives Langzeitgedächtnis zu verwandeln.",
        },
        {
          question: "Ist Fluxo nur für Studierende?",
          answer:
            "Nein. Fluxo ist für alle, die etwas Neues lernen wollen – ob du dich auf Prüfungen vorbereitest, eine neue Fähigkeit im Job aufbaust oder ein Hobby vertiefst. Wenn du behalten willst, was du liest, ist Fluxo für dich.",
        },
        {
          question: "Wie hilft mir Fluxo, schneller zu lernen und dranzubleiben?",
          answer:
            `Du legst deinen Rhythmus selbst fest – wie viel Zeit pro Woche und welche Themen dir wichtig sind. Den Rest übernimmt Fluxo: Es erinnert dich, wenn es Zeit zum Wiederholen ist, und gibt dir den kürzesten Weg von „App auf“ bis „fertig“. Kein Entscheiden, was du lernen sollst, kein Planen. Je nach Thema erstellt Fluxo automatisch ein Quiz, Karteikarten oder eine Zusammenfassung zum erneuten Lesen – so fühlt sich jede Sitzung anders an und du wiederholst nie zweimal dasselbe Format.`,
        },
        {
          question: "Kann ich es offline oder auf dem Smartphone nutzen?",
          answer:
            "Ja. Fluxo bietet Offline-Zugriff in den mobilen Apps für iOS und Android. Egal ob unterwegs oder ohne WLAN – deine Notizen und Wiederholungen sind immer verfügbar. Sobald du wieder online bist, synchronisiert sich alles automatisch.",
        },
        {
          question: "Ist Fluxo kostenlos?",
          answer:
            "Ja. Der Gratis-Tarif umfasst 4 Wissensräume, den Notiz-Editor, verteilte Wiederholungen und Sync zwischen Geräten. Du brauchst mehr? Premium schaltet unbegrenzte Räume, erweiterte Funktionen und Offline-Zugriff frei.",
        },
      ],
    },
    cta: {
      titleHtml: `Bereit, das Gelernte<br/>wirklich zu <strong>behalten</strong>?`,
      placeholder: "Gib deine E-Mail ein",
      submit: { label: "Frühen Zugang sichern", href: "#", clarityEvent: "signup_submit" },
      noteHtml: `Die ersten 50 Nutzer erhalten <strong>60 % Rabatt auf Premium Plus</strong>`,
    },
    modal: {
      title: "Wir sind noch nicht gestartet",
      description:
        "Fluxo ist noch nicht live – aber die ersten Mitglieder bekommen exklusive Early-Bird-Rabatte. Lass uns deine E-Mail da, und wir melden uns, sobald wir starten.",
      placeholder: "Gib deine E-Mail ein",
      submit: "Benachrichtige mich",
      closeAria: "Schließen",
    },
    toast: {
      success: "Danke! Du bist auf der Early-Access-Liste.",
      error: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
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
          title: "Produkt",
          links: [
            { label: "Warum Fluxo", href: "#why" },
            { label: "Funktionen", href: "#features" },
            { label: "Preise", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ],
        },
        {
          title: "Unternehmen",
          links: [
            { label: "Über uns", href: "#" },
            { label: "Kontakt", href: "#" },
            { label: "Datenschutz", href: "/privacy/" },
            { label: "Cookie-Richtlinie", href: "/cookies/" },
            { label: "Nutzungsbedingungen", href: "#" },
          ],
        },
        {
          title: "Wissens-Hub",
          links: [
            { label: "Wie behältst du, was du lernst?", href: "/de/blog/how-to-remember-what-you-learn/" },
            { label: "Wie lernen, ohne zu vergessen?", href: "/de/blog/how-to-learn-without-forgetting/" },
            { label: "Die beste Lernroutine", href: "/de/blog/best-study-routine/" },
            { label: "Das zweite Gehirn fürs Lernen", href: "/de/blog/the-second-brain-for-learning/" },
            { label: "Wie verfolgst du deinen Lernfortschritt?", href: "/de/blog/how-to-track-learning-progress/" },
            { label: "Der beste Weg, neue Vokabeln zu lernen", href: "/de/blog/best-way-to-learn-new-vocabulary/" },
            { label: "Wie lernen neben einem Vollzeitjob?", href: "/de/blog/how-to-study-while-working-full-time/" },
          ],
        },
      ],
      consentPreferences: "Cookie-Einstellungen",
      copyright: `© 2026 ${siteConfig.name}. Alle Rechte vorbehalten`,
    },
    structuredData: {
      description:
        "Fluxo ist eine Lern-App, die strukturierte Wissensräume, KI-Zusammenfassungen und verteiltes Wiederholen kombiniert, um passives Lesen in aktives Langzeitgedächtnis zu verwandeln.",
    },
  },
} satisfies Record<LocaleKey, LandingContent>;

export const localeMeta: Record<LocaleKey, { code: string; name: string }> = {
  en: { code: "EN", name: "English" },
  uk: { code: "UA", name: "Українська" },
  es: { code: "ES", name: "Español" },
  de: { code: "DE", name: "Deutsch" },
};

const localeOrder: LocaleKey[] = ["en", "uk", "es", "de"];

export type LanguageOption = {
  locale: LocaleKey;
  code: string;
  name: string;
  href: string;
};

const buildLanguageNav = (hrefFor: (locale: LocaleKey) => string): LanguageOption[] =>
  localeOrder.map((locale) => ({
    locale,
    code: localeMeta[locale].code,
    name: localeMeta[locale].name,
    href: hrefFor(locale),
  }));

export const landingLanguageNav = (): LanguageOption[] =>
  buildLanguageNav((locale) => landingContent[locale].path);

export type BlogArticle = {
  routePath: string;
  heroAsset: string;
  heroAlt: string;
  meta: {
    title: string;
    description: string;
  };
  category: string;
  title: string;
  subtitle: string;
  author: string;
  readTime: string;
  bodyHtml: string;
};

export type BlogSlug =
  | "best-study-routine"
  | "best-way-to-learn-new-vocabulary"
  | "how-to-study-while-working-full-time"
  | "the-second-brain-for-learning"
  | "how-to-learn-without-forgetting"
  | "how-to-remember-what-you-learn"
  | "how-to-track-learning-progress";

export const blogContent = {
  en: {
    "best-study-routine": {
      routePath: "/blog/best-study-routine/",
      heroAsset: "assets/card-3.png",
      heroAlt: "Best study routine",
      meta: {
        title: "Best Study Routine — Fluxo",
        description:
          "Most people build a study routine the wrong way. They pick a time, open their notes, and start reading. That's not a routine. It's just a habit of sitting near a book.",
      },
      category: "Knowledge Hub",
      title: "Best Study Routine",
      subtitle:
        "Most people build a study routine the wrong way. They pick a time, open their notes, and start reading. That's not a routine. It's just a habit of sitting near a book.",
      author: "Fluxo Team",
      readTime: "5 min read",
      bodyHtml: `
        <p>A real study routine is designed around how the brain encodes and stores information. The schedule matters. So does what you do during each session.</p>
        <hr class="article-rule" />
        <h2>What Makes a Routine Actually Work</h2>
        <p><strong>Consistency beats duration</strong></p>
        <p>One hour a day, every day, outperforms a six-hour session on Sunday. This isn't a motivational claim — it's how memory consolidation works. Sleep plays a critical role in moving information from short-term to long-term memory, and that process needs time between sessions. Reviewing material across multiple days gives the brain repeated opportunities to consolidate it.</p>
        <p><strong>Match the session to the cognitive demand</strong></p>
        <p>Not all tasks are equal. Learning something new requires more cognitive effort than reviewing something you already partially know. Research on circadian rhythms shows that most people have a natural peak in alertness and working memory during the mid-morning. Saving that window for your hardest material, and doing lighter review during lower-energy periods, makes the same amount of time more effective.</p>
        <p><strong>Use implementation intentions</strong></p>
        <p>Peter Gollwitzer's research at NYU, <a href="https://doi.org/10.1002/ejsp.345" target="_blank" rel="noopener">summarized in a 2006 meta-analysis with Sheeran</a>, found a medium-to-large effect on goal follow-through when people formed specific "if-then" plans: "If it is 8pm on a weekday, I will do 20 minutes of review at my desk." The specificity removes the daily decision of whether and when to study. You don't negotiate with yourself — you just follow the plan.</p>
        <hr class="article-rule" />
        <h2>A Simple Structure That Works</h2>
        <p>A routine built around these principles has three parts:</p>
        <p><strong>Morning (10 to 20 minutes):</strong> Review what you learned yesterday before your brain fully shifts into the day. This is when spaced repetition does its best work — the material was recently consolidated overnight and reviewing it now sets a longer interval before the next review.</p>
        <p><strong>Active learning block (25 to 45 minutes):</strong> This is your main session. New material, difficult topics, writing in your own words, or solving problems. No re-reading. Test yourself, summarize from memory, connect ideas.</p>
        <p><strong>End-of-day capture (5 minutes):</strong> Write down anything new you encountered during the day worth keeping. A term, a concept, an insight from a meeting. It takes five minutes and keeps the input loop open without requiring another full study session.</p>
        <hr class="article-rule" />
        <h2>The Part Most Routines Skip</h2>
        <p>Building the schedule is the easy part. The hard part is the system that runs between sessions. Knowing what to review tomorrow, keeping track of what's due, not letting older material slip.</p>
        <p><strong><a href="/">Fluxo</a></strong> does that automatically. You focus on the learning. Fluxo tracks what needs reviewing and when, so your routine stays consistent without requiring you to manage it manually.</p>
        <p>A good study routine doesn't need to be complicated. It needs to be consistent and designed around how the brain actually works.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Start for free</button>
      `,
    },
    "best-way-to-learn-new-vocabulary": {
      routePath: "/blog/best-way-to-learn-new-vocabulary/",
      heroAsset: "assets/card-3.png",
      heroAlt: "Best way to learn new vocabulary",
      meta: {
        title: "Best Way to Learn New Vocabulary — Fluxo",
        description:
          "Whether you're learning a foreign language, picking up technical terms for a new job, or building domain knowledge in medicine, law, or design — vocabulary is the foundation.",
      },
      category: "Knowledge Hub",
      title: "Best Way to Learn New Vocabulary",
      subtitle:
        "Whether you're learning a foreign language, picking up technical terms for a new job, or building domain knowledge in medicine, law, or design — vocabulary is the foundation.",
      author: "Fluxo Team",
      readTime: "4 min read",
      bodyHtml: `
        <p>The question is which method actually works, and why most don't.</p>
        <hr class="article-rule" />
        <h2>Why Rote Memorization Fails</h2>
        <p>Writing a word ten times and hoping it sticks is about as effective as reading it ten times. Both are passive. Your brain files the information as low-priority because you haven't done anything demanding with it.</p>
        <p>The illusion of progress is part of the problem. After enough repetitions, a word starts to look familiar. Familiarity feels like knowing. But familiarity only activates recognition, not recall. You might recognize the word when you see it and have no idea what it means when you need to produce it.</p>
        <hr class="article-rule" />
        <h2>What the Research Shows</h2>
        <p><strong>Spaced repetition is the most effective method for vocabulary retention</strong></p>
        <p>A 2022 meta-analysis by Kim and Webb, published in <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/lang.12479" target="_blank" rel="noopener"><em>Language Learning</em></a>, analyzed 48 experiments involving over 3,400 participants learning second-language vocabulary. The finding was clear: spaced practice consistently outperformed massed practice for long-term retention. Reviewing words at increasing intervals, rather than in one sitting, produces significantly better recall over time.</p>
        <p><strong>Active recall beats passive exposure</strong></p>
        <p>Seeing a word and its definition is passive. Being shown the definition and having to produce the word is active. That retrieval effort, even when you get it wrong, builds a stronger memory trace than any amount of passive review. This is the same testing effect documented by <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Roediger and Karpicke</a> that applies to all learning, and it's especially powerful for vocabulary.</p>
        <p><strong>Context matters</strong></p>
        <p>Isolated flashcards work better than re-reading word lists, but they work even better when the word is connected to something meaningful — an example sentence, a real use case, a concept you already understand. Vocabulary learned in context is more durable and more usable than vocabulary learned as an abstract symbol.</p>
        <hr class="article-rule" />
        <h2>Practical Application</h2>
        <p>The best approach combines all three:</p>
        <ol>
          <li>Learn the word with context, not just a definition</li>
          <li>Test yourself on it from the first session, before you feel ready</li>
          <li>Review it again at increasing intervals, not all at once</li>
        </ol>
        <p>This works for any vocabulary — not just foreign language. Technical terms, domain-specific concepts, and professional jargon all follow the same rules.</p>
        <hr class="article-rule" />
        <h2>Making It Stick Without the Overhead</h2>
        <p>The hard part isn't knowing the method. It's maintaining the spaced review system across hundreds of words without it becoming a full-time job.</p>
        <p><strong><a href="/">Fluxo</a></strong> handles this automatically. You add vocabulary to your space — words, definitions, context sentences — and Fluxo schedules your reviews. You spend a few minutes a day on retrieval practice, and the system tracks which words are solid and which need more attention.</p>
        <p>The science on vocabulary retention is clear. The execution is what usually breaks down. Fluxo makes the execution automatic.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Start for free</button>
      `,
    },
    "how-to-study-while-working-full-time": {
      routePath: "/blog/how-to-study-while-working-full-time/",
      heroAsset: "assets/card-1.png",
      heroAlt: "How to study while working full time",
      meta: {
        title: "How to Study While Working Full Time — Fluxo",
        description:
          "You want to learn something new. A language, a skill, a subject that matters for your career or just for you. And you have maybe 45 minutes a day, if everything goes right.",
      },
      category: "Knowledge Hub",
      title: "How to Study While Working Full Time?",
      subtitle:
        "You want to learn something new. A language, a skill, a subject that matters for your career or just for you. And you have maybe 45 minutes a day, if everything goes right.",
      author: "Fluxo Team",
      readTime: "5 min read",
      bodyHtml: `
        <p>That's actually enough. But only if you use it differently than students do.</p>
        <hr class="article-rule" />
        <h2>The Wrong Model</h2>
        <p>Most study advice is built for students with four-hour blocks, exam deadlines, and learning as a primary job. When you're working full time, that model doesn't just fail — it sets you up to feel like you're always behind.</p>
        <p>Trying to recreate a student schedule in the gaps of an adult life usually means one focused weekend attempt followed by two weeks of nothing. The inconsistency kills retention faster than any lack of talent.</p>
        <hr class="article-rule" />
        <h2>Why Shorter, More Frequent Sessions Work Better</h2>
        <p>The research on this is direct. <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">Cepeda et al.'s 2006 meta-analysis</a> in <em>Psychological Bulletin</em> showed that distributing learning across multiple sessions produces better retention than the same total time spent in a single sitting. This isn't just a convenience — it's a structural advantage for people with limited daily windows.</p>
        <p>Short daily sessions also match how memory consolidation works. Sleep processes and reinforces what you learned during the day. If you study for 20 minutes tonight and sleep, your brain will work on that material while you rest. Seven 20-minute sessions across a week will produce better retention than one 140-minute session on Saturday.</p>
        <p>This approach even has a name in learning research: microlearning. A <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1491265/full" target="_blank" rel="noopener">review published in <em>Frontiers in Psychology</em> (2025)</a> found microlearning effective for developing knowledge and skills in time-constrained contexts — exactly the situation of working professionals.</p>
        <hr class="article-rule" />
        <h2>A Realistic Daily Structure</h2>
        <p><strong>10 to 15 minutes in the morning:</strong> Spaced repetition review. Go through what Fluxo or your app says is due. This catches material before it fades and works with the memory consolidation that happened overnight.</p>
        <p><strong>20 to 30 minutes in the evening:</strong> One focused learning session. New material, reading with active annotation, or working through a concept. No multitasking. Notifications off.</p>
        <p>That's it. 30 to 45 minutes total, no large blocks required.</p>
        <p>The key is protecting those two windows. Not expanding them — protecting them. Consistency over volume.</p>
        <hr class="article-rule" />
        <h2>The System Matters More Than Motivation</h2>
        <p>The hardest part of studying while working full time isn't finding time. It's making sure that the time you do find is used on the right things. Without a system telling you what to review and what to learn next, you default to starting over, covering the same ground, or just reading passively.</p>
        <p><strong><a href="/">Fluxo</a></strong> gives working learners a system that runs itself. You add what you're learning, the AI generates summaries so you spend less time understanding and more time training, and every day Fluxo shows you exactly what to review in the time you have.</p>
        <p>You don't need hours. You need a system that works in minutes.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Start for free</button>
      `,
    },
    "the-second-brain-for-learning": {
      routePath: "/blog/the-second-brain-for-learning/",
      heroAsset: "assets/card-1.png",
      heroAlt: "The second brain for learning",
      meta: {
        title: "The Second Brain for Learning — Fluxo",
        description:
          "Every year you read dozens of articles, take courses, listen to podcasts, and sit through meetings full of useful information. And every year, almost none of it is available when you actually need it.",
      },
      category: "Knowledge Hub",
      title: "The Second Brain for Learning",
      subtitle:
        "Every year you read dozens of articles, take courses, listen to podcasts, and sit through meetings full of useful information. And every year, almost none of it is available when you actually need it.",
      author: "Fluxo Team",
      readTime: "4 min read",
      bodyHtml: `
        <p>Not because you're forgetful. Because you have no system for keeping it.</p>
        <hr class="article-rule" />
        <h2>Where the Idea Comes From</h2>
        <p>The term "second brain" was coined by productivity researcher Tiago Forte. The core idea is simple: your biological brain is built for thinking and creating, not storing. When you try to use it as a hard drive — holding onto every article, fact, and idea — you create mental clutter and still lose most of it.</p>
        <p>A second brain is an external system, usually digital, where you capture, organize, and revisit what you've learned. Forte describes the process as CODE: Capture, Organize, Distill, Express. The goal isn't to archive everything. It's to keep the ideas that matter alive long enough to use them.</p>
        <p>The concept isn't new. Commonplace books — personal collections of notes, quotes, and ideas — have been used by thinkers and writers for centuries. Digital tools just make the system faster and more searchable.</p>
        <hr class="article-rule" />
        <h2>The Gap Most Second Brains Have</h2>
        <p>Here's the problem with most note-taking systems: they're passive.</p>
        <p>Notion, Obsidian, Evernote — all excellent tools for capturing and organizing. But capturing information is not the same as learning it. You can have 2,000 perfectly tagged notes and still remember almost none of them, because you never went back to actively recall any of it.</p>
        <p>A useful second brain for learning needs two things most systems don't have: active review and spaced repetition. Not just storage. Training.</p>
        <p>Research by Roediger and Karpicke at Washington University <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">published in 2006</a> showed that retrieving information from memory produces far better long-term retention than re-reading it. The brain keeps what it practices pulling up.</p>
        <hr class="article-rule" />
        <h2>What an Active Second Brain Looks Like</h2>
        <p>An effective second brain for learning does four things:</p>
        <p><strong>Captures</strong> what you encounter — articles, notes, terms, ideas — without friction. The lower the barrier to entry, the more you actually use it.</p>
        <p><strong>Organizes</strong> by topic, not by source. When everything from the same subject lives together, connections emerge naturally.</p>
        <p><strong>Distills</strong> the key points. Not every word of every article. The one or two ideas you'd actually want to remember in a year.</p>
        <p><strong>Trains</strong> your memory on those distilled ideas at increasing intervals, so you move from storing knowledge to actually owning it.</p>
        <hr class="article-rule" />
        <h2>How Fluxo Fits In</h2>
        <p><strong><a href="/">Fluxo</a></strong> is built as an active second brain. You add what you're learning, AI generates a summary of the key ideas, and then Fluxo schedules short review sessions based on spaced repetition — so you test yourself on the material at the right intervals, not just browse it.</p>
        <p>The difference between a note-taking app and Fluxo is the difference between writing something on a piece of paper and actually practicing it. Both capture. Only one trains you.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Start for free</button>
      `,
    },
    "how-to-learn-without-forgetting": {
      routePath: "/blog/how-to-learn-without-forgetting/",
      heroAsset: "assets/card-2.png",
      heroAlt: "How to learn without forgetting",
      meta: {
        title: "How to Learn Without Forgetting — Fluxo",
        description:
          "You finish a book. You sit through a webinar. You save a dozen articles. And somewhere between the last page and real life, almost everything disappears.",
      },
      category: "Knowledge Hub",
      title: "How to Learn Without Forgetting?",
      subtitle:
        "You finish a book. You sit through a webinar. You save a dozen articles. And somewhere between the last page and real life, almost everything disappears.",
      author: "Fluxo Team",
      readTime: "4 min read",
      bodyHtml: `
        <p>This isn't laziness. The brain isn't built to hold raw information indefinitely. It stores what it uses and discards what it doesn't. The question isn't how to read more. It's how to make your brain treat new information as worth keeping.</p>
        <hr class="article-rule" />
        <h2>The Real Problem: Passive Consumption Feels Like Learning</h2>
        <p>Re-reading notes, highlighting text, watching lectures twice — these feel productive. Research shows they're mostly not.</p>
        <p>A 2019 review published in <em>Frontiers in Education</em> summarized decades of classroom studies: reading a text over and over creates a false sense of familiarity. Students feel like they know the material because it looks familiar, but that recognition doesn't translate into actual recall when they need it. Familiarity and memory are different things.</p>
        <p>The fix requires active processing, not more passive exposure.</p>
        <hr class="article-rule" />
        <h2>What Actually Prevents Forgetting</h2>
        <p><strong>Test yourself, don't re-read</strong></p>
        <p>The single most effective thing you can do is try to recall information from memory before you feel ready. This is called retrieval practice, and it works because the act of pulling something from memory, even when you struggle, strengthens the neural pathway that holds it.</p>
        <p>Roediger and Karpicke at Washington University showed this clearly in <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">their 2006 study</a>: students who tested themselves after reading retained far more one week later than students who simply re-read the same material, even though both groups spent the same total time.</p>
        <p><strong>Space your reviews out</strong></p>
        <p>Reviewing something once and moving on almost guarantees you'll forget it. Reviewing it again right before it fades — and then again at a longer interval — is what actually builds long-term retention. <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">Cepeda et al.'s meta-analysis of 254 studies</a>, published in <em>Psychological Bulletin</em>, confirmed that spreading practice over time consistently outperforms any amount of cramming.</p>
        <p><strong>Connect new knowledge to what you already know</strong></p>
        <p>When you learn something, ask yourself how it relates to things you already understand. This forces your brain to process the new information more deeply, not just store it as an isolated fact. Dunlosky and colleagues at Kent State rated this — elaborative interrogation — among the <a href="https://journals.sagepub.com/doi/10.1177/1529100612453266" target="_blank" rel="noopener">most effective learning strategies</a> in their 2013 review.</p>
        <hr class="article-rule" />
        <h2>The Consistency Problem</h2>
        <p>These three techniques work. The problem is doing them consistently across every topic you're learning, without forgetting what needs to be reviewed and when.</p>
        <p><strong><a href="/">Fluxo</a></strong> handles the system side. You capture what you're learning, the AI pulls out the key ideas, and Fluxo schedules review sessions at the right intervals. You show up for 10 minutes, do the work, and the rest runs itself.</p>
        <p>Learning without forgetting isn't magic. It's a system. And systems work best when they don't depend on willpower alone.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Start for free</button>
      `,
    },
    "how-to-remember-what-you-learn": {
      routePath: "/blog/how-to-remember-what-you-learn/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Notes and memory",
      meta: {
        title: "How to Remember What You Learn — Fluxo",
        description:
          "You read. You finish a course. You take notes. And a week later it's gone. This isn't a memory problem — it's a system problem.",
      },
      category: "Knowledge Hub",
      title: "How to Remember What You Learn?",
      subtitle:
        "You read an article. You finish a course. You take notes. And a week later it's gone.",
      author: "Fluxo Team",
      readTime: "6 min read",
      bodyHtml: `
        <p>This isn't a memory problem. It's a system problem. Most people consume information without building a process to actually keep it. Here's what the science says, and what works.</p>
        <hr class="article-rule" />
        <h2>Why You Forget So Fast</h2>
        <p>In 1885, German psychologist Hermann Ebbinghaus became the first to study memory scientifically. He spent years memorizing lists of nonsense syllables, then measured how quickly he could recall them after different time intervals. What he found became known as the <strong>Forgetting Curve</strong>: memory drops steeply right after learning, then levels off. Without any review, we forget 50 to 70% of new information within a single day.</p>
        <p>In 2015, Murre and Dros published a direct replication of Ebbinghaus's original experiments in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4492928/" target="_blank" rel="noopener">PLOS ONE</a> and arrived at nearly identical numbers, over 130 years later. It's one of the most replicated findings in cognitive psychology.</p>
        <p>The curve isn't a personal failure. It's just how the brain works by default. The good news: three techniques directly counter it.</p>
        <hr class="article-rule" />
        <h2>3 Techniques That Actually Work</h2>
        <h3>1. Active Recall</h3>
        <p>Instead of re-reading your notes, close them and try to pull the information from memory. Even struggling to remember strengthens neural connections more than passive review.</p>
        <p>In 2006, Henry Roediger and Jeffrey Karpicke at Washington University ran a now-classic experiment. Students either re-read a passage multiple times or tested themselves on it. On an immediate test, re-reading performed slightly better. But one week later, the self-testing group retained significantly more. Their paper, <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Test-Enhanced Learning</a>, published in <em>Psychological Science</em>, concluded that testing yourself isn't just a way to check what you know. It's one of the most effective ways to learn in the first place.</p>
        <h3>2. Spaced Repetition</h3>
        <p>Reviewing material right before you're about to forget it works far better than reviewing it several times on the same day. Researchers call this the spacing effect, and it has been studied for over a century.</p>
        <p>In 2006, Nicholas Cepeda and colleagues at UC San Diego published a <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">meta-analysis of 254 studies</a> involving over 14,000 observations in <em>Psychological Bulletin</em>. The finding was clear: spreading practice over time consistently produced better long-term retention than cramming the same amount of practice into a single session. The right gap between reviews depends on how long you need to remember the material. The longer the goal, the longer the intervals should be.</p>
        <h3>3. Elaborative Interrogation</h3>
        <p>When you learn something new, ask yourself <em>why</em> it's true and how it connects to things you already know. This forces deeper processing and anchors new knowledge to your existing understanding rather than leaving it isolated. A <a href="https://journals.sagepub.com/doi/10.1177/1529100612453266" target="_blank" rel="noopener">2013 review by Dunlosky and colleagues</a> at Kent State University rated this among the most effective learning strategies, alongside retrieval practice and spaced repetition.</p>
        <hr class="article-rule" />
        <h2>Why Most People Skip All Three</h2>
        <p>Because doing them manually is painful.</p>
        <p>Tracking what to review and when, across multiple topics, articles, and notes, quickly becomes a chore that most people drop within a week. The techniques work. The friction around them doesn't.</p>
        <hr class="article-rule" />
        <h2>The Simpler Way</h2>
        <p><strong><a href="/">Fluxo</a></strong> is built around exactly these three principles. You save what you're learning — articles, notes, vocabulary, ideas — and organize it by topic. The AI generates a quick summary so you understand the material faster. Then Fluxo schedules short training sessions at the right intervals, so you review each item when your brain actually needs it.</p>
        <p>No spreadsheets. No manual tracking. Just 5 to 15 minutes a day, and you actually remember what you learn.</p>
        <p>The science has been clear for over a century. The hard part was always doing it consistently. That's the problem Fluxo solves.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Start for free</button>
      `,
    },
    "how-to-track-learning-progress": {
      routePath: "/blog/how-to-track-learning-progress/",
      heroAsset: "assets/card-2.png",
      heroAlt: "How to track learning progress",
      meta: {
        title: "How to Track Learning Progress — Fluxo",
        description:
          "Most people measure learning the wrong way. They count hours spent studying, books finished, or pages read. These numbers feel meaningful but they measure input, not output.",
      },
      category: "Knowledge Hub",
      title: "How to Track Learning Progress?",
      subtitle:
        "Most people measure learning the wrong way. They count hours spent studying, books finished, or pages read. These numbers feel meaningful but they measure input, not output.",
      author: "Fluxo Team",
      readTime: "4 min read",
      bodyHtml: `
        <p>The real question is: how much do you actually retain?</p>
        <hr class="article-rule" />
        <h2>Why Most Tracking Fails</h2>
        <p>Time spent studying has almost no correlation with how much you remember. A 2006 study by <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Roediger and Karpicke at Washington University</a> demonstrated this directly: two groups of students spent identical time with the same material. One group re-read it. The other tested themselves. A week later, the self-testing group remembered significantly more, even though they "studied" less in the traditional sense.</p>
        <p>Hours logged doesn't tell you whether learning happened. Recall does.</p>
        <hr class="article-rule" />
        <h2>What's Actually Worth Measuring</h2>
        <p><strong>Retention rate</strong></p>
        <p>Can you retrieve this information without looking at it? That's the only metric that matters for long-term learning. Everything else — time, completion, highlights — is a proxy that often misleads you into thinking you've learned more than you have.</p>
        <p><strong>Recall difficulty over time</strong></p>
        <p>How hard is it to remember something after one day? After one week? After one month? If recall gets easier over time with shorter sessions, the knowledge is consolidating. If it stays hard, you need more repetition or a different approach. Tracking this across topics gives you real signal about what's working.</p>
        <p><strong>Gaps, not just wins</strong></p>
        <p>Most progress tracking shows you what you've completed. More useful is tracking what you've forgotten or gotten wrong. A system that surfaces your weakest areas and prioritizes them in review sessions is more valuable than one that tracks streaks and badges.</p>
        <hr class="article-rule" />
        <h2>The Problem With Manual Tracking</h2>
        <p>You can build a spreadsheet to track all of this. Some people do. Most stop after two weeks because maintaining it takes as much energy as the learning itself.</p>
        <p>The value of tracking learning progress is real — MIT's Teaching and Learning Lab <a href="https://tll.mit.edu/teaching-resources/how-people-learn/metacognition/" target="_blank" rel="noopener">notes that metacognitive monitoring</a> significantly improves learning outcomes. Knowing where you are, what's fading, and what needs attention lets you direct your effort where it matters. But that only works if the tracking is automatic.</p>
        <hr class="article-rule" />
        <h2>What Automatic Progress Tracking Looks Like</h2>
        <p><strong><a href="/">Fluxo</a></strong> tracks retention by measuring how you perform during each review session. Every time you recall something correctly or struggle with it, Fluxo adjusts its model of what you know. Over time, you can see your retention rate by topic — not how many notes you have, but how much of that material you can actually recall.</p>
        <p>This turns progress tracking from a chore into something that just happens as you learn. You study, Fluxo measures, and at any point you can see clearly which subjects are solid and which need more work.</p>
        <p>Learning without tracking is flying blind. Tracking without recall measurement tells you the wrong things. Fluxo does both.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Start for free</button>
      `,
    },
  },
  uk: {
    "best-study-routine": {
      routePath: "/uk/blog/best-study-routine/",
      heroAsset: "assets/card-3.png",
      heroAlt: "Найкращий розклад навчання",
      meta: {
        title: "Найкращий розклад навчання — Fluxo",
        description:
          "Більшість людей вибудовують розклад навчання неправильно. Обирають час, відкривають нотатки й починають читати. Це не розклад. Це просто звичка сидіти біля книжки.",
      },
      category: "База знань",
      title: "Найкращий розклад навчання",
      subtitle:
        "Більшість людей вибудовують розклад навчання неправильно. Обирають час, відкривають нотатки й починають читати. Це не розклад. Це просто звичка сидіти біля книжки.",
      author: "Команда Fluxo",
      readTime: "5 хв читання",
      bodyHtml: `
        <p>Справжній розклад навчання будується навколо того, як мозок кодує та зберігає інформацію. Графік важливий. Як і те, що ти робиш під час кожної сесії.</p>
        <hr class="article-rule" />
        <h2>Завдяки чому розклад справді працює</h2>
        <p><strong>Регулярність важливіша за тривалість</strong></p>
        <p>Одна година щодня випереджає шестигодинну сесію в неділю. Це не мотиваційне гасло — так працює консолідація пам'яті. Сон відіграє критичну роль у переведенні інформації з короткочасної в довготривалу пам'ять, і цьому процесу потрібен час між сесіями. Повторення матеріалу впродовж кількох днів дає мозку повторні можливості його закріпити.</p>
        <p><strong>Підлаштовуй сесію під когнітивне навантаження</strong></p>
        <p>Не всі завдання однакові. Вивчення нового потребує більше когнітивних зусиль, ніж повторення того, що ти вже частково знаєш. Дослідження циркадних ритмів показують, що в більшості людей природний пік уважності та робочої пам'яті припадає на середину ранку. Якщо лишити це вікно для найскладнішого матеріалу, а легше повторення робити в періоди зниженої енергії, той самий час стає ефективнішим.</p>
        <p><strong>Використовуй імплементаційні наміри</strong></p>
        <p>Дослідження Пітера Ґолльвіцера в Нью-Йоркському університеті, <a href="https://doi.org/10.1002/ejsp.345" target="_blank" rel="noopener">узагальнене в метааналізі 2006 року разом із Шираном</a>, виявило середній-сильний ефект на досягнення цілей, коли люди формулювали конкретні плани «якщо — то»: «Якщо це 20:00 у будній день, я 20 хвилин повторюю за робочим столом». Конкретність прибирає щоденне рішення, чи й коли вчитися. Ти не торгуєшся із собою — ти просто виконуєш план.</p>
        <hr class="article-rule" />
        <h2>Проста структура, що працює</h2>
        <p>Розклад, побудований на цих принципах, має три частини:</p>
        <p><strong>Ранок (10–20 хвилин):</strong> повтори те, що вивчив учора, перш ніж мозок повністю зануриться в день. Саме тоді інтервальне повторення працює найкраще — матеріал щойно закріпився за ніч, і повторення зараз задає довший інтервал до наступного разу.</p>
        <p><strong>Блок активного навчання (25–45 хвилин):</strong> це твоя основна сесія. Новий матеріал, складні теми, виклад своїми словами чи розв'язування задач. Жодного перечитування. Перевіряй себе, конспектуй з пам'яті, поєднуй ідеї.</p>
        <p><strong>Фіксація наприкінці дня (5 хвилин):</strong> запиши все нове, що трапилося за день і варте збереження. Термін, концепт, інсайт із наради. Це займає п'ять хвилин і тримає потік знань відкритим, не вимагаючи ще однієї повноцінної сесії.</p>
        <hr class="article-rule" />
        <h2>Частина, яку пропускає більшість розкладів</h2>
        <p>Скласти графік — легко. Складне — це система, що працює між сесіями. Знати, що повторити завтра, відстежувати, чому настав час, і не дати старішому матеріалу вислизнути.</p>
        <p><strong><a href="/uk/">Fluxo</a></strong> робить це автоматично. Ти зосереджуєшся на навчанні. Fluxo відстежує, що і коли треба повторити, тож твій розклад лишається стабільним без ручного керування.</p>
        <p>Хороший розклад навчання не має бути складним. Він має бути послідовним і побудованим навколо того, як насправді працює мозок.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Почати безкоштовно</button>
      `,
    },
    "best-way-to-learn-new-vocabulary": {
      routePath: "/uk/blog/best-way-to-learn-new-vocabulary/",
      heroAsset: "assets/card-3.png",
      heroAlt: "Найкращий спосіб вчити нові слова",
      meta: {
        title: "Найкращий спосіб вчити нові слова — Fluxo",
        description:
          "Чи то ти вивчаєш іноземну мову, опановуєш технічні терміни для нової роботи, чи будуєш фахові знання в медицині, праві або дизайні — словниковий запас є основою.",
      },
      category: "База знань",
      title: "Найкращий спосіб вчити нові слова",
      subtitle:
        "Чи то ти вивчаєш іноземну мову, опановуєш технічні терміни для нової роботи, чи будуєш фахові знання в медицині, праві або дизайні — словниковий запас є основою.",
      author: "Команда Fluxo",
      readTime: "4 хв читання",
      bodyHtml: `
        <p>Питання в тому, який метод справді працює і чому більшість — ні.</p>
        <hr class="article-rule" />
        <h2>Чому механічне зубріння не працює</h2>
        <p>Написати слово десять разів і сподіватися, що воно засвоїться, приблизно так само ефективно, як прочитати його десять разів. І те, й те — пасивне. Мозок відкладає цю інформацію як низькопріоритетну, бо ти не зробив із нею нічого складного.</p>
        <p>Ілюзія прогресу — частина проблеми. Після достатньої кількості повторень слово починає здаватися знайомим. Знайомість відчувається як знання. Але знайомість активує лише впізнавання, а не пригадування. Ти можеш упізнати слово, коли його бачиш, і не мати уявлення, що воно означає, коли треба його відтворити.</p>
        <hr class="article-rule" />
        <h2>Що показують дослідження</h2>
        <p><strong>Інтервальне повторення — найефективніший метод для запам'ятовування слів</strong></p>
        <p>Метааналіз 2022 року, проведений Кімом і Веббом і опублікований у <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/lang.12479" target="_blank" rel="noopener"><em>Language Learning</em></a>, охопив 48 експериментів за участю понад 3400 людей, які вивчали лексику другої мови. Висновок був однозначний: інтервальна практика стабільно перевершувала концентровану в довготривалому запам'ятовуванні. Повторення слів зі зростаючими інтервалами, а не за один присід, дає помітно краще пригадування з часом.</p>
        <p><strong>Активне пригадування перевершує пасивний контакт</strong></p>
        <p>Бачити слово та його визначення — пасивно. Побачити визначення й мусити відтворити слово — активно. Це зусилля пригадування, навіть коли ти помиляєшся, формує міцніший слід у пам'яті, ніж будь-яка кількість пасивного повторення. Це той самий ефект тестування, задокументований <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Редіґером і Карпіке</a>, який стосується всього навчання й особливо потужний для лексики.</p>
        <p><strong>Контекст має значення</strong></p>
        <p>Окремі картки працюють краще, ніж перечитування списків слів, але ще краще вони працюють, коли слово пов'язане з чимось значущим — прикладом речення, реальним випадком вживання, поняттям, яке ти вже розумієш. Лексика, вивчена в контексті, тримається довше й використовується легше, ніж вивчена як абстрактний символ.</p>
        <hr class="article-rule" />
        <h2>Практичне застосування</h2>
        <p>Найкращий підхід поєднує всі три:</p>
        <ol>
          <li>Вивчай слово з контекстом, а не лише з визначенням</li>
          <li>Перевіряй себе на ньому з першої ж сесії, ще до того, як відчуєш готовність</li>
          <li>Повторюй його знову зі зростаючими інтервалами, а не все за раз</li>
        </ol>
        <p>Це працює для будь-якої лексики — не лише іноземної. Технічні терміни, фахові поняття та професійний жаргон підкоряються тим самим правилам.</p>
        <hr class="article-rule" />
        <h2>Як закріпити це без зайвих зусиль</h2>
        <p>Складність не в тому, щоб знати метод. А в тому, щоб підтримувати систему інтервального повторення для сотень слів так, щоб це не перетворилося на повноцінну роботу.</p>
        <p><strong><a href="/uk/">Fluxo</a></strong> робить це автоматично. Ти додаєш лексику у свій простір — слова, визначення, речення з контекстом — а Fluxo планує повторення. Ти витрачаєш кілька хвилин на день на практику пригадування, а система відстежує, які слова вже міцні, а яким потрібно більше уваги.</p>
        <p>Наука про запам'ятовування слів зрозуміла. Зазвичай ламається саме виконання. Fluxo робить виконання автоматичним.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Почати безкоштовно</button>
      `,
    },
    "how-to-study-while-working-full-time": {
      routePath: "/uk/blog/how-to-study-while-working-full-time/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Як вчитися, працюючи на повну ставку",
      meta: {
        title: "Як вчитися, працюючи на повну ставку — Fluxo",
        description:
          "Ти хочеш вивчити щось нове. Мову, навик, предмет, важливий для кар'єри чи просто для себе. І маєш, може, 45 хвилин на день, якщо все складеться добре.",
      },
      category: "База знань",
      title: "Як вчитися, працюючи на повну ставку?",
      subtitle:
        "Ти хочеш вивчити щось нове. Мову, навик, предмет, важливий для кар'єри чи просто для себе. І маєш, може, 45 хвилин на день, якщо все складеться добре.",
      author: "Команда Fluxo",
      readTime: "5 хв читання",
      bodyHtml: `
        <p>Насправді цього достатньо. Але лише якщо використовувати цей час інакше, ніж студенти.</p>
        <hr class="article-rule" />
        <h2>Хибна модель</h2>
        <p>Більшість порад щодо навчання створено для студентів із чотиригодинними блоками, дедлайнами іспитів і навчанням як основним заняттям. Коли ти працюєш на повну ставку, ця модель не просто не спрацьовує — вона змушує постійно почуватися, ніби ти відстаєш.</p>
        <p>Спроба відтворити студентський графік у проміжках дорослого життя зазвичай означає одну зосереджену спробу на вихідних, а потім два тижні нічого. Непослідовність вбиває запам'ятовування швидше за будь-який брак таланту.</p>
        <hr class="article-rule" />
        <h2>Чому коротші, але частіші сесії працюють краще</h2>
        <p>Дослідження тут однозначні. <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">Метааналіз Сепеди та колег 2006 року</a> у <em>Psychological Bulletin</em> показав, що розподіл навчання на кілька сесій дає краще запам'ятовування, ніж той самий загальний час за один присід. Це не просто зручність — це структурна перевага для людей з обмеженими щоденними вікнами.</p>
        <p>Короткі щоденні сесії також відповідають тому, як працює консолідація пам'яті. Сон опрацьовує й підкріплює те, що ти вивчив за день. Якщо ти повчишся 20 хвилин увечері й поспиш, мозок працюватиме над цим матеріалом, поки ти відпочиваєш. Сім 20-хвилинних сесій за тиждень дадуть краще запам'ятовування, ніж одна 140-хвилинна сесія в суботу.</p>
        <p>У дослідженнях навчання цей підхід навіть має назву: мікронавчання. <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1491265/full" target="_blank" rel="noopener">Огляд, опублікований у <em>Frontiers in Psychology</em> (2025)</a>, виявив мікронавчання ефективним для розвитку знань і навичок в умовах браку часу — саме в ситуації працюючих професіоналів.</p>
        <hr class="article-rule" />
        <h2>Реалістична щоденна структура</h2>
        <p><strong>10–15 хвилин уранці:</strong> повторення за інтервалами. Пройди те, що Fluxo чи твій застосунок позначив до повторення. Це ловить матеріал, поки він не вивітрився, і працює в парі з консолідацією пам'яті, що сталася за ніч.</p>
        <p><strong>20–30 хвилин увечері:</strong> одна зосереджена сесія навчання. Новий матеріал, читання з активним конспектуванням або опрацювання поняття. Без багатозадачності. Сповіщення вимкнені.</p>
        <p>Ось і все. 30–45 хвилин загалом, без великих блоків.</p>
        <p>Головне — захищати ці два вікна. Не розширювати, а захищати. Послідовність важливіша за обсяг.</p>
        <hr class="article-rule" />
        <h2>Система важливіша за мотивацію</h2>
        <p>Найскладніше в навчанні попри роботу на повну ставку — не знайти час. А подбати, щоб знайдений час витрачався на правильні речі. Без системи, яка підказує, що повторити й що вивчати далі, ти за замовчуванням починаєш спочатку, топчешся на тому самому місці або просто пасивно читаєш.</p>
        <p><strong><a href="/uk/">Fluxo</a></strong> дає тим, хто вчиться попри роботу, систему, що працює сама. Ти додаєш те, що вивчаєш, ШІ генерує конспекти, тож ти менше часу витрачаєш на розуміння й більше — на тренування, а Fluxo щодня показує саме те, що варто повторити за наявний час.</p>
        <p>Тобі не потрібні години. Тобі потрібна система, що працює за хвилини.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Почати безкоштовно</button>
      `,
    },
    "the-second-brain-for-learning": {
      routePath: "/uk/blog/the-second-brain-for-learning/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Другий мозок для навчання",
      meta: {
        title: "Другий мозок для навчання — Fluxo",
        description:
          "Щороку ти читаєш десятки статей, проходиш курси, слухаєш подкасти й висиджуєш наради, повні корисної інформації. І щороку майже нічого з цього немає під рукою, коли воно справді потрібне.",
      },
      category: "База знань",
      title: "Другий мозок для навчання",
      subtitle:
        "Щороку ти читаєш десятки статей, проходиш курси, слухаєш подкасти й висиджуєш наради, повні корисної інформації. І щороку майже нічого з цього немає під рукою, коли воно справді потрібне.",
      author: "Команда Fluxo",
      readTime: "4 хв читання",
      bodyHtml: `
        <p>Не тому, що ти забудькуватий. А тому, що в тебе немає системи, щоб це зберігати.</p>
        <hr class="article-rule" />
        <h2>Звідки взялася ця ідея</h2>
        <p>Термін «другий мозок» запровадив дослідник продуктивності Тіаґо Форте. Суть проста: твій біологічний мозок створений, щоб мислити й творити, а не зберігати. Коли ти намагаєшся використати його як жорсткий диск — утримуючи кожну статтю, факт та ідею — ти створюєш ментальний безлад і все одно втрачаєш більшість.</p>
        <p>Другий мозок — це зовнішня система, зазвичай цифрова, де ти фіксуєш, упорядковуєш і переглядаєш вивчене. Форте описує процес абревіатурою CODE: Capture (фіксуй), Organize (впорядковуй), Distill (виокремлюй суть), Express (втілюй). Мета — не заархівувати все. А зберегти важливі ідеї живими достатньо довго, щоб ними скористатися.</p>
        <p>Концепція не нова. Зошити для нотаток (commonplace books) — особисті збірки нотаток, цитат та ідей — мислителі й письменники вели століттями. Цифрові інструменти просто роблять систему швидшою та зручнішою для пошуку.</p>
        <hr class="article-rule" />
        <h2>Прогалина, яку має більшість «других мозків»</h2>
        <p>Ось у чому проблема більшості систем нотаток: вони пасивні.</p>
        <p>Notion, Obsidian, Evernote — усе це чудові інструменти для фіксації та впорядкування. Але зафіксувати інформацію — не те саме, що вивчити її. Ти можеш мати 2000 ідеально протегованих нотаток і майже жодної не пам'ятати, бо ти ніколи не повертався, щоб активно щось із них пригадати.</p>
        <p>Корисному другому мозку для навчання потрібні дві речі, яких немає в більшості систем: активне повторення та інтервальне повторення. Не просто сховище. Тренування.</p>
        <p>Дослідження Редіґера й Карпіке з Вашингтонського університету, <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">опубліковане 2006 року</a>, показало, що видобування інформації з пам'яті дає набагато краще довготривале запам'ятовування, ніж перечитування. Мозок зберігає те, що він тренується видобувати.</p>
        <hr class="article-rule" />
        <h2>Який вигляд має активний другий мозок</h2>
        <p>Ефективний другий мозок для навчання робить чотири речі:</p>
        <p><strong>Фіксує</strong> те, що тобі трапляється — статті, нотатки, терміни, ідеї — без тертя. Що нижчий поріг входу, то більше ти ним справді користуєшся.</p>
        <p><strong>Упорядковує</strong> за темою, а не за джерелом. Коли все з однієї теми лежить разом, зв'язки виникають природно.</p>
        <p><strong>Виокремлює</strong> ключові тези. Не кожне слово кожної статті. Ту одну-дві ідеї, які ти справді хотів би пам'ятати за рік.</p>
        <p><strong>Тренує</strong> твою пам'ять на цих виокремлених ідеях зі зростаючими інтервалами, тож ти переходиш від зберігання знань до справжнього володіння ними.</p>
        <hr class="article-rule" />
        <h2>Як сюди вписується Fluxo</h2>
        <p><strong><a href="/uk/">Fluxo</a></strong> створений як активний другий мозок. Ти додаєш те, що вивчаєш, ШІ генерує конспект ключових ідей, а потім Fluxo планує короткі сесії повторення на основі інтервального повторення — тож ти перевіряєш себе на матеріалі в потрібні інтервали, а не просто його переглядаєш.</p>
        <p>Різниця між застосунком для нотаток і Fluxo — це різниця між тим, щоб записати щось на папері, і тим, щоб справді це відпрацювати. Обидва фіксують. Тренує лише один.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Почати безкоштовно</button>
      `,
    },
    "how-to-learn-without-forgetting": {
      routePath: "/uk/blog/how-to-learn-without-forgetting/",
      heroAsset: "assets/card-2.png",
      heroAlt: "Як вчитися й не забувати",
      meta: {
        title: "Як вчитися й не забувати — Fluxo",
        description:
          "Ти дочитуєш книжку. Висиджуєш вебінар. Зберігаєш десяток статей. І десь між останньою сторінкою й реальним життям майже все зникає.",
      },
      category: "База знань",
      title: "Як вчитися й не забувати?",
      subtitle:
        "Ти дочитуєш книжку. Висиджуєш вебінар. Зберігаєш десяток статей. І десь між останньою сторінкою й реальним життям майже все зникає.",
      author: "Команда Fluxo",
      readTime: "4 хв читання",
      bodyHtml: `
        <p>Це не лінь. Мозок не створений утримувати сиру інформацію безкінечно. Він зберігає те, що використовує, і відкидає те, що ні. Питання не в тому, як читати більше. А в тому, як змусити мозок сприймати нову інформацію як варту збереження.</p>
        <hr class="article-rule" />
        <h2>Справжня проблема: пасивне споживання здається навчанням</h2>
        <p>Перечитування нотаток, виділення тексту, перегляд лекцій двічі — це здається продуктивним. Дослідження показують, що здебільшого ні.</p>
        <p>Огляд 2019 року, опублікований у <em>Frontiers in Education</em>, узагальнив десятиліття досліджень у класах: перечитування тексту знову й знову створює хибне відчуття знайомості. Студентам здається, що вони знають матеріал, бо він виглядає знайомим, але це впізнавання не перетворюється на реальне пригадування, коли воно потрібне. Знайомість і пам'ять — різні речі.</p>
        <p>Розв'язання потребує активного опрацювання, а не більшого пасивного контакту.</p>
        <hr class="article-rule" />
        <h2>Що насправді запобігає забуванню</h2>
        <p><strong>Перевіряй себе, а не перечитуй</strong></p>
        <p>Найефективніше, що ти можеш зробити, — спробувати пригадати інформацію з пам'яті ще до того, як відчуєш готовність. Це називається практикою пригадування, і вона працює, бо сам акт видобування чогось із пам'яті, навіть коли це дається важко, зміцнює нейронний шлях, що його утримує.</p>
        <p>Редіґер і Карпіке з Вашингтонського університету чітко показали це у <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">своєму дослідженні 2006 року</a>: студенти, які перевіряли себе після читання, через тиждень пам'ятали набагато більше, ніж ті, хто просто перечитував той самий матеріал, — попри те, що обидві групи витратили однаковий загальний час.</p>
        <p><strong>Розподіляй повторення в часі</strong></p>
        <p>Повторити щось один раз і рушити далі майже гарантує, що ти це забудеш. Повторити знову саме перед тим, як воно вивітрюється, — а потім ще раз із довшим інтервалом — ось що насправді будує довготривале запам'ятовування. <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">Метааналіз Сепеди та колег із 254 досліджень</a>, опублікований у <em>Psychological Bulletin</em>, підтвердив, що розподіл практики в часі стабільно перевершує будь-яке зубріння наскоком.</p>
        <p><strong>Пов'язуй нові знання з тим, що вже знаєш</strong></p>
        <p>Коли ти щось вивчаєш, запитай себе, як це пов'язано з тим, що ти вже розумієш. Це змушує мозок опрацьовувати нову інформацію глибше, а не просто зберігати її як ізольований факт. Данлоскі з колегами з Кентського університету зарахували цей прийом — розширене опитування (elaborative interrogation) — до <a href="https://journals.sagepub.com/doi/10.1177/1529100612453266" target="_blank" rel="noopener">найефективніших стратегій навчання</a> у своєму огляді 2013 року.</p>
        <hr class="article-rule" />
        <h2>Проблема послідовності</h2>
        <p>Ці три прийоми працюють. Проблема — застосовувати їх послідовно до кожної теми, яку ти вивчаєш, не забуваючи, що і коли треба повторити.</p>
        <p><strong><a href="/uk/">Fluxo</a></strong> бере на себе системний бік. Ти фіксуєш те, що вивчаєш, ШІ виокремлює ключові ідеї, а Fluxo планує сесії повторення в потрібні інтервали. Ти приходиш на 10 хвилин, робиш роботу, а решта працює сама.</p>
        <p>Вчитися й не забувати — не магія. Це система. А системи працюють найкраще, коли не залежать лише від сили волі.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Почати безкоштовно</button>
      `,
    },
    "how-to-remember-what-you-learn": {
      routePath: "/uk/blog/how-to-remember-what-you-learn/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Нотатки й пам'ять",
      meta: {
        title: "Як запам'ятати те, що вивчаєш — Fluxo",
        description:
          "Ти читаєш. Завершуєш курс. Робиш нотатки. А за тиждень усе зникло. Це не проблема пам'яті — це проблема системи.",
      },
      category: "База знань",
      title: "Як запам'ятати те, що вивчаєш?",
      subtitle:
        "Ти читаєш статтю. Завершуєш курс. Робиш нотатки. А за тиждень усе зникло.",
      author: "Команда Fluxo",
      readTime: "6 хв читання",
      bodyHtml: `
        <p>Це не проблема пам'яті. Це проблема системи. Більшість людей споживають інформацію, не будуючи процесу, щоб її справді зберегти. Ось що каже наука й що працює.</p>
        <hr class="article-rule" />
        <h2>Чому ти забуваєш так швидко</h2>
        <p>1885 року німецький психолог Герман Еббінгауз першим почав вивчати пам'ять науково. Він роками заучував списки безглуздих складів, а потім вимірював, як швидко може їх пригадати після різних проміжків часу. Те, що він виявив, стало відоме як <strong>крива забування</strong>: пам'ять різко падає одразу після навчання, а потім вирівнюється. Без жодного повторення ми забуваємо від 50 до 70% нової інформації впродовж одного дня.</p>
        <p>2015 року Мюрре й Дрос опублікували пряму реплікацію оригінальних експериментів Еббінгауза в <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4492928/" target="_blank" rel="noopener">PLOS ONE</a> і отримали майже ідентичні цифри — понад 130 років по тому. Це один із найбільш відтворюваних результатів у когнітивній психології.</p>
        <p>Ця крива — не особиста поразка. Це просто те, як мозок працює за замовчуванням. Хороша новина: три прийоми прямо їй протидіють.</p>
        <hr class="article-rule" />
        <h2>3 прийоми, що справді працюють</h2>
        <h3>1. Активне пригадування</h3>
        <p>Замість перечитувати нотатки, закрий їх і спробуй видобути інформацію з пам'яті. Навіть зусилля пригадати зміцнює нейронні зв'язки більше, ніж пасивне повторення.</p>
        <p>2006 року Генрі Редіґер і Джеффрі Карпіке з Вашингтонського університету провели нині класичний експеримент. Студенти або кілька разів перечитували уривок, або перевіряли себе на ньому. У негайному тесті перечитування показало трохи кращий результат. Але через тиждень група самоперевірки пам'ятала помітно більше. Їхня стаття <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Test-Enhanced Learning</a>, опублікована в <em>Psychological Science</em>, дійшла висновку, що перевірка себе — не просто спосіб з'ясувати, що ти знаєш. Це один із найефективніших способів узагалі вчитися.</p>
        <h3>2. Інтервальне повторення</h3>
        <p>Повторювати матеріал саме перед тим, як ти ось-ось його забудеш, працює набагато краще, ніж повторювати кілька разів в один день. Дослідники називають це ефектом розподілу, і його вивчають уже понад століття.</p>
        <p>2006 року Ніколас Сепеда з колегами з Каліфорнійського університету в Сан-Дієго опублікував <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">метааналіз 254 досліджень</a> із понад 14 000 спостережень у <em>Psychological Bulletin</em>. Висновок був однозначний: розподіл практики в часі стабільно давав краще довготривале запам'ятовування, ніж зубріння того самого обсягу за одну сесію. Правильний проміжок між повтореннями залежить від того, як довго тобі треба пам'ятати матеріал. Що довша мета, то довшими мають бути інтервали.</p>
        <h3>3. Розширене опитування</h3>
        <p>Коли ти вивчаєш щось нове, запитай себе, <em>чому</em> це правда і як воно пов'язане з тим, що ти вже знаєш. Це змушує до глибшого опрацювання й закріплює нові знання за наявним розумінням, замість лишати їх ізольованими. <a href="https://journals.sagepub.com/doi/10.1177/1529100612453266" target="_blank" rel="noopener">Огляд 2013 року Данлоскі та колег</a> із Кентського університету зарахував цей прийом до найефективніших стратегій навчання — поряд із практикою пригадування та інтервальним повторенням.</p>
        <hr class="article-rule" />
        <h2>Чому більшість пропускає всі три</h2>
        <p>Бо робити це вручну — болісно.</p>
        <p>Відстежувати, що і коли повторити, по багатьох темах, статтях і нотатках швидко стає рутиною, яку більшість кидає за тиждень. Прийоми працюють. Тертя навколо них — ні.</p>
        <hr class="article-rule" />
        <h2>Простіший шлях</h2>
        <p><strong><a href="/uk/">Fluxo</a></strong> побудований саме навколо цих трьох принципів. Ти зберігаєш те, що вивчаєш — статті, нотатки, лексику, ідеї — і впорядковуєш за темою. ШІ генерує швидкий конспект, тож ти швидше розумієш матеріал. Потім Fluxo планує короткі тренувальні сесії в потрібні інтервали, тож ти повторюєш кожен елемент саме тоді, коли мозку це справді треба.</p>
        <p>Жодних таблиць. Жодного ручного відстеження. Лише 5–15 хвилин на день — і ти справді пам'ятаєш те, що вивчаєш.</p>
        <p>Наука зрозуміла вже понад століття. Складним завжди було робити це послідовно. Саме цю проблему розв'язує Fluxo.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Почати безкоштовно</button>
      `,
    },
    "how-to-track-learning-progress": {
      routePath: "/uk/blog/how-to-track-learning-progress/",
      heroAsset: "assets/card-2.png",
      heroAlt: "Як відстежувати прогрес навчання",
      meta: {
        title: "Як відстежувати прогрес навчання — Fluxo",
        description:
          "Більшість людей вимірюють навчання неправильно. Рахують години за навчанням, прочитані книжки чи сторінки. Ці числа здаються значущими, але вони вимірюють вкладене, а не результат.",
      },
      category: "База знань",
      title: "Як відстежувати прогрес навчання?",
      subtitle:
        "Більшість людей вимірюють навчання неправильно. Рахують години за навчанням, прочитані книжки чи сторінки. Ці числа здаються значущими, але вони вимірюють вкладене, а не результат.",
      author: "Команда Fluxo",
      readTime: "4 хв читання",
      bodyHtml: `
        <p>Справжнє питання: скільки ти насправді запам'ятовуєш?</p>
        <hr class="article-rule" />
        <h2>Чому більшість способів відстеження не працює</h2>
        <p>Час, витрачений на навчання, майже не корелює з тим, скільки ти пам'ятаєш. Дослідження 2006 року <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Редіґера й Карпіке з Вашингтонського університету</a> показало це напряму: дві групи студентів витратили однаковий час на той самий матеріал. Одна група перечитувала його. Інша перевіряла себе. Через тиждень група самоперевірки пам'ятала помітно більше, хоча «вчилася» менше в традиційному сенсі.</p>
        <p>Записані години не кажуть, чи відбулося навчання. Пригадування — каже.</p>
        <hr class="article-rule" />
        <h2>Що справді варто вимірювати</h2>
        <p><strong>Рівень утримання</strong></p>
        <p>Чи можеш ти видобути цю інформацію, не дивлячись на неї? Це єдина метрика, що має значення для довготривалого навчання. Усе інше — час, завершеність, виділення — це непрямі показники, що часто вводять в оману, ніби ти вивчив більше, ніж насправді.</p>
        <p><strong>Складність пригадування з часом</strong></p>
        <p>Наскільки важко пригадати щось через день? Через тиждень? Через місяць? Якщо пригадування з часом дається легше за коротших сесій, знання консолідуються. Якщо лишається важко — потрібно більше повторень або інший підхід. Відстеження цього по темах дає справжній сигнал про те, що працює.</p>
        <p><strong>Прогалини, а не лише успіхи</strong></p>
        <p>Більшість трекерів прогресу показують, що ти завершив. Корисніше відстежувати те, що ти забув або в чому помилився. Система, яка виявляє твої найслабші місця й ставить їх у пріоритет під час повторень, цінніша за ту, що рахує серії та значки.</p>
        <hr class="article-rule" />
        <h2>Проблема ручного відстеження</h2>
        <p>Можна зробити таблицю, щоб відстежувати все це. Дехто так і робить. Більшість кидає за два тижні, бо її ведення забирає стільки ж енергії, скільки саме навчання.</p>
        <p>Цінність відстеження прогресу реальна — лабораторія викладання й навчання MIT <a href="https://tll.mit.edu/teaching-resources/how-people-learn/metacognition/" target="_blank" rel="noopener">зазначає, що метакогнітивний моніторинг</a> суттєво покращує результати навчання. Знати, де ти, що згасає і що потребує уваги, дозволяє спрямовувати зусилля туди, де вони важливі. Але це працює, лише коли відстеження автоматичне.</p>
        <hr class="article-rule" />
        <h2>Який вигляд має автоматичне відстеження прогресу</h2>
        <p><strong><a href="/uk/">Fluxo</a></strong> відстежує утримання, вимірюючи, як ти даєш собі раду під час кожної сесії повторення. Щоразу, коли ти щось правильно пригадуєш або тобі важко, Fluxo коригує свою модель того, що ти знаєш. З часом ти бачиш свій рівень утримання за темою — не скільки в тебе нотаток, а скільки того матеріалу ти справді можеш пригадати.</p>
        <p>Це перетворює відстеження прогресу з рутини на те, що просто відбувається, поки ти вчишся. Ти вчишся, Fluxo вимірює, і будь-якої миті ти ясно бачиш, які теми міцні, а які потребують більше роботи.</p>
        <p>Навчатися без відстеження — летіти наосліп. Відстежувати без вимірювання пригадування — отримувати хибні дані. Fluxo робить і те, й інше.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Почати безкоштовно</button>
      `,
    },
  },
  es: {
    "best-study-routine": {
      routePath: "/es/blog/best-study-routine/",
      heroAsset: "assets/card-3.png",
      heroAlt: "La mejor rutina de estudio",
      meta: {
        title: "La mejor rutina de estudio — Fluxo",
        description:
          "La mayoría de la gente construye su rutina de estudio de la forma equivocada. Eligen una hora, abren sus apuntes y empiezan a leer. Eso no es una rutina. Es solo la costumbre de sentarse cerca de un libro.",
      },
      category: "Centro de conocimiento",
      title: "La mejor rutina de estudio",
      subtitle:
        "La mayoría de la gente construye su rutina de estudio de la forma equivocada. Eligen una hora, abren sus apuntes y empiezan a leer. Eso no es una rutina. Es solo la costumbre de sentarse cerca de un libro.",
      author: "Equipo Fluxo",
      readTime: "5 min de lectura",
      bodyHtml: `
        <p>Una rutina de estudio de verdad se diseña en torno a cómo el cerebro codifica y almacena la información. El horario importa. Y también lo que haces en cada sesión.</p>
        <hr class="article-rule" />
        <h2>Qué hace que una rutina funcione de verdad</h2>
        <p><strong>La constancia gana a la duración</strong></p>
        <p>Una hora al día, todos los días, supera a una sesión de seis horas el domingo. No es una frase motivacional: así funciona la consolidación de la memoria. El sueño cumple un papel clave al pasar la información de la memoria a corto plazo a la de largo plazo, y ese proceso necesita tiempo entre sesiones. Repasar el material a lo largo de varios días le da al cerebro oportunidades repetidas para consolidarlo.</p>
        <p><strong>Ajusta la sesión a la exigencia cognitiva</strong></p>
        <p>No todas las tareas son iguales. Aprender algo nuevo exige más esfuerzo cognitivo que repasar algo que ya conoces en parte. La investigación sobre los ritmos circadianos muestra que la mayoría de las personas tiene un pico natural de alerta y memoria de trabajo a media mañana. Reservar esa franja para el material más difícil y dejar el repaso ligero para los momentos de menos energía hace que el mismo tiempo rinda más.</p>
        <p><strong>Usa intenciones de implementación</strong></p>
        <p>La investigación de Peter Gollwitzer en la NYU, <a href="https://doi.org/10.1002/ejsp.345" target="_blank" rel="noopener">resumida en un metaanálisis de 2006 junto a Sheeran</a>, halló un efecto de medio a grande en el cumplimiento de objetivos cuando las personas formulaban planes concretos de «si... entonces»: «Si son las 8 de la tarde de un día laborable, haré 20 minutos de repaso en mi escritorio». La concreción elimina la decisión diaria de si estudiar y cuándo. No negocias contigo mismo: simplemente sigues el plan.</p>
        <hr class="article-rule" />
        <h2>Una estructura simple que funciona</h2>
        <p>Una rutina construida sobre estos principios tiene tres partes:</p>
        <p><strong>Mañana (10 a 20 minutos):</strong> Repasa lo que aprendiste ayer antes de que tu cerebro entre del todo en el día. Es cuando la repetición espaciada rinde más: el material se consolidó hace poco durante la noche y repasarlo ahora fija un intervalo más largo hasta el próximo repaso.</p>
        <p><strong>Bloque de aprendizaje activo (25 a 45 minutos):</strong> Es tu sesión principal. Material nuevo, temas difíciles, escribir con tus palabras o resolver problemas. Sin releer. Ponte a prueba, resume de memoria, conecta ideas.</p>
        <p><strong>Captura de fin de día (5 minutos):</strong> Anota cualquier cosa nueva que hayas encontrado durante el día y valga la pena guardar. Un término, un concepto, una idea de una reunión. Lleva cinco minutos y mantiene abierto el flujo de entrada sin exigir otra sesión completa de estudio.</p>
        <hr class="article-rule" />
        <h2>La parte que casi todas las rutinas se saltan</h2>
        <p>Montar el horario es lo fácil. Lo difícil es el sistema que funciona entre sesiones. Saber qué repasar mañana, llevar la cuenta de lo que toca y no dejar que el material más antiguo se escape.</p>
        <p><strong><a href="/es/">Fluxo</a></strong> lo hace automáticamente. Tú te concentras en aprender. Fluxo controla qué hay que repasar y cuándo, para que tu rutina siga siendo constante sin que tengas que gestionarla a mano.</p>
        <p>Una buena rutina de estudio no tiene por qué ser complicada. Tiene que ser constante y estar diseñada en torno a cómo funciona realmente el cerebro.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Empieza gratis</button>
      `,
    },
    "best-way-to-learn-new-vocabulary": {
      routePath: "/es/blog/best-way-to-learn-new-vocabulary/",
      heroAsset: "assets/card-3.png",
      heroAlt: "La mejor forma de aprender vocabulario",
      meta: {
        title: "La mejor forma de aprender vocabulario — Fluxo",
        description:
          "Ya sea que aprendas un idioma extranjero, adquieras términos técnicos para un nuevo trabajo o construyas conocimiento especializado en medicina, derecho o diseño, el vocabulario es la base.",
      },
      category: "Centro de conocimiento",
      title: "La mejor forma de aprender vocabulario",
      subtitle:
        "Ya sea que aprendas un idioma extranjero, adquieras términos técnicos para un nuevo trabajo o construyas conocimiento especializado en medicina, derecho o diseño, el vocabulario es la base.",
      author: "Equipo Fluxo",
      readTime: "4 min de lectura",
      bodyHtml: `
        <p>La pregunta es qué método funciona de verdad, y por qué la mayoría no lo hace.</p>
        <hr class="article-rule" />
        <h2>Por qué la memorización mecánica falla</h2>
        <p>Escribir una palabra diez veces con la esperanza de que se quede es más o menos tan eficaz como leerla diez veces. Ambas cosas son pasivas. Tu cerebro archiva la información como de baja prioridad porque no has hecho nada exigente con ella.</p>
        <p>La ilusión de progreso es parte del problema. Tras suficientes repeticiones, una palabra empieza a resultar familiar. La familiaridad se siente como saber. Pero la familiaridad solo activa el reconocimiento, no la evocación. Puede que reconozcas la palabra al verla y no tengas ni idea de qué significa cuando necesitas producirla.</p>
        <hr class="article-rule" />
        <h2>Lo que muestra la investigación</h2>
        <p><strong>La repetición espaciada es el método más eficaz para retener vocabulario</strong></p>
        <p>Un metaanálisis de 2022 de Kim y Webb, publicado en <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/lang.12479" target="_blank" rel="noopener"><em>Language Learning</em></a>, analizó 48 experimentos con más de 3400 participantes que aprendían vocabulario de una segunda lengua. El hallazgo fue claro: la práctica espaciada superó de forma constante a la práctica concentrada en la retención a largo plazo. Repasar palabras a intervalos crecientes, en lugar de en una sola sentada, produce una evocación notablemente mejor con el tiempo.</p>
        <p><strong>La evocación activa supera a la exposición pasiva</strong></p>
        <p>Ver una palabra y su definición es pasivo. Que te muestren la definición y tener que producir la palabra es activo. Ese esfuerzo de recuperación, incluso cuando te equivocas, construye una huella de memoria más fuerte que cualquier cantidad de repaso pasivo. Es el mismo efecto de evaluación documentado por <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Roediger y Karpicke</a> que se aplica a todo aprendizaje, y es especialmente potente con el vocabulario.</p>
        <p><strong>El contexto importa</strong></p>
        <p>Las tarjetas aisladas funcionan mejor que releer listas de palabras, pero funcionan aún mejor cuando la palabra se conecta con algo significativo: una frase de ejemplo, un caso de uso real, un concepto que ya entiendes. El vocabulario aprendido en contexto es más duradero y más usable que el aprendido como un símbolo abstracto.</p>
        <hr class="article-rule" />
        <h2>Aplicación práctica</h2>
        <p>El mejor enfoque combina las tres cosas:</p>
        <ol>
          <li>Aprende la palabra con contexto, no solo con una definición</li>
          <li>Ponte a prueba desde la primera sesión, antes de sentirte listo</li>
          <li>Repásala de nuevo a intervalos crecientes, no todo de golpe</li>
        </ol>
        <p>Esto sirve para cualquier vocabulario, no solo el de idiomas. Los términos técnicos, los conceptos especializados y la jerga profesional siguen las mismas reglas.</p>
        <hr class="article-rule" />
        <h2>Que se quede sin tanto esfuerzo de gestión</h2>
        <p>Lo difícil no es conocer el método. Es mantener el sistema de repaso espaciado a lo largo de cientos de palabras sin que se convierta en un trabajo a tiempo completo.</p>
        <p><strong><a href="/es/">Fluxo</a></strong> se encarga de esto automáticamente. Añades vocabulario a tu espacio (palabras, definiciones, frases de contexto) y Fluxo programa tus repasos. Dedicas unos minutos al día a la práctica de recuperación, y el sistema controla qué palabras están sólidas y cuáles necesitan más atención.</p>
        <p>La ciencia sobre la retención de vocabulario es clara. Lo que suele fallar es la ejecución. Fluxo hace que la ejecución sea automática.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Empieza gratis</button>
      `,
    },
    "how-to-study-while-working-full-time": {
      routePath: "/es/blog/how-to-study-while-working-full-time/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Cómo estudiar trabajando a tiempo completo",
      meta: {
        title: "Cómo estudiar trabajando a tiempo completo — Fluxo",
        description:
          "Quieres aprender algo nuevo. Un idioma, una habilidad, una materia que importa para tu carrera o solo para ti. Y tienes quizá 45 minutos al día, si todo sale bien.",
      },
      category: "Centro de conocimiento",
      title: "¿Cómo estudiar trabajando a tiempo completo?",
      subtitle:
        "Quieres aprender algo nuevo. Un idioma, una habilidad, una materia que importa para tu carrera o solo para ti. Y tienes quizá 45 minutos al día, si todo sale bien.",
      author: "Equipo Fluxo",
      readTime: "5 min de lectura",
      bodyHtml: `
        <p>En realidad es suficiente. Pero solo si lo usas de forma distinta a como lo hacen los estudiantes.</p>
        <hr class="article-rule" />
        <h2>El modelo equivocado</h2>
        <p>La mayoría de los consejos de estudio están pensados para estudiantes con bloques de cuatro horas, fechas de examen y el aprendizaje como ocupación principal. Cuando trabajas a tiempo completo, ese modelo no solo falla: hace que sientas que siempre vas con retraso.</p>
        <p>Intentar recrear un horario de estudiante en los huecos de una vida adulta suele significar un intento concentrado un fin de semana seguido de dos semanas de nada. La inconstancia mata la retención más rápido que cualquier falta de talento.</p>
        <hr class="article-rule" />
        <h2>Por qué funcionan mejor las sesiones más cortas y frecuentes</h2>
        <p>La investigación al respecto es directa. El <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">metaanálisis de Cepeda et al. de 2006</a> en <em>Psychological Bulletin</em> demostró que distribuir el aprendizaje en varias sesiones produce mejor retención que el mismo tiempo total en una sola sentada. No es solo una comodidad: es una ventaja estructural para quienes tienen ventanas diarias limitadas.</p>
        <p>Las sesiones cortas diarias también encajan con cómo funciona la consolidación de la memoria. El sueño procesa y refuerza lo que aprendiste durante el día. Si estudias 20 minutos esta noche y duermes, tu cerebro trabajará ese material mientras descansas. Siete sesiones de 20 minutos a lo largo de una semana producirán mejor retención que una sesión de 140 minutos el sábado.</p>
        <p>Este enfoque hasta tiene nombre en la investigación del aprendizaje: microaprendizaje. Una <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1491265/full" target="_blank" rel="noopener">revisión publicada en <em>Frontiers in Psychology</em> (2025)</a> halló que el microaprendizaje es eficaz para desarrollar conocimientos y habilidades en contextos con poco tiempo, justo la situación de los profesionales que trabajan.</p>
        <hr class="article-rule" />
        <h2>Una estructura diaria realista</h2>
        <p><strong>10 a 15 minutos por la mañana:</strong> Repaso con repetición espaciada. Repasa lo que Fluxo o tu app marca como pendiente. Esto atrapa el material antes de que se desvanezca y aprovecha la consolidación de la memoria que ocurrió durante la noche.</p>
        <p><strong>20 a 30 minutos por la tarde:</strong> Una sesión de aprendizaje concentrada. Material nuevo, lectura con anotación activa o trabajar un concepto. Sin multitarea. Notificaciones apagadas.</p>
        <p>Eso es todo. De 30 a 45 minutos en total, sin necesidad de grandes bloques.</p>
        <p>La clave es proteger esas dos ventanas. No ampliarlas: protegerlas. Constancia por encima de volumen.</p>
        <hr class="article-rule" />
        <h2>El sistema importa más que la motivación</h2>
        <p>Lo más difícil de estudiar mientras trabajas a tiempo completo no es encontrar tiempo. Es asegurarte de que el tiempo que encuentras se use en lo correcto. Sin un sistema que te diga qué repasar y qué aprender a continuación, acabas empezando de cero, repasando lo mismo o leyendo de forma pasiva.</p>
        <p><strong><a href="/es/">Fluxo</a></strong> da a quien aprende mientras trabaja un sistema que se gestiona solo. Añades lo que estás aprendiendo, la IA genera resúmenes para que dediques menos tiempo a entender y más a entrenar, y cada día Fluxo te muestra exactamente qué repasar en el tiempo que tienes.</p>
        <p>No necesitas horas. Necesitas un sistema que funcione en minutos.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Empieza gratis</button>
      `,
    },
    "the-second-brain-for-learning": {
      routePath: "/es/blog/the-second-brain-for-learning/",
      heroAsset: "assets/card-1.png",
      heroAlt: "El segundo cerebro para aprender",
      meta: {
        title: "El segundo cerebro para aprender — Fluxo",
        description:
          "Cada año lees decenas de artículos, haces cursos, escuchas pódcasts y asistes a reuniones llenas de información útil. Y cada año, casi nada está disponible cuando de verdad lo necesitas.",
      },
      category: "Centro de conocimiento",
      title: "El segundo cerebro para aprender",
      subtitle:
        "Cada año lees decenas de artículos, haces cursos, escuchas pódcasts y asistes a reuniones llenas de información útil. Y cada año, casi nada está disponible cuando de verdad lo necesitas.",
      author: "Equipo Fluxo",
      readTime: "4 min de lectura",
      bodyHtml: `
        <p>No porque seas olvidadizo. Porque no tienes un sistema para conservarlo.</p>
        <hr class="article-rule" />
        <h2>De dónde viene la idea</h2>
        <p>El término «segundo cerebro» lo acuñó el investigador de productividad Tiago Forte. La idea central es simple: tu cerebro biológico está hecho para pensar y crear, no para almacenar. Cuando intentas usarlo como un disco duro —reteniendo cada artículo, dato e idea— generas saturación mental y aun así pierdes la mayor parte.</p>
        <p>Un segundo cerebro es un sistema externo, normalmente digital, donde capturas, organizas y vuelves a revisar lo que has aprendido. Forte describe el proceso como CODE: Capturar, Organizar, Destilar, Expresar. El objetivo no es archivarlo todo. Es mantener vivas las ideas que importan el tiempo suficiente para usarlas.</p>
        <p>El concepto no es nuevo. Los libros de lugares comunes —colecciones personales de notas, citas e ideas— los han usado pensadores y escritores durante siglos. Las herramientas digitales solo hacen el sistema más rápido y fácil de buscar.</p>
        <hr class="article-rule" />
        <h2>El vacío que tienen casi todos los segundos cerebros</h2>
        <p>Este es el problema de la mayoría de los sistemas de notas: son pasivos.</p>
        <p>Notion, Obsidian, Evernote: todas son herramientas excelentes para capturar y organizar. Pero capturar información no es lo mismo que aprenderla. Puedes tener 2000 notas perfectamente etiquetadas y aun así no recordar casi ninguna, porque nunca volviste a evocar nada de forma activa.</p>
        <p>Un segundo cerebro útil para aprender necesita dos cosas que la mayoría de los sistemas no tienen: repaso activo y repetición espaciada. No solo almacenamiento. Entrenamiento.</p>
        <p>La investigación de Roediger y Karpicke en la Universidad de Washington, <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">publicada en 2006</a>, mostró que recuperar información de la memoria produce una retención a largo plazo mucho mejor que releerla. El cerebro conserva lo que practica recuperar.</p>
        <hr class="article-rule" />
        <h2>Cómo es un segundo cerebro activo</h2>
        <p>Un segundo cerebro eficaz para aprender hace cuatro cosas:</p>
        <p><strong>Captura</strong> lo que encuentras —artículos, notas, términos, ideas— sin fricción. Cuanto menor es la barrera de entrada, más lo usas de verdad.</p>
        <p><strong>Organiza</strong> por tema, no por fuente. Cuando todo lo de una misma materia vive junto, las conexiones surgen de forma natural.</p>
        <p><strong>Destila</strong> los puntos clave. No cada palabra de cada artículo. La una o dos ideas que de verdad querrías recordar dentro de un año.</p>
        <p><strong>Entrena</strong> tu memoria con esas ideas destiladas a intervalos crecientes, de modo que pasas de almacenar conocimiento a poseerlo de verdad.</p>
        <hr class="article-rule" />
        <h2>Cómo encaja Fluxo</h2>
        <p><strong><a href="/es/">Fluxo</a></strong> está construido como un segundo cerebro activo. Añades lo que estás aprendiendo, la IA genera un resumen de las ideas clave y luego Fluxo programa sesiones cortas de repaso basadas en repetición espaciada, de modo que te pones a prueba con el material en los intervalos adecuados, no solo lo hojeas.</p>
        <p>La diferencia entre una app de notas y Fluxo es la diferencia entre escribir algo en un papel y practicarlo de verdad. Las dos capturan. Solo una te entrena.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Empieza gratis</button>
      `,
    },
    "how-to-learn-without-forgetting": {
      routePath: "/es/blog/how-to-learn-without-forgetting/",
      heroAsset: "assets/card-2.png",
      heroAlt: "Cómo aprender sin olvidar",
      meta: {
        title: "Cómo aprender sin olvidar — Fluxo",
        description:
          "Terminas un libro. Asistes a un webinar. Guardas una docena de artículos. Y en algún punto entre la última página y la vida real, casi todo desaparece.",
      },
      category: "Centro de conocimiento",
      title: "¿Cómo aprender sin olvidar?",
      subtitle:
        "Terminas un libro. Asistes a un webinar. Guardas una docena de artículos. Y en algún punto entre la última página y la vida real, casi todo desaparece.",
      author: "Equipo Fluxo",
      readTime: "4 min de lectura",
      bodyHtml: `
        <p>Esto no es pereza. El cerebro no está hecho para retener información en bruto de forma indefinida. Almacena lo que usa y descarta lo que no. La pregunta no es cómo leer más. Es cómo hacer que tu cerebro trate la información nueva como algo que vale la pena conservar.</p>
        <hr class="article-rule" />
        <h2>El verdadero problema: el consumo pasivo parece aprendizaje</h2>
        <p>Releer apuntes, subrayar texto, ver clases dos veces: todo eso parece productivo. La investigación muestra que en su mayoría no lo es.</p>
        <p>Una revisión de 2019 publicada en <em>Frontiers in Education</em> resumió décadas de estudios en el aula: leer un texto una y otra vez crea una falsa sensación de familiaridad. Los estudiantes sienten que conocen el material porque les resulta familiar, pero ese reconocimiento no se traduce en evocación real cuando la necesitan. La familiaridad y la memoria son cosas distintas.</p>
        <p>La solución exige procesamiento activo, no más exposición pasiva.</p>
        <hr class="article-rule" />
        <h2>Lo que de verdad evita el olvido</h2>
        <p><strong>Ponte a prueba, no releas</strong></p>
        <p>Lo más eficaz que puedes hacer es intentar evocar la información de memoria antes de sentirte listo. Se llama práctica de recuperación, y funciona porque el acto de extraer algo de la memoria, incluso cuando te cuesta, refuerza la vía neuronal que lo sostiene.</p>
        <p>Roediger y Karpicke, de la Universidad de Washington, lo mostraron con claridad en <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">su estudio de 2006</a>: los estudiantes que se autoevaluaron tras leer retuvieron mucho más una semana después que quienes simplemente releyeron el mismo material, aunque ambos grupos dedicaron el mismo tiempo total.</p>
        <p><strong>Espacia tus repasos</strong></p>
        <p>Repasar algo una vez y seguir adelante casi garantiza que lo olvidarás. Repasarlo de nuevo justo antes de que se desvanezca —y luego otra vez a un intervalo más largo— es lo que de verdad construye la retención a largo plazo. El <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">metaanálisis de 254 estudios de Cepeda et al.</a>, publicado en <em>Psychological Bulletin</em>, confirmó que distribuir la práctica en el tiempo supera de forma constante a cualquier cantidad de estudio intensivo de última hora.</p>
        <p><strong>Conecta el conocimiento nuevo con lo que ya sabes</strong></p>
        <p>Cuando aprendas algo, pregúntate cómo se relaciona con lo que ya entiendes. Esto obliga a tu cerebro a procesar la información nueva con más profundidad, en vez de almacenarla como un dato aislado. Dunlosky y sus colegas en Kent State situaron esta técnica —la interrogación elaborativa— entre las <a href="https://journals.sagepub.com/doi/10.1177/1529100612453266" target="_blank" rel="noopener">estrategias de aprendizaje más eficaces</a> en su revisión de 2013.</p>
        <hr class="article-rule" />
        <h2>El problema de la constancia</h2>
        <p>Estas tres técnicas funcionan. El problema es aplicarlas con constancia en cada tema que aprendes, sin olvidar qué hay que repasar y cuándo.</p>
        <p><strong><a href="/es/">Fluxo</a></strong> se encarga de la parte del sistema. Capturas lo que estás aprendiendo, la IA extrae las ideas clave y Fluxo programa sesiones de repaso a los intervalos adecuados. Apareces 10 minutos, haces el trabajo y el resto funciona solo.</p>
        <p>Aprender sin olvidar no es magia. Es un sistema. Y los sistemas funcionan mejor cuando no dependen solo de la fuerza de voluntad.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Empieza gratis</button>
      `,
    },
    "how-to-remember-what-you-learn": {
      routePath: "/es/blog/how-to-remember-what-you-learn/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Notas y memoria",
      meta: {
        title: "Cómo recordar lo que aprendes — Fluxo",
        description:
          "Lees. Terminas un curso. Tomas notas. Y una semana después ha desaparecido. No es un problema de memoria, es un problema de sistema.",
      },
      category: "Centro de conocimiento",
      title: "¿Cómo recordar lo que aprendes?",
      subtitle:
        "Lees un artículo. Terminas un curso. Tomas notas. Y una semana después ha desaparecido.",
      author: "Equipo Fluxo",
      readTime: "6 min de lectura",
      bodyHtml: `
        <p>Esto no es un problema de memoria. Es un problema de sistema. La mayoría consume información sin construir un proceso para conservarla de verdad. Esto es lo que dice la ciencia, y lo que funciona.</p>
        <hr class="article-rule" />
        <h2>Por qué olvidas tan rápido</h2>
        <p>En 1885, el psicólogo alemán Hermann Ebbinghaus fue el primero en estudiar la memoria de forma científica. Pasó años memorizando listas de sílabas sin sentido y luego medía con qué rapidez podía evocarlas tras distintos intervalos de tiempo. Lo que descubrió se conoció como la <strong>curva del olvido</strong>: la memoria cae en picado justo después de aprender y luego se estabiliza. Sin ningún repaso, olvidamos entre el 50 y el 70 % de la información nueva en un solo día.</p>
        <p>En 2015, Murre y Dros publicaron una réplica directa de los experimentos originales de Ebbinghaus en <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4492928/" target="_blank" rel="noopener">PLOS ONE</a> y llegaron a cifras casi idénticas, más de 130 años después. Es uno de los hallazgos más replicados de la psicología cognitiva.</p>
        <p>La curva no es un fracaso personal. Es simplemente cómo funciona el cerebro por defecto. La buena noticia: tres técnicas la contrarrestan directamente.</p>
        <hr class="article-rule" />
        <h2>3 técnicas que de verdad funcionan</h2>
        <h3>1. Evocación activa</h3>
        <p>En vez de releer tus apuntes, ciérralos e intenta extraer la información de memoria. Incluso esforzarte por recordar refuerza las conexiones neuronales más que el repaso pasivo.</p>
        <p>En 2006, Henry Roediger y Jeffrey Karpicke, de la Universidad de Washington, llevaron a cabo un experimento ya clásico. Los estudiantes releían un pasaje varias veces o se ponían a prueba sobre él. En una prueba inmediata, releer rindió algo mejor. Pero una semana después, el grupo que se autoevaluó retuvo bastante más. Su artículo, <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Test-Enhanced Learning</a>, publicado en <em>Psychological Science</em>, concluyó que ponerte a prueba no es solo una forma de comprobar lo que sabes. Es una de las formas más eficaces de aprender en primer lugar.</p>
        <h3>2. Repetición espaciada</h3>
        <p>Repasar el material justo antes de estar a punto de olvidarlo funciona mucho mejor que repasarlo varias veces el mismo día. Los investigadores lo llaman efecto de espaciamiento, y se estudia desde hace más de un siglo.</p>
        <p>En 2006, Nicholas Cepeda y sus colegas de la UC San Diego publicaron un <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">metaanálisis de 254 estudios</a> con más de 14 000 observaciones en <em>Psychological Bulletin</em>. El hallazgo fue claro: distribuir la práctica en el tiempo produjo de forma constante mejor retención a largo plazo que concentrar la misma cantidad de práctica en una sola sesión. El intervalo adecuado entre repasos depende de cuánto tiempo necesites recordar el material. Cuanto más largo sea el objetivo, más largos deberían ser los intervalos.</p>
        <h3>3. Interrogación elaborativa</h3>
        <p>Cuando aprendes algo nuevo, pregúntate <em>por qué</em> es cierto y cómo se conecta con lo que ya sabes. Esto fuerza un procesamiento más profundo y ancla el conocimiento nuevo a tu comprensión existente en lugar de dejarlo aislado. Una <a href="https://journals.sagepub.com/doi/10.1177/1529100612453266" target="_blank" rel="noopener">revisión de 2013 de Dunlosky y colegas</a> de la Universidad Kent State la situó entre las estrategias de aprendizaje más eficaces, junto a la práctica de recuperación y la repetición espaciada.</p>
        <hr class="article-rule" />
        <h2>Por qué la mayoría se salta las tres</h2>
        <p>Porque hacerlas a mano es doloroso.</p>
        <p>Llevar la cuenta de qué repasar y cuándo, en varios temas, artículos y notas, se convierte enseguida en una tarea pesada que la mayoría abandona en una semana. Las técnicas funcionan. La fricción a su alrededor, no.</p>
        <hr class="article-rule" />
        <h2>La forma más sencilla</h2>
        <p><strong><a href="/es/">Fluxo</a></strong> está construido en torno a exactamente estos tres principios. Guardas lo que estás aprendiendo —artículos, notas, vocabulario, ideas— y lo organizas por tema. La IA genera un resumen rápido para que entiendas el material más deprisa. Luego Fluxo programa sesiones cortas de entrenamiento a los intervalos adecuados, de modo que repasas cada elemento cuando tu cerebro lo necesita de verdad.</p>
        <p>Sin hojas de cálculo. Sin seguimiento manual. Solo de 5 a 15 minutos al día, y de verdad recuerdas lo que aprendes.</p>
        <p>La ciencia lleva más de un siglo siendo clara. Lo difícil siempre fue hacerlo con constancia. Ese es el problema que resuelve Fluxo.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Empieza gratis</button>
      `,
    },
    "how-to-track-learning-progress": {
      routePath: "/es/blog/how-to-track-learning-progress/",
      heroAsset: "assets/card-2.png",
      heroAlt: "Cómo medir tu progreso de aprendizaje",
      meta: {
        title: "Cómo medir tu progreso de aprendizaje — Fluxo",
        description:
          "La mayoría mide el aprendizaje de la forma equivocada. Cuentan horas de estudio, libros terminados o páginas leídas. Esos números parecen significativos, pero miden la entrada, no el resultado.",
      },
      category: "Centro de conocimiento",
      title: "¿Cómo medir tu progreso de aprendizaje?",
      subtitle:
        "La mayoría mide el aprendizaje de la forma equivocada. Cuentan horas de estudio, libros terminados o páginas leídas. Esos números parecen significativos, pero miden la entrada, no el resultado.",
      author: "Equipo Fluxo",
      readTime: "4 min de lectura",
      bodyHtml: `
        <p>La verdadera pregunta es: ¿cuánto retienes en realidad?</p>
        <hr class="article-rule" />
        <h2>Por qué falla la mayoría del seguimiento</h2>
        <p>El tiempo dedicado a estudiar casi no se correlaciona con cuánto recuerdas. Un estudio de 2006 de <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Roediger y Karpicke, de la Universidad de Washington</a>, lo demostró directamente: dos grupos de estudiantes dedicaron el mismo tiempo al mismo material. Un grupo lo releyó. El otro se puso a prueba. Una semana después, el grupo que se autoevaluó recordaba bastante más, aunque «estudió» menos en el sentido tradicional.</p>
        <p>Las horas registradas no te dicen si hubo aprendizaje. La evocación sí.</p>
        <hr class="article-rule" />
        <h2>Lo que de verdad vale la pena medir</h2>
        <p><strong>Tasa de retención</strong></p>
        <p>¿Puedes recuperar esta información sin mirarla? Esa es la única métrica que importa para el aprendizaje a largo plazo. Todo lo demás —tiempo, finalización, subrayados— es un indicador indirecto que a menudo te engaña haciéndote creer que has aprendido más de lo que has aprendido.</p>
        <p><strong>Dificultad de evocación con el tiempo</strong></p>
        <p>¿Cuánto cuesta recordar algo al cabo de un día? ¿De una semana? ¿De un mes? Si la evocación se vuelve más fácil con el tiempo y con sesiones más cortas, el conocimiento se está consolidando. Si sigue costando, necesitas más repetición o un enfoque distinto. Hacer este seguimiento por temas te da una señal real de qué está funcionando.</p>
        <p><strong>Lagunas, no solo aciertos</strong></p>
        <p>La mayoría de los seguimientos de progreso te muestran lo que has completado. Más útil es registrar lo que has olvidado o has fallado. Un sistema que saca a la luz tus áreas más débiles y las prioriza en los repasos es más valioso que uno que cuenta rachas e insignias.</p>
        <hr class="article-rule" />
        <h2>El problema del seguimiento manual</h2>
        <p>Puedes montar una hoja de cálculo para registrar todo esto. Algunas personas lo hacen. La mayoría lo deja a las dos semanas porque mantenerla consume tanta energía como el propio aprendizaje.</p>
        <p>El valor de medir el progreso de aprendizaje es real: el Laboratorio de Enseñanza y Aprendizaje del MIT <a href="https://tll.mit.edu/teaching-resources/how-people-learn/metacognition/" target="_blank" rel="noopener">señala que la supervisión metacognitiva</a> mejora notablemente los resultados de aprendizaje. Saber dónde estás, qué se está desvaneciendo y qué necesita atención te permite dirigir el esfuerzo donde importa. Pero eso solo funciona si el seguimiento es automático.</p>
        <hr class="article-rule" />
        <h2>Cómo es el seguimiento automático del progreso</h2>
        <p><strong><a href="/es/">Fluxo</a></strong> mide la retención evaluando cómo rindes en cada sesión de repaso. Cada vez que evocas algo correctamente o te cuesta, Fluxo ajusta su modelo de lo que sabes. Con el tiempo, puedes ver tu tasa de retención por tema: no cuántas notas tienes, sino cuánto de ese material puedes evocar de verdad.</p>
        <p>Esto convierte el seguimiento del progreso de una tarea pesada en algo que simplemente ocurre mientras aprendes. Tú estudias, Fluxo mide, y en cualquier momento puedes ver con claridad qué materias están sólidas y cuáles necesitan más trabajo.</p>
        <p>Aprender sin seguimiento es volar a ciegas. Hacer seguimiento sin medir la evocación te dice cosas equivocadas. Fluxo hace ambas.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Empieza gratis</button>
      `,
    },
  },
  de: {
    "best-study-routine": {
      routePath: "/de/blog/best-study-routine/",
      heroAsset: "assets/card-3.png",
      heroAlt: "Die beste Lernroutine",
      meta: {
        title: "Die beste Lernroutine — Fluxo",
        description:
          "Die meisten bauen ihre Lernroutine falsch auf. Sie wählen eine Uhrzeit, schlagen ihre Notizen auf und beginnen zu lesen. Das ist keine Routine. Das ist nur die Angewohnheit, neben einem Buch zu sitzen.",
      },
      category: "Wissens-Hub",
      title: "Die beste Lernroutine",
      subtitle:
        "Die meisten bauen ihre Lernroutine falsch auf. Sie wählen eine Uhrzeit, schlagen ihre Notizen auf und beginnen zu lesen. Das ist keine Routine. Das ist nur die Angewohnheit, neben einem Buch zu sitzen.",
      author: "Fluxo-Team",
      readTime: "5 Min. Lesezeit",
      bodyHtml: `
        <p>Eine echte Lernroutine ist darauf ausgelegt, wie das Gehirn Informationen kodiert und speichert. Der Zeitplan zählt. Und was du in jeder Sitzung tust, ebenso.</p>
        <hr class="article-rule" />
        <h2>Was eine Routine wirklich funktionieren lässt</h2>
        <p><strong>Beständigkeit schlägt Dauer</strong></p>
        <p>Eine Stunde am Tag, jeden Tag, schlägt eine sechsstündige Sitzung am Sonntag. Das ist kein Motivationsspruch – so funktioniert die Gedächtniskonsolidierung. Schlaf spielt eine zentrale Rolle dabei, Informationen vom Kurzzeit- ins Langzeitgedächtnis zu überführen, und dieser Prozess braucht Zeit zwischen den Sitzungen. Wenn du Stoff über mehrere Tage verteilst, hat dein Gehirn wiederholt die Chance, ihn zu festigen.</p>
        <p><strong>Passe die Sitzung der kognitiven Anforderung an</strong></p>
        <p>Nicht alle Aufgaben sind gleich. Etwas Neues zu lernen verlangt mehr kognitive Anstrengung als das Wiederholen von Stoff, den du schon teilweise kennst. Forschung zu zirkadianen Rhythmen zeigt, dass die meisten Menschen ihren natürlichen Höhepunkt bei Aufmerksamkeit und Arbeitsgedächtnis am späten Vormittag haben. Wenn du dieses Fenster für deinen schwierigsten Stoff reservierst und leichteres Wiederholen in Phasen mit weniger Energie legst, wird dieselbe Zeit effektiver.</p>
        <p><strong>Nutze Umsetzungsabsichten</strong></p>
        <p>Peter Gollwitzers Forschung an der NYU, <a href="https://doi.org/10.1002/ejsp.345" target="_blank" rel="noopener">zusammengefasst in einer Metaanalyse von 2006 mit Sheeran</a>, zeigte einen mittleren bis großen Effekt auf das Erreichen von Zielen, wenn Menschen konkrete „Wenn-dann"-Pläne formulierten: „Wenn es 20 Uhr an einem Wochentag ist, mache ich 20 Minuten Wiederholung am Schreibtisch." Die Konkretheit nimmt dir die tägliche Entscheidung ab, ob und wann du lernst. Du verhandelst nicht mit dir selbst – du folgst einfach dem Plan.</p>
        <hr class="article-rule" />
        <h2>Eine einfache Struktur, die funktioniert</h2>
        <p>Eine Routine, die auf diesen Prinzipien aufbaut, hat drei Teile:</p>
        <p><strong>Morgens (10 bis 20 Minuten):</strong> Wiederhole, was du gestern gelernt hast, bevor dein Gehirn ganz im Tag ankommt. Das ist die Zeit, in der verteiltes Wiederholen am besten wirkt – der Stoff wurde gerade über Nacht konsolidiert, und Wiederholung jetzt setzt ein längeres Intervall bis zum nächsten Mal.</p>
        <p><strong>Block aktives Lernen (25 bis 45 Minuten):</strong> Das ist deine Hauptsitzung. Neuer Stoff, schwierige Themen, etwas in eigenen Worten formulieren oder Aufgaben lösen. Kein Wiederlesen. Teste dich selbst, fasse aus dem Gedächtnis zusammen, verknüpfe Ideen.</p>
        <p><strong>Tagesabschluss (5 Minuten):</strong> Notiere alles Neue vom Tag, was es wert ist, festgehalten zu werden. Ein Begriff, ein Konzept, ein Aha-Moment aus einem Meeting. Das dauert fünf Minuten und hält den Input-Strom offen, ohne eine weitere komplette Lernsitzung zu verlangen.</p>
        <hr class="article-rule" />
        <h2>Der Teil, den die meisten Routinen auslassen</h2>
        <p>Den Zeitplan zu bauen ist der leichte Teil. Schwierig ist das System, das zwischen den Sitzungen läuft. Zu wissen, was morgen dran ist, im Blick zu behalten, was fällig ist, und älteren Stoff nicht entgleiten zu lassen.</p>
        <p><strong><a href="/de/">Fluxo</a></strong> erledigt das automatisch. Du konzentrierst dich aufs Lernen. Fluxo verfolgt, was wann zu wiederholen ist, sodass deine Routine beständig bleibt, ohne dass du sie manuell verwalten musst.</p>
        <p>Eine gute Lernroutine muss nicht kompliziert sein. Sie muss beständig sein und darauf aufbauen, wie das Gehirn tatsächlich arbeitet.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Kostenlos starten</button>
      `,
    },
    "best-way-to-learn-new-vocabulary": {
      routePath: "/de/blog/best-way-to-learn-new-vocabulary/",
      heroAsset: "assets/card-3.png",
      heroAlt: "Der beste Weg, neue Vokabeln zu lernen",
      meta: {
        title: "Der beste Weg, neue Vokabeln zu lernen — Fluxo",
        description:
          "Ob du eine Fremdsprache lernst, Fachbegriffe für einen neuen Job aufnimmst oder Fachwissen in Medizin, Recht oder Design aufbaust – Vokabular ist die Grundlage.",
      },
      category: "Wissens-Hub",
      title: "Der beste Weg, neue Vokabeln zu lernen",
      subtitle:
        "Ob du eine Fremdsprache lernst, Fachbegriffe für einen neuen Job aufnimmst oder Fachwissen in Medizin, Recht oder Design aufbaust – Vokabular ist die Grundlage.",
      author: "Fluxo-Team",
      readTime: "4 Min. Lesezeit",
      bodyHtml: `
        <p>Die Frage ist, welche Methode wirklich funktioniert und warum die meisten es nicht tun.</p>
        <hr class="article-rule" />
        <h2>Warum stures Auswendiglernen versagt</h2>
        <p>Ein Wort zehnmal zu schreiben und zu hoffen, dass es hängen bleibt, ist ungefähr so effektiv wie es zehnmal zu lesen. Beides ist passiv. Dein Gehirn legt die Information als wenig wichtig ab, weil du nichts Forderndes mit ihr getan hast.</p>
        <p>Die Illusion des Fortschritts ist Teil des Problems. Nach genug Wiederholungen wirkt ein Wort vertraut. Vertrautheit fühlt sich wie Wissen an. Aber Vertrautheit aktiviert nur Wiedererkennen, nicht Abrufen. Du erkennst das Wort vielleicht, wenn du es siehst, und hast keine Ahnung, was es bedeutet, wenn du es produzieren sollst.</p>
        <hr class="article-rule" />
        <h2>Was die Forschung zeigt</h2>
        <p><strong>Verteiltes Wiederholen ist die effektivste Methode für Vokabel-Retention</strong></p>
        <p>Eine Metaanalyse von 2022 von Kim und Webb, veröffentlicht in <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/lang.12479" target="_blank" rel="noopener"><em>Language Learning</em></a>, untersuchte 48 Experimente mit über 3.400 Teilnehmenden, die Vokabular einer Zweitsprache lernten. Der Befund war klar: Verteiltes Üben übertraf massiertes Üben durchgehend bei der langfristigen Retention. Wörter in wachsenden Intervallen zu wiederholen statt in einem Rutsch erzeugt mit der Zeit deutlich besseren Abruf.</p>
        <p><strong>Aktives Abrufen schlägt passive Aufnahme</strong></p>
        <p>Ein Wort und seine Definition zu sehen, ist passiv. Die Definition gezeigt zu bekommen und das Wort produzieren zu müssen, ist aktiv. Diese Abrufanstrengung – selbst wenn du daneben liegst – baut eine stärkere Gedächtnisspur auf als jede Menge passives Wiederholen. Das ist derselbe Test-Effekt, den <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Roediger und Karpicke</a> dokumentiert haben und der für jedes Lernen gilt – beim Vokabular ist er besonders kraftvoll.</p>
        <p><strong>Kontext zählt</strong></p>
        <p>Einzelne Karteikarten wirken besser als das Wiederlesen von Wortlisten, aber sie wirken noch besser, wenn das Wort mit etwas Bedeutungsvollem verknüpft ist – einem Beispielsatz, einem realen Anwendungsfall, einem Konzept, das du bereits verstehst. Im Kontext gelernter Wortschatz hält länger und ist nutzbarer als Wortschatz, den du als abstraktes Symbol lernst.</p>
        <hr class="article-rule" />
        <h2>Praktische Anwendung</h2>
        <p>Der beste Ansatz verbindet alle drei:</p>
        <ol>
          <li>Lerne das Wort mit Kontext, nicht nur mit einer Definition</li>
          <li>Teste dich daran ab der ersten Sitzung, bevor du dich bereit fühlst</li>
          <li>Wiederhole es in wachsenden Intervallen, nicht alles auf einmal</li>
        </ol>
        <p>Das gilt für jeden Wortschatz – nicht nur für Fremdsprachen. Fachbegriffe, Fachkonzepte und Berufsjargon folgen denselben Regeln.</p>
        <hr class="article-rule" />
        <h2>So bleibt es hängen, ohne dass es zur Last wird</h2>
        <p>Das Schwierige ist nicht, die Methode zu kennen. Sondern das System des verteilten Wiederholens über Hunderte von Wörtern aufrechtzuerhalten, ohne dass es zu einem Vollzeitjob wird.</p>
        <p><strong><a href="/de/">Fluxo</a></strong> übernimmt das automatisch. Du fügst Vokabeln deinem Raum hinzu – Wörter, Definitionen, Kontextsätze – und Fluxo plant deine Wiederholungen. Du verbringst ein paar Minuten am Tag mit Abrufübungen, und das System verfolgt, welche Wörter sitzen und welche mehr Aufmerksamkeit brauchen.</p>
        <p>Die Wissenschaft zur Vokabel-Retention ist klar. Was meist scheitert, ist die Umsetzung. Fluxo macht die Umsetzung automatisch.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Kostenlos starten</button>
      `,
    },
    "how-to-study-while-working-full-time": {
      routePath: "/de/blog/how-to-study-while-working-full-time/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Wie lernen neben einem Vollzeitjob",
      meta: {
        title: "Wie lernen neben einem Vollzeitjob — Fluxo",
        description:
          "Du willst etwas Neues lernen. Eine Sprache, eine Fähigkeit, ein Fach, das für deine Karriere oder einfach für dich wichtig ist. Und du hast vielleicht 45 Minuten am Tag, wenn alles glattläuft.",
      },
      category: "Wissens-Hub",
      title: "Wie lernen neben einem Vollzeitjob?",
      subtitle:
        "Du willst etwas Neues lernen. Eine Sprache, eine Fähigkeit, ein Fach, das für deine Karriere oder einfach für dich wichtig ist. Und du hast vielleicht 45 Minuten am Tag, wenn alles glattläuft.",
      author: "Fluxo-Team",
      readTime: "5 Min. Lesezeit",
      bodyHtml: `
        <p>Das ist tatsächlich genug. Aber nur, wenn du diese Zeit anders nutzt als Studierende.</p>
        <hr class="article-rule" />
        <h2>Das falsche Modell</h2>
        <p>Die meisten Lerntipps sind für Studierende gedacht – mit Vier-Stunden-Blöcken, Prüfungsterminen und Lernen als Hauptbeschäftigung. Wenn du Vollzeit arbeitest, scheitert dieses Modell nicht nur – es lässt dich permanent das Gefühl haben, im Rückstand zu sein.</p>
        <p>Den Versuch, einen Studienplan in den Lücken eines Erwachsenenlebens nachzubauen, bedeutet meist einen konzentrierten Wochenend-Anlauf, gefolgt von zwei Wochen nichts. Unbeständigkeit killt Retention schneller als jeder Mangel an Talent.</p>
        <hr class="article-rule" />
        <h2>Warum kürzere, häufigere Sitzungen besser funktionieren</h2>
        <p>Die Forschung dazu ist eindeutig. <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">Cepeda et al.s Metaanalyse von 2006</a> im <em>Psychological Bulletin</em> zeigte, dass das Verteilen von Lernen über mehrere Sitzungen bessere Retention erzeugt als dieselbe Gesamtzeit in einer Sitzung. Das ist nicht nur eine Annehmlichkeit – es ist ein struktureller Vorteil für Menschen mit begrenzten täglichen Zeitfenstern.</p>
        <p>Kurze tägliche Sitzungen passen außerdem dazu, wie Gedächtniskonsolidierung funktioniert. Der Schlaf verarbeitet und festigt, was du tagsüber gelernt hast. Wenn du heute Abend 20 Minuten lernst und schläfst, arbeitet dein Gehirn an diesem Stoff, während du ruhst. Sieben 20-minütige Sitzungen über die Woche bringen bessere Retention als eine 140-minütige Sitzung am Samstag.</p>
        <p>Dieser Ansatz hat in der Lernforschung sogar einen Namen: Microlearning. Eine <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1491265/full" target="_blank" rel="noopener">Übersichtsarbeit in <em>Frontiers in Psychology</em> (2025)</a> fand Microlearning wirksam, um Wissen und Fähigkeiten unter Zeitdruck aufzubauen – genau die Situation berufstätiger Lernender.</p>
        <hr class="article-rule" />
        <h2>Eine realistische Tagesstruktur</h2>
        <p><strong>10 bis 15 Minuten morgens:</strong> Wiederholung mit verteiltem Wiederholen. Geh durch, was Fluxo oder deine App als fällig markiert. So fängst du Stoff ab, bevor er verblasst, und arbeitest mit der Gedächtniskonsolidierung der Nacht zusammen.</p>
        <p><strong>20 bis 30 Minuten abends:</strong> Eine konzentrierte Lernsitzung. Neuer Stoff, Lesen mit aktiver Annotation oder ein Konzept durcharbeiten. Kein Multitasking. Benachrichtigungen aus.</p>
        <p>Das war's. 30 bis 45 Minuten gesamt, keine großen Blöcke nötig.</p>
        <p>Entscheidend ist, diese beiden Fenster zu schützen. Nicht zu erweitern – zu schützen. Beständigkeit vor Volumen.</p>
        <hr class="article-rule" />
        <h2>Das System zählt mehr als die Motivation</h2>
        <p>Das Schwerste am Lernen neben einem Vollzeitjob ist nicht, Zeit zu finden. Es ist sicherzustellen, dass die gefundene Zeit für die richtigen Dinge genutzt wird. Ohne ein System, das dir sagt, was zu wiederholen und was als Nächstes zu lernen ist, fängst du jedes Mal von vorn an, deckst dasselbe Terrain ab oder liest einfach passiv.</p>
        <p><strong><a href="/de/">Fluxo</a></strong> gibt berufstätigen Lernenden ein System, das sich selbst trägt. Du fügst hinzu, was du lernst, die KI erzeugt Zusammenfassungen, damit du weniger Zeit mit Verstehen und mehr mit Üben verbringst, und Fluxo zeigt dir jeden Tag genau, was in deiner verfügbaren Zeit dran ist.</p>
        <p>Du brauchst keine Stunden. Du brauchst ein System, das in Minuten funktioniert.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Kostenlos starten</button>
      `,
    },
    "the-second-brain-for-learning": {
      routePath: "/de/blog/the-second-brain-for-learning/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Das zweite Gehirn fürs Lernen",
      meta: {
        title: "Das zweite Gehirn fürs Lernen — Fluxo",
        description:
          "Jedes Jahr liest du Dutzende Artikel, machst Kurse, hörst Podcasts und sitzt in Meetings voller nützlicher Informationen. Und jedes Jahr ist fast nichts davon verfügbar, wenn du es wirklich brauchst.",
      },
      category: "Wissens-Hub",
      title: "Das zweite Gehirn fürs Lernen",
      subtitle:
        "Jedes Jahr liest du Dutzende Artikel, machst Kurse, hörst Podcasts und sitzt in Meetings voller nützlicher Informationen. Und jedes Jahr ist fast nichts davon verfügbar, wenn du es wirklich brauchst.",
      author: "Fluxo-Team",
      readTime: "4 Min. Lesezeit",
      bodyHtml: `
        <p>Nicht weil du vergesslich bist. Sondern weil du kein System hast, um es zu behalten.</p>
        <hr class="article-rule" />
        <h2>Woher die Idee kommt</h2>
        <p>Den Begriff „zweites Gehirn" prägte der Produktivitätsforscher Tiago Forte. Die Kernidee ist einfach: Dein biologisches Gehirn ist zum Denken und Erschaffen gebaut, nicht zum Speichern. Wenn du es als Festplatte zu nutzen versuchst – jeden Artikel, Fakt und Gedanken festzuhalten – erzeugst du mentales Chaos und verlierst trotzdem das meiste.</p>
        <p>Ein zweites Gehirn ist ein externes System, meist digital, in dem du erfasst, ordnest und Gelerntes wieder durchgehst. Forte beschreibt den Prozess als CODE: Capture (erfassen), Organize (ordnen), Distill (verdichten), Express (ausdrücken). Ziel ist nicht, alles zu archivieren. Es ist, die wichtigen Ideen lange genug am Leben zu halten, um sie zu nutzen.</p>
        <p>Das Konzept ist nicht neu. Commonplace Books – persönliche Sammlungen von Notizen, Zitaten und Ideen – nutzen Denker und Autoren seit Jahrhunderten. Digitale Werkzeuge machen das System einfach schneller und durchsuchbarer.</p>
        <hr class="article-rule" />
        <h2>Die Lücke der meisten zweiten Gehirne</h2>
        <p>Hier ist das Problem der meisten Notiz-Systeme: Sie sind passiv.</p>
        <p>Notion, Obsidian, Evernote – alles ausgezeichnete Werkzeuge zum Erfassen und Ordnen. Aber Informationen zu erfassen ist nicht dasselbe wie sie zu lernen. Du kannst 2.000 perfekt verschlagwortete Notizen haben und dich an fast keine erinnern, weil du nie aktiv etwas davon abgerufen hast.</p>
        <p>Ein nützliches zweites Gehirn fürs Lernen braucht zwei Dinge, die den meisten Systemen fehlen: aktives Wiederholen und verteiltes Wiederholen. Nicht nur Speicherung. Training.</p>
        <p>Forschung von Roediger und Karpicke an der Washington University, <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">veröffentlicht 2006</a>, zeigte, dass das Abrufen von Informationen aus dem Gedächtnis weit bessere Langzeit-Retention bringt als das Wiederlesen. Das Gehirn behält, was es zu holen übt.</p>
        <hr class="article-rule" />
        <h2>Wie ein aktives zweites Gehirn aussieht</h2>
        <p>Ein wirksames zweites Gehirn fürs Lernen tut vier Dinge:</p>
        <p><strong>Erfasst</strong> alles, was dir begegnet – Artikel, Notizen, Begriffe, Ideen – ohne Reibung. Je niedriger die Einstiegshürde, desto eher nutzt du es wirklich.</p>
        <p><strong>Ordnet</strong> nach Thema, nicht nach Quelle. Wenn alles zu einem Thema beisammen liegt, ergeben sich Verbindungen von selbst.</p>
        <p><strong>Verdichtet</strong> die Kernaussagen. Nicht jedes Wort jedes Artikels. Die ein, zwei Ideen, an die du dich in einem Jahr wirklich erinnern möchtest.</p>
        <p><strong>Trainiert</strong> dein Gedächtnis mit diesen verdichteten Ideen in wachsenden Intervallen, sodass du vom Speichern zum echten Besitzen von Wissen kommst.</p>
        <hr class="article-rule" />
        <h2>Wie Fluxo hineinpasst</h2>
        <p><strong><a href="/de/">Fluxo</a></strong> ist als aktives zweites Gehirn gebaut. Du fügst hinzu, was du lernst, die KI erzeugt eine Zusammenfassung der Kernideen, und Fluxo plant kurze Wiederholungseinheiten nach den Prinzipien des verteilten Wiederholens – du testest dich am Stoff in den richtigen Intervallen, statt ihn nur zu überfliegen.</p>
        <p>Der Unterschied zwischen einer Notiz-App und Fluxo ist der Unterschied zwischen etwas aufschreiben und es wirklich üben. Beide erfassen. Nur eines trainiert dich.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Kostenlos starten</button>
      `,
    },
    "how-to-learn-without-forgetting": {
      routePath: "/de/blog/how-to-learn-without-forgetting/",
      heroAsset: "assets/card-2.png",
      heroAlt: "Wie lernen, ohne zu vergessen",
      meta: {
        title: "Wie lernen, ohne zu vergessen — Fluxo",
        description:
          "Du liest ein Buch zu Ende. Du sitzt ein Webinar aus. Du speicherst ein Dutzend Artikel. Und irgendwo zwischen der letzten Seite und dem echten Leben verschwindet fast alles.",
      },
      category: "Wissens-Hub",
      title: "Wie lernen, ohne zu vergessen?",
      subtitle:
        "Du liest ein Buch zu Ende. Du sitzt ein Webinar aus. Du speicherst ein Dutzend Artikel. Und irgendwo zwischen der letzten Seite und dem echten Leben verschwindet fast alles.",
      author: "Fluxo-Team",
      readTime: "4 Min. Lesezeit",
      bodyHtml: `
        <p>Das ist keine Faulheit. Das Gehirn ist nicht dafür gebaut, rohe Informationen endlos zu halten. Es speichert, was es nutzt, und verwirft, was es nicht nutzt. Die Frage ist nicht, wie du mehr liest. Sondern wie du dein Gehirn dazu bringst, neue Informationen als bewahrenswert zu behandeln.</p>
        <hr class="article-rule" />
        <h2>Das eigentliche Problem: Passiver Konsum fühlt sich wie Lernen an</h2>
        <p>Notizen wiederlesen, Text markieren, Vorlesungen zweimal schauen – das fühlt sich produktiv an. Die Forschung zeigt: meist ist es das nicht.</p>
        <p>Eine Übersichtsarbeit von 2019 in <em>Frontiers in Education</em> fasste Jahrzehnte von Studien im Unterricht zusammen: Einen Text immer wieder zu lesen, erzeugt ein falsches Gefühl von Vertrautheit. Lernende meinen, den Stoff zu können, weil er vertraut wirkt – aber dieses Wiedererkennen übersetzt sich nicht in echten Abruf, wenn er gebraucht wird. Vertrautheit und Gedächtnis sind verschiedene Dinge.</p>
        <p>Die Lösung verlangt aktive Verarbeitung, nicht mehr passive Aufnahme.</p>
        <hr class="article-rule" />
        <h2>Was Vergessen wirklich verhindert</h2>
        <p><strong>Teste dich selbst, lies nicht wieder</strong></p>
        <p>Das Wirksamste, was du tun kannst, ist zu versuchen, Informationen aus dem Gedächtnis abzurufen, bevor du dich bereit fühlst. Das nennt sich Abruf-Praxis und funktioniert, weil das Hervorholen aus dem Gedächtnis – auch wenn es schwerfällt – die neuronale Bahn stärkt, die es trägt.</p>
        <p>Roediger und Karpicke an der Washington University zeigten das in <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">ihrer Studie von 2006</a> klar: Lernende, die sich nach dem Lesen testeten, behielten eine Woche später deutlich mehr als jene, die denselben Stoff nur wiederlasen – obwohl beide Gruppen dieselbe Gesamtzeit aufwandten.</p>
        <p><strong>Verteile deine Wiederholungen</strong></p>
        <p>Etwas einmal zu wiederholen und weiterzumachen, garantiert fast, dass du es vergisst. Es noch einmal kurz vor dem Verblassen zu wiederholen – und dann erneut in einem längeren Intervall – baut wirklich langfristige Retention auf. <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">Cepeda et al.s Metaanalyse von 254 Studien</a> im <em>Psychological Bulletin</em> bestätigte, dass das Verteilen von Übung in der Zeit jede Menge an Pauken übertrifft.</p>
        <p><strong>Verknüpfe neues Wissen mit Bekanntem</strong></p>
        <p>Wenn du etwas lernst, frage dich, wie es zu Dingen passt, die du schon verstehst. Das zwingt dein Gehirn, die neue Information tiefer zu verarbeiten, statt sie als isolierte Tatsache abzulegen. Dunlosky und Kollegen an der Kent State zählten diese „elaborative Interrogation" in ihrer <a href="https://journals.sagepub.com/doi/10.1177/1529100612453266" target="_blank" rel="noopener">Übersicht von 2013</a> zu den wirksamsten Lernstrategien.</p>
        <hr class="article-rule" />
        <h2>Das Beständigkeitsproblem</h2>
        <p>Diese drei Techniken wirken. Das Problem ist, sie über alle Themen, die du lernst, beständig anzuwenden, ohne zu vergessen, was wann zu wiederholen ist.</p>
        <p><strong><a href="/de/">Fluxo</a></strong> übernimmt die System-Seite. Du erfasst, was du lernst, die KI holt die Kerngedanken heraus und Fluxo plant Wiederholungseinheiten in den richtigen Intervallen. Du tauchst 10 Minuten auf, machst die Arbeit, der Rest läuft von selbst.</p>
        <p>Lernen ohne zu vergessen ist keine Magie. Es ist ein System. Und Systeme funktionieren am besten, wenn sie nicht allein von Willenskraft abhängen.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Kostenlos starten</button>
      `,
    },
    "how-to-remember-what-you-learn": {
      routePath: "/de/blog/how-to-remember-what-you-learn/",
      heroAsset: "assets/card-1.png",
      heroAlt: "Notizen und Gedächtnis",
      meta: {
        title: "Wie behältst du, was du lernst — Fluxo",
        description:
          "Du liest. Du beendest einen Kurs. Du machst Notizen. Und eine Woche später ist alles weg. Das ist kein Gedächtnisproblem – es ist ein Systemproblem.",
      },
      category: "Wissens-Hub",
      title: "Wie behältst du, was du lernst?",
      subtitle:
        "Du liest einen Artikel. Du beendest einen Kurs. Du machst Notizen. Und eine Woche später ist alles weg.",
      author: "Fluxo-Team",
      readTime: "6 Min. Lesezeit",
      bodyHtml: `
        <p>Das ist kein Gedächtnisproblem. Es ist ein Systemproblem. Die meisten konsumieren Informationen, ohne einen Prozess aufzubauen, sie wirklich zu behalten. Hier ist, was die Wissenschaft sagt – und was funktioniert.</p>
        <hr class="article-rule" />
        <h2>Warum du so schnell vergisst</h2>
        <p>1885 wurde der deutsche Psychologe Hermann Ebbinghaus zum Ersten, der Gedächtnis wissenschaftlich erforschte. Er lernte über Jahre Listen sinnloser Silben auswendig und maß, wie schnell er sie nach verschiedenen Zeitabständen wieder abrufen konnte. Sein Befund wurde als <strong>Vergessenskurve</strong> bekannt: Das Gedächtnis fällt direkt nach dem Lernen steil ab und flacht dann aus. Ohne jede Wiederholung vergessen wir 50 bis 70 % neuer Informationen innerhalb eines einzigen Tages.</p>
        <p>2015 veröffentlichten Murre und Dros eine direkte Replikation von Ebbinghaus' Originalexperimenten in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4492928/" target="_blank" rel="noopener">PLOS ONE</a> und kamen über 130 Jahre später auf nahezu identische Zahlen. Es ist einer der am häufigsten replizierten Befunde der kognitiven Psychologie.</p>
        <p>Die Kurve ist keine persönliche Schwäche. So funktioniert das Gehirn einfach im Standardmodus. Die gute Nachricht: Drei Techniken wirken direkt entgegen.</p>
        <hr class="article-rule" />
        <h2>3 Techniken, die wirklich funktionieren</h2>
        <h3>1. Aktives Abrufen</h3>
        <p>Statt deine Notizen wiederzulesen, schließe sie und versuche, die Information aus dem Gedächtnis zu holen. Schon das Bemühen, sich zu erinnern, stärkt neuronale Verbindungen mehr als passives Wiederholen.</p>
        <p>2006 führten Henry Roediger und Jeffrey Karpicke an der Washington University ein heute klassisches Experiment durch. Lernende lasen einen Text entweder mehrmals durch oder testeten sich daran. In einem unmittelbaren Test schnitt das Wiederlesen leicht besser ab. Aber eine Woche später behielt die Selbsttest-Gruppe deutlich mehr. Ihre Arbeit <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Test-Enhanced Learning</a> in <em>Psychological Science</em> kam zum Schluss: Sich selbst zu testen ist nicht nur eine Art zu prüfen, was du weißt. Es ist eine der wirksamsten Arten, überhaupt zu lernen.</p>
        <h3>2. Verteiltes Wiederholen</h3>
        <p>Stoff genau dann zu wiederholen, wenn du ihn fast vergisst, wirkt weit besser als ihn mehrmals am selben Tag durchzugehen. Forschende nennen das den Spacing-Effekt, und er wird seit über einem Jahrhundert untersucht.</p>
        <p>2006 veröffentlichten Nicholas Cepeda und Kollegen an der UC San Diego eine <a href="https://www.yorku.ca/ncepeda/publications/CPVWR2006.html" target="_blank" rel="noopener">Metaanalyse von 254 Studien</a> mit über 14.000 Beobachtungen im <em>Psychological Bulletin</em>. Der Befund war klar: Übung in der Zeit zu verteilen brachte durchgehend bessere Langzeit-Retention als dieselbe Übungsmenge in einer einzigen Sitzung zu pauken. Der richtige Abstand zwischen Wiederholungen hängt davon ab, wie lange du den Stoff behalten willst. Je länger das Ziel, desto länger die Intervalle.</p>
        <h3>3. Elaborative Interrogation</h3>
        <p>Wenn du etwas Neues lernst, frage dich, <em>warum</em> es stimmt und wie es mit dem zusammenhängt, was du schon weißt. Das erzwingt tiefere Verarbeitung und verankert neues Wissen am bestehenden, statt es isoliert zu lassen. Eine <a href="https://journals.sagepub.com/doi/10.1177/1529100612453266" target="_blank" rel="noopener">Übersicht von 2013 von Dunlosky und Kollegen</a> an der Kent State zählte sie zu den wirksamsten Lernstrategien – neben Abruf-Praxis und verteiltem Wiederholen.</p>
        <hr class="article-rule" />
        <h2>Warum die meisten alle drei auslassen</h2>
        <p>Weil es schmerzhaft ist, sie manuell zu machen.</p>
        <p>Im Blick zu behalten, was wann zu wiederholen ist, über mehrere Themen, Artikel und Notizen, wird schnell zur Pflicht, die die meisten innerhalb einer Woche fallen lassen. Die Techniken wirken. Die Reibung drumherum nicht.</p>
        <hr class="article-rule" />
        <h2>Der einfachere Weg</h2>
        <p><strong><a href="/de/">Fluxo</a></strong> ist genau um diese drei Prinzipien gebaut. Du speicherst, was du lernst – Artikel, Notizen, Vokabeln, Ideen – und ordnest nach Thema. Die KI erzeugt eine schnelle Zusammenfassung, damit du den Stoff schneller verstehst. Dann plant Fluxo kurze Trainingseinheiten in den richtigen Intervallen, sodass du jedes Element wiederholst, wenn dein Gehirn es wirklich braucht.</p>
        <p>Keine Tabellen. Kein manuelles Tracking. Nur 5 bis 15 Minuten am Tag – und du behältst tatsächlich, was du lernst.</p>
        <p>Die Wissenschaft ist seit über einem Jahrhundert klar. Das Schwierige war immer, es beständig zu tun. Genau dieses Problem löst Fluxo.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Kostenlos starten</button>
      `,
    },
    "how-to-track-learning-progress": {
      routePath: "/de/blog/how-to-track-learning-progress/",
      heroAsset: "assets/card-2.png",
      heroAlt: "Wie verfolgst du deinen Lernfortschritt",
      meta: {
        title: "Wie verfolgst du deinen Lernfortschritt — Fluxo",
        description:
          "Die meisten messen Lernen falsch. Sie zählen Lernstunden, gelesene Bücher oder Seiten. Diese Zahlen fühlen sich bedeutsam an, messen aber Input, nicht Ergebnis.",
      },
      category: "Wissens-Hub",
      title: "Wie verfolgst du deinen Lernfortschritt?",
      subtitle:
        "Die meisten messen Lernen falsch. Sie zählen Lernstunden, gelesene Bücher oder Seiten. Diese Zahlen fühlen sich bedeutsam an, messen aber Input, nicht Ergebnis.",
      author: "Fluxo-Team",
      readTime: "4 Min. Lesezeit",
      bodyHtml: `
        <p>Die eigentliche Frage ist: Wie viel behältst du wirklich?</p>
        <hr class="article-rule" />
        <h2>Warum die meiste Erfassung scheitert</h2>
        <p>Die Lernzeit hat fast keine Korrelation damit, wie viel du behältst. Eine Studie von 2006 von <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Roediger und Karpicke an der Washington University</a> zeigte das direkt: Zwei Gruppen verbrachten dieselbe Zeit mit demselben Stoff. Eine las ihn wieder. Die andere testete sich. Eine Woche später erinnerte sich die Selbsttest-Gruppe an deutlich mehr – obwohl sie im klassischen Sinn weniger „lernte".</p>
        <p>Erfasste Stunden sagen nichts darüber, ob gelernt wurde. Abruf schon.</p>
        <hr class="article-rule" />
        <h2>Was wirklich messenswert ist</h2>
        <p><strong>Behaltensquote</strong></p>
        <p>Kannst du diese Information abrufen, ohne nachzusehen? Das ist die einzige Kennzahl, die für langfristiges Lernen zählt. Alles andere – Zeit, Erledigung, Markierungen – ist ein Hilfsindikator, der dich oft glauben lässt, du hättest mehr gelernt als tatsächlich.</p>
        <p><strong>Abruf-Schwierigkeit über die Zeit</strong></p>
        <p>Wie schwer fällt es, sich nach einem Tag zu erinnern? Nach einer Woche? Nach einem Monat? Wird der Abruf in kürzeren Sitzungen über die Zeit leichter, festigt sich das Wissen. Bleibt er schwer, brauchst du mehr Wiederholung oder einen anderen Ansatz. Das über Themen hinweg zu verfolgen liefert ein echtes Signal, was funktioniert.</p>
        <p><strong>Lücken, nicht nur Erfolge</strong></p>
        <p>Die meisten Fortschritts-Tracker zeigen dir, was du erledigt hast. Nützlicher ist, zu verfolgen, was du vergessen oder falsch gemacht hast. Ein System, das deine schwächsten Bereiche aufdeckt und sie in Wiederholungen priorisiert, ist wertvoller als eines, das Serien und Abzeichen zählt.</p>
        <hr class="article-rule" />
        <h2>Das Problem manuellen Trackings</h2>
        <p>Du kannst all das in einer Tabelle erfassen. Manche tun das. Die meisten brechen nach zwei Wochen ab, weil ihre Pflege so viel Energie kostet wie das Lernen selbst.</p>
        <p>Der Nutzen, Lernfortschritt zu verfolgen, ist real – das Teaching and Learning Lab des MIT <a href="https://tll.mit.edu/teaching-resources/how-people-learn/metacognition/" target="_blank" rel="noopener">weist darauf hin, dass metakognitives Monitoring</a> die Lernergebnisse deutlich verbessert. Zu wissen, wo du stehst, was verblasst und was Aufmerksamkeit braucht, lässt dich deine Anstrengung dorthin lenken, wo sie zählt. Aber das funktioniert nur, wenn die Erfassung automatisch ist.</p>
        <hr class="article-rule" />
        <h2>Wie automatische Fortschrittserfassung aussieht</h2>
        <p><strong><a href="/de/">Fluxo</a></strong> erfasst Retention, indem es misst, wie du in jeder Wiederholungseinheit abschneidest. Jedes Mal, wenn du etwas richtig abrufst oder dich quälst, passt Fluxo sein Modell deines Wissens an. Mit der Zeit siehst du deine Behaltensquote pro Thema – nicht wie viele Notizen du hast, sondern wie viel davon du tatsächlich abrufen kannst.</p>
        <p>Das verwandelt Fortschrittserfassung von einer Pflicht in etwas, das beim Lernen einfach passiert. Du lernst, Fluxo misst, und du kannst jederzeit klar sehen, welche Fächer sitzen und welche mehr Arbeit brauchen.</p>
        <p>Lernen ohne Erfassung ist Blindflug. Erfassung ohne Abruf-Messung sagt dir die falschen Dinge. Fluxo tut beides.</p>
        <button type="button" class="btn-primary" data-modal-open data-from="article-cta">Kostenlos starten</button>
      `,
    },
  },
} satisfies Record<LocaleKey, Record<BlogSlug, BlogArticle>>;

export const blogLanguageNav = (slug: BlogSlug): LanguageOption[] =>
  buildLanguageNav((locale) => (blogContent[locale] ?? blogContent.en)[slug].routePath);
