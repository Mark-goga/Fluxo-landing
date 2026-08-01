import { siteConfig, type LocaleKey } from "@kit/config/site";

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
  why: {
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
  blog: {
    metaTitle: string;
    metaDescription: string;
    subtitle: string;
    ui: {
      title: string;
      subtitle: string;
      breadcrumbHome: string;
      breadcrumbBlog: string;
      tableOfContents: string;
      searchPlaceholder: string;
      searchAriaLabel: string;
      featuredTag: string;
      articleSingular: string;
      articlePlural: string;
      countSuffix: string;
      matchedFor: string;
      readMoreLabel: string;
      emptyTitle: string;
      emptyBody: string;
      emptyClear: string;
    };
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
        { label: "Blog", href: "/blog/" },
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
    why: {
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
      submit: { label: "Get early access", href: "#", clarityEvent: "signup_submit" },
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
    blog: {
      metaTitle: `${siteConfig.name} Blog — Learning science, study workflows & spaced repetition`,
      metaDescription:
        "Practical, research-backed guides on how to study effectively, remember what you read, and build durable knowledge with spaced repetition.",
      subtitle:
        "Research-backed guides on studying, retention, and spaced repetition.",
      ui: {
        title: "Learning, better.",
        subtitle:
          "Research-backed guides on how to study, remember what you read, and turn notes into knowledge that sticks — from the team building Fluxo.",
        breadcrumbHome: "Home",
        breadcrumbBlog: "Blog",
        tableOfContents: "Table of contents",
        searchPlaceholder: "Search articles…",
        searchAriaLabel: "Search articles",
        featuredTag: "Featured",
        articleSingular: "article",
        articlePlural: "articles",
        countSuffix: "articles",
        matchedFor: "for",
        readMoreLabel: "Read article",
        emptyTitle: "No articles found",
        emptyBody: "Nothing matches your search yet. Try another term.",
        emptyClear: "Clear search",
      },
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
        { label: "Блог", href: "/uk/blog/" },
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
    why: {
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
    blog: {
      metaTitle: `Блог ${siteConfig.name} — наука навчання, робочі процеси та інтервальне повторення`,
      metaDescription:
        "Практичні гайди на основі досліджень: як ефективно вчитися, запам'ятовувати прочитане та будувати міцні знання через інтервальне повторення.",
      subtitle:
        "Гайди на основі досліджень про навчання, запам'ятовування та інтервальне повторення.",
      ui: {
        title: "Вчитися краще.",
        subtitle:
          "Гайди на основі досліджень: як вчитися, запам'ятовувати прочитане та перетворювати нотатки на знання, що залишаються — від команди Fluxo.",
        breadcrumbHome: "Головна",
        breadcrumbBlog: "Блог",
        tableOfContents: "Зміст",
        searchPlaceholder: "Пошук статей…",
        searchAriaLabel: "Пошук статей",
        featuredTag: "Рекомендовано",
        articleSingular: "стаття",
        articlePlural: "статей",
        countSuffix: "статей",
        matchedFor: "за запитом",
        readMoreLabel: "Читати статтю",
        emptyTitle: "Нічого не знайдено",
        emptyBody: "Немає статей за цим запитом. Спробуйте інший.",
        emptyClear: "Очистити пошук",
      },
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
        { label: "Blog", href: "/es/blog/" },
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
    why: {
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
    blog: {
      metaTitle: `Blog ${siteConfig.name} — ciencia del aprendizaje, flujos de estudio y repetición espaciada`,
      metaDescription:
        "Guías prácticas y basadas en investigación sobre cómo estudiar de forma efectiva, recordar lo que lees y construir conocimiento duradero con repetición espaciada.",
      subtitle:
        "Guías basadas en investigación sobre estudio, retención y repetición espaciada.",
      ui: {
        title: "Aprender, mejor.",
        subtitle:
          "Guías basadas en investigación sobre cómo estudiar, recordar lo que lees y convertir apuntes en conocimiento que perdura — del equipo detrás de Fluxo.",
        breadcrumbHome: "Inicio",
        breadcrumbBlog: "Blog",
        tableOfContents: "Tabla de contenidos",
        searchPlaceholder: "Buscar artículos…",
        searchAriaLabel: "Buscar artículos",
        featuredTag: "Destacado",
        articleSingular: "artículo",
        articlePlural: "artículos",
        countSuffix: "artículos",
        matchedFor: "para",
        readMoreLabel: "Leer artículo",
        emptyTitle: "No se encontraron artículos",
        emptyBody: "Nada coincide con tu búsqueda todavía. Prueba otro término.",
        emptyClear: "Limpiar búsqueda",
      },
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
        { label: "Blog", href: "/de/blog/" },
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
    why: {
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
    blog: {
      metaTitle: `${siteConfig.name} Blog — Lernwissenschaft, Lern-Workflows & verteiltes Wiederholen`,
      metaDescription:
        "Praktische, forschungsbasierte Anleitungen: effektiv lernen, Gelesenes behalten und dauerhaftes Wissen mit verteiltem Wiederholen aufbauen.",
      subtitle:
        "Forschungsbasierte Anleitungen zu Lernen, Behalten und verteiltem Wiederholen.",
      ui: {
        title: "Besser lernen.",
        subtitle:
          "Forschungsbasierte Anleitungen: effektiv lernen, Gelesenes behalten und Notizen in bleibendes Wissen verwandeln — vom Team hinter Fluxo.",
        breadcrumbHome: "Startseite",
        breadcrumbBlog: "Blog",
        tableOfContents: "Inhaltsverzeichnis",
        searchPlaceholder: "Artikel suchen…",
        searchAriaLabel: "Artikel suchen",
        featuredTag: "Empfohlen",
        articleSingular: "Artikel",
        articlePlural: "Artikel",
        countSuffix: "Artikel",
        matchedFor: "für",
        readMoreLabel: "Artikel lesen",
        emptyTitle: "Keine Artikel gefunden",
        emptyBody: "Nichts passt zu deiner Suche. Versuch einen anderen Begriff.",
        emptyClear: "Suche zurücksetzen",
      },
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
