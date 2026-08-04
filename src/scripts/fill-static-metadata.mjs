#!/usr/bin/env node
// One-shot seeder for Fluxo's hand-authored blog. Assigns a unique hero card
// per slug (static + generated together — 11 cards / 11 slugs) and writes the
// canonical author object into every locale MD under src/content/blog-static.
//
// Not part of the shared landing-kit — landing-specific data lives here.

import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const STATIC_ROOT = join(REPO_ROOT, "src", "content", "blog-static");
const GENERATED_ROOT = join(REPO_ROOT, "src", "content", "blog", "generated");

// Unique card per slug so no two articles share a hero.
const STATIC_CARD_BY_SLUG = {
  "best-study-routine": "assets/card-1.png",
  "best-way-to-learn-new-vocabulary": "assets/card-2.png",
  "how-to-learn-without-forgetting": "assets/card-3.png",
  "how-to-remember-what-you-learn": "assets/card-4.webp",
  "how-to-study-while-working-full-time": "assets/card-5.webp",
  "how-to-track-learning-progress": "assets/card-6.webp",
  "the-second-brain-for-learning": "assets/card-7.webp",
};

const GENERATED_HERO_BY_SLUG = {
  "chatgpt-for-learning-without-losing-your-skills": "/assets/card-8.webp",
  "how-to-remember-what-you-read-and-actually-retain-it": "/assets/card-9.webp",
  "how-to-study-effectively-for-long-term-retention": "/assets/card-10.webp",
  "the-study-workflow-that-turns-notes-into-applied-knowledge": "/assets/card-11.webp",
};

// Author matches the generated-blog author (Markiian Halabut) so the byline is
// identical across static + generated articles. Bio is a per-locale array —
// same shape as backend-produced posts.
const AUTHOR = {
  id: "019faee1-9411-7438-a0d5-a441a9a771af",
  name: "Markiian Halabut",
  role: "Founder of Fluxo",
  photoUrl: null,
  bio: [
    { locale: "en", text: "Mark builds Fluxo — a spaced-repetition tool that turns notes into flashcards. He self-taught programming with Anki and now writes about learning science, PKM, and study workflows for people teaching themselves complex topics." },
    { locale: "uk", text: "Марк розробляє Fluxo — інструмент інтервального повторення, який перетворює нотатки на флеш-картки. Він самостійно вивчив програмування з Anki і тепер пише про науку навчання, PKM і навчальні системи для тих, хто вчиться складним темам самостійно." },
    { locale: "es", text: "Mark crea Fluxo — una herramienta de repetición espaciada que convierte notas en flashcards. Aprendió programación por su cuenta con Anki y ahora escribe sobre ciencia del aprendizaje, PKM y flujos de estudio para autodidactas." },
    { locale: "de", text: "Mark entwickelt Fluxo — ein Spaced-Repetition-Tool, das Notizen in Karteikarten verwandelt. Er brachte sich Programmieren mit Anki selbst bei und schreibt heute über Lernwissenschaft, PKM und Lern-Workflows für Selbstlernende." },
  ],
  links: { website: "https://fluxo.today" },
};

const FAQ = {
  "best-study-routine": {
    en: [
      { question: "How long should each study session be?", answer: "Aim for 25 to 60 minutes of focused work per session. Sessions much shorter than 25 minutes rarely reach the depth of processing needed for encoding. Sessions much longer than 60 minutes trigger attention decay and diminishing returns. Consistency across days beats marathon sessions." },
      { question: "Is it better to study one topic per session or mix topics?", answer: "Mix related topics. Interleaving forces your brain to discriminate between problem types instead of applying the same rote procedure. Research consistently shows interleaved practice produces better long-term retention and transfer than blocked practice on a single topic." },
      { question: "How do I make studying a habit that actually sticks?", answer: "Use implementation intentions: pick a specific time and place, and tie the session to an existing cue (after morning coffee, right after work). Skip motivation and design the trigger. The habit locks in when the cue reliably fires, not when you feel like studying." },
      { question: "What is the single biggest mistake in most study routines?", answer: "Re-reading and highlighting. Both feel productive because the material becomes familiar, but familiarity is not memory. Replace re-reading with active recall: close the notes and try to reproduce the concept from scratch, then check." },
    ],
    uk: [
      { question: "Скільки має тривати навчальна сесія?", answer: "Оптимально — від 25 до 60 хвилин зосередженої роботи. Коротші сесії рідко дають глибину для якісного кодування. Довші — призводять до втоми уваги. Регулярність через дні перевершує марафони." },
      { question: "Краще одна тема за сесію чи чергувати?", answer: "Чергуй споріднені теми. Interleaving змушує мозок розрізняти типи задач, а не механічно застосовувати одну процедуру. Дослідження стабільно показують: чергування дає кращу довготривалу пам'ять." },
      { question: "Як зробити навчання звичкою?", answer: "Використовуй implementation intentions: конкретний час і місце, прив'язані до існуючого тригера (після ранкової кави, одразу після роботи). Дизайн тригера, не мотивація." },
      { question: "Яка найбільша помилка типового розкладу?", answer: "Перечитування і виділення тексту. Це створює ілюзію знання через впізнавання. Замінюй активним пригадуванням: закрий конспект і відтвори концепт із голови, потім звірся." },
    ],
    es: [
      { question: "¿Cuánto debe durar cada sesión de estudio?", answer: "De 25 a 60 minutos de trabajo enfocado. Las sesiones más cortas raramente alcanzan la profundidad necesaria; las mucho más largas provocan fatiga atencional. La consistencia diaria vence a las sesiones maratón." },
      { question: "¿Es mejor estudiar un tema por sesión o mezclar temas?", answer: "Mezcla temas relacionados. El interleaving obliga al cerebro a discriminar entre tipos de problemas en lugar de aplicar la misma rutina. La investigación muestra que produce mejor retención a largo plazo." },
      { question: "¿Cómo convierto estudiar en un hábito duradero?", answer: "Usa intenciones de implementación: elige un horario y lugar específicos, y ata la sesión a una señal existente. Diseña el disparador, no dependas de la motivación." },
      { question: "¿Cuál es el mayor error de la mayoría de rutinas?", answer: "Releer y subrayar. Ambos generan familiaridad, no memoria. Sustitúyelos por recuperación activa: cierra los apuntes y reproduce el concepto desde cero, luego verifica." },
    ],
    de: [
      { question: "Wie lang sollte eine Lernsitzung sein?", answer: "25 bis 60 Minuten konzentrierter Arbeit pro Sitzung. Kürzere Sitzungen erreichen selten die nötige Verarbeitungstiefe; deutlich längere führen zu Aufmerksamkeitsabfall. Tägliche Konsistenz schlägt Marathon-Sitzungen." },
      { question: "Ist es besser, ein Thema pro Sitzung oder mehrere zu mischen?", answer: "Mische verwandte Themen. Interleaving zwingt das Gehirn, zwischen Aufgabentypen zu unterscheiden, statt dieselbe Routine anzuwenden. Studien zeigen bessere langfristige Behaltensleistung." },
      { question: "Wie wird Lernen zu einer festen Gewohnheit?", answer: "Nutze Implementation Intentions: konkreter Zeitpunkt und Ort, verknüpft mit einem bestehenden Auslöser. Gestalte den Trigger, verlasse dich nicht auf Motivation." },
      { question: "Was ist der größte Fehler in typischen Lernroutinen?", answer: "Wiederholtes Lesen und Markieren. Beides erzeugt Vertrautheit, keine Erinnerung. Ersetze es durch aktives Abrufen: Notizen schließen und das Konzept aus dem Kopf reproduzieren." },
    ],
  },
  "best-way-to-learn-new-vocabulary": {
    en: [
      { question: "How many new words should I learn per day?", answer: "Fifteen to twenty new words per day is a sustainable ceiling for most learners. Beyond that, review time balloons and retention drops. Quality of review beats raw daily volume: consistent 20 words with spaced repetition outperforms 100 words dumped into memory once." },
      { question: "Should I learn words in isolation or in context?", answer: "Both, in sequence. Isolated flashcards efficiently anchor form and meaning. Context — sentences, articles, conversation — gives you the collocations, register, and usage patterns that translation alone never shows. Learn the anchor first, then let context calibrate it." },
      { question: "Are flashcards outdated for vocabulary?", answer: "No. Spaced-repetition flashcards remain the most time-efficient tool for durable vocabulary retention. Apps have improved the interval scheduling, but the underlying mechanism — timed retrieval — is the same. Skip flashcards only if you already get high-frequency exposure through immersion." },
      { question: "How long until I actually remember a new word?", answer: "Roughly seven correctly-recalled reviews spaced over weeks push a word into long-term recall. The first three reviews happen within a week; later reviews stretch out to months. The scheduler's job is to catch the word just before you would have forgotten it." },
    ],
    uk: [
      { question: "Скільки нових слів вчити за день?", answer: "15–20 нових слів на день — стійка норма. Понад це — час на повторення розростається, а утримання падає. Якість повторень бʼє обʼєм: 20 слів з інтервальним повторенням краще за 100 разово." },
      { question: "Ізольовано чи в контексті вчити слова?", answer: "І так, і так — послідовно. Ізольовані картки ефективно якорять форму та значення. Контекст (речення, тексти, розмова) додає колокацій, регістру, вживання. Спочатку якір, потім контекст калібрує." },
      { question: "Чи не застаріли флеш-картки?", answer: "Ні. Інтервальне повторення на картках — досі найефективніший спосіб для стійкого запамʼятовування. Скіпай картки лише при повноцінному занурені з високою частотою." },
      { question: "Через скільки я справді запамʼятаю слово?", answer: "Приблизно 7 правильних повторень, розтягнутих на тижні, переводять слово в довготривалу памʼять. Перші три — впродовж тижня; наступні розтягуються до місяців." },
    ],
    es: [
      { question: "¿Cuántas palabras nuevas al día?", answer: "De 15 a 20 palabras nuevas al día es sostenible. Más allá, el tiempo de repaso se dispara y la retención cae. La calidad del repaso vence al volumen: 20 palabras con repetición espaciada superan a 100 volcadas de una vez." },
      { question: "¿Aisladas o en contexto?", answer: "Ambas, en secuencia. Las flashcards aisladas fijan forma y significado. El contexto añade colocaciones, registro y patrones de uso. Primero el ancla, luego el contexto la calibra." },
      { question: "¿Están anticuadas las flashcards?", answer: "No. Las flashcards con repetición espaciada siguen siendo la herramienta más eficiente para retención duradera. Sáltalas solo si ya tienes exposición intensa por inmersión." },
      { question: "¿Cuándo recordaré realmente una palabra nueva?", answer: "Alrededor de siete repasos correctos espaciados en semanas la trasladan a la memoria a largo plazo. Los primeros tres ocurren en una semana; los siguientes se extienden a meses." },
    ],
    de: [
      { question: "Wie viele neue Wörter pro Tag?", answer: "15 bis 20 neue Wörter pro Tag sind für die meisten Lernenden nachhaltig. Darüber hinaus wächst die Wiederholzeit stark, die Behaltensleistung sinkt. Qualität des Wiederholens schlägt Rohvolumen." },
      { question: "Isoliert oder im Kontext lernen?", answer: "Beides, in Reihenfolge. Isolierte Karten verankern Form und Bedeutung effizient. Kontext liefert Kollokationen, Register und Verwendungsmuster. Erst der Anker, dann der Kontext zur Kalibrierung." },
      { question: "Sind Karteikarten veraltet?", answer: "Nein. Karten mit Spaced Repetition bleiben das zeiteffizienteste Werkzeug für dauerhafte Behaltensleistung. Nur überspringen, wenn du bereits hohe Frequenz durch Immersion hast." },
      { question: "Wann erinnere ich mich wirklich an ein neues Wort?", answer: "Etwa sieben korrekt abgerufene Wiederholungen über Wochen verlagern es ins Langzeitgedächtnis. Die ersten drei innerhalb einer Woche; spätere dehnen sich auf Monate aus." },
    ],
  },
  "how-to-learn-without-forgetting": {
    en: [
      { question: "Why do I forget almost everything I study within a week?", answer: "That is the standard forgetting curve. Without deliberate retrieval, roughly 60–70 percent of new material fades within seven days. The fix is not more re-reading — it is spaced retrieval practice that catches material just before it would have decayed." },
      { question: "What's the difference between active recall and re-reading?", answer: "Re-reading is recognition; active recall is reconstruction. Recognition feels smooth, so learners over-trust it. Reconstruction is effortful and reveals gaps immediately, which is precisely why it builds durable memory that re-reading never will." },
      { question: "Do I need an app or can I do this on paper?", answer: "Paper works, but the scheduling overhead is high. Manually tracking which item is due today, tomorrow, or next month across hundreds of items is where most paper systems collapse. An app removes that cognitive tax so you can spend the time on the review itself." },
      { question: "Can I truly reach 90%+ long-term retention?", answer: "Yes, but only with two commitments: spaced retrieval on a real schedule, and honest self-testing. Optimistic self-grading breaks the algorithm. Rate yourself against the actual recall, not against how familiar the answer felt." },
    ],
    uk: [
      { question: "Чому я забуваю майже все за тиждень?", answer: "Це стандартна крива забування. Без цільового пригадування 60–70% нового зникає за 7 днів. Розвʼязання — не перечитування, а інтервальне пригадування, яке ловить матеріал перед розпадом." },
      { question: "У чому різниця між active recall і перечитуванням?", answer: "Перечитування — впізнавання; active recall — реконструкція. Впізнавання гладке, тож йому переоцінюють довіру. Реконструкція вимагає зусиль і одразу показує прогалини." },
      { question: "Потрібен додаток чи можна на папері?", answer: "Папір працює, але накладні витрати на планування великі. Ручне відстеження сотень елементів валить більшість систем. Додаток знімає це навантаження." },
      { question: "Чи справді можна досягти 90%+ утримання?", answer: "Так, за двох умов: реальний графік інтервального пригадування та чесна самооцінка. Оптимістичне самооцінювання ламає алгоритм." },
    ],
    es: [
      { question: "¿Por qué olvido casi todo en una semana?", answer: "Es la curva de olvido. Sin recuperación deliberada, el 60–70% del material nuevo se pierde en siete días. La solución no es releer más, sino práctica de recuperación espaciada." },
      { question: "¿Diferencia entre recuperación activa y releer?", answer: "Releer es reconocer; la recuperación es reconstrucción. El reconocimiento parece fluido y se sobrestima. La reconstrucción exige esfuerzo y revela huecos, y por eso construye memoria duradera." },
      { question: "¿Necesito una app o puedo usar papel?", answer: "El papel funciona, pero la programación manual colapsa con cientos de ítems. Una app elimina ese coste cognitivo." },
      { question: "¿Se puede llegar a más del 90% de retención?", answer: "Sí, con dos condiciones: horario real de recuperación espaciada y autoevaluación honesta. Un autoevaluación optimista rompe el algoritmo." },
    ],
    de: [
      { question: "Warum vergesse ich fast alles innerhalb einer Woche?", answer: "Das ist die klassische Vergessenskurve. Ohne gezielten Abruf schwinden 60–70% des neuen Materials in sieben Tagen. Die Lösung ist nicht mehr Wiederholen, sondern verteilter Abruf." },
      { question: "Unterschied zwischen aktivem Abruf und Wiederlesen?", answer: "Wiederlesen ist Wiedererkennung; aktiver Abruf ist Rekonstruktion. Wiedererkennung fühlt sich glatt an und wird überschätzt. Rekonstruktion offenbart Lücken sofort." },
      { question: "Brauche ich eine App oder reicht Papier?", answer: "Papier funktioniert, aber die Planung wird bei hunderten Items unhandlich. Eine App nimmt diese kognitive Last ab." },
      { question: "Sind 90%+ Behaltensleistung realistisch?", answer: "Ja, mit zwei Bedingungen: echter verteilter Abrufplan und ehrliche Selbstbewertung. Optimistische Selbstbewertung bricht den Algorithmus." },
    ],
  },
  "how-to-remember-what-you-learn": {
    en: [
      { question: "What's the fastest way to move something into long-term memory?", answer: "Test yourself on it. Retrieval — not review — is what strengthens memory traces. The first genuine attempt to recall a fact does more for long-term retention than reading it three times." },
      { question: "How is this different from cramming?", answer: "Cramming pushes material into short-term memory before an exam and lets it evaporate afterward. Spaced retrieval stretches practice over weeks so material stabilizes. Same total time, dramatically different long-term outcome." },
      { question: "Do I need to understand something before I try to memorize it?", answer: "Yes. Rote memorization without understanding stores brittle, isolated facts. Understanding creates hooks for new information to attach to, and it dramatically reduces the number of reviews needed for durable recall." },
      { question: "How often should I review to prevent forgetting?", answer: "The correct interval expands as memory strengthens: hours, days, then weeks, then months. A spaced-repetition scheduler handles this automatically. Manually, review each new fact within 24 hours, again within 3 days, then within a week, then within a month." },
    ],
    uk: [
      { question: "Який найшвидший спосіб перевести в довготривалу памʼять?", answer: "Тестуй себе. Пригадування, а не повторне читання, зміцнює сліди памʼяті. Перша чесна спроба пригадати корисніша за три прочитання." },
      { question: "Чим це відрізняється від зубріння?", answer: "Зубріння впихає матеріал у короткострокову памʼять перед іспитом і випаровується після. Інтервальне пригадування розтягує практику на тижні, і матеріал стабілізується." },
      { question: "Чи треба спершу зрозуміти?", answer: "Так. Зубріння без розуміння — крихкі ізольовані факти. Розуміння створює гачки для нової інформації і різко зменшує кількість повторень." },
      { question: "Як часто повторювати?", answer: "Інтервал зростає з міцністю памʼяті: години, дні, тижні, місяці. Алгоритм робить це автоматично. Вручну: за 24 години, за 3 дні, за тиждень, за місяць." },
    ],
    es: [
      { question: "¿La forma más rápida a la memoria a largo plazo?", answer: "Autoevalúate. La recuperación —no la revisión— fortalece las huellas de memoria. El primer intento genuino de recordar hace más que leer tres veces." },
      { question: "¿En qué se diferencia del cramming?", answer: "El cramming mete material en la memoria a corto plazo y se evapora. La recuperación espaciada extiende la práctica a semanas y el material se estabiliza." },
      { question: "¿Necesito entender antes de memorizar?", answer: "Sí. Memorizar sin entender crea hechos frágiles y aislados. Entender crea ganchos para la información nueva y reduce las repeticiones necesarias." },
      { question: "¿Con qué frecuencia repasar?", answer: "El intervalo crece con la fuerza de la memoria: horas, días, semanas, meses. Un scheduler lo automatiza. Manualmente: 24h, 3 días, 1 semana, 1 mes." },
    ],
    de: [
      { question: "Was ist der schnellste Weg ins Langzeitgedächtnis?", answer: "Selbsttest. Abrufen — nicht Wiederholen — stärkt Gedächtnisspuren. Ein ehrlicher Abrufversuch bringt mehr als dreimaliges Lesen." },
      { question: "Worin unterscheidet sich das vom Bulimielernen?", answer: "Bulimielernen presst Stoff ins Kurzzeitgedächtnis und verdampft danach. Verteilter Abruf dehnt die Praxis auf Wochen aus und stabilisiert das Material." },
      { question: "Muss ich zuerst verstehen?", answer: "Ja. Rein mechanisches Auswendiglernen speichert brüchige, isolierte Fakten. Verstehen schafft Anker und reduziert die Zahl nötiger Wiederholungen." },
      { question: "Wie oft wiederholen?", answer: "Der Abstand wächst mit der Gedächtnisstärke: Stunden, Tage, Wochen, Monate. Ein Scheduler übernimmt das. Manuell: nach 24 h, 3 Tagen, 1 Woche, 1 Monat." },
    ],
  },
  "how-to-study-while-working-full-time": {
    en: [
      { question: "How many hours per week are actually enough?", answer: "Three to six hours per week of focused, structured practice can move you forward reliably, if the sessions apply spaced retrieval instead of passive review. Volume matters less than what each session actually does." },
      { question: "When is the best time to study around a full-time job?", answer: "Whichever slot you can defend consistently. Mornings before work protect against unpredictable evenings; short lunch reviews build streaks; a longer weekend deep-dive consolidates. Pick a pattern you can hit five out of seven days." },
      { question: "How do I avoid burning out from study on top of work?", answer: "Cap session length, defend one true rest day, and separate acquisition from review. Reviews (retrieval practice) are lower-cognitive-load than new material; schedule them on tired days and save fresh material for peak-energy sessions." },
      { question: "Can I make real progress on 15 minutes a day?", answer: "For maintenance and vocabulary, yes. For genuine new-skill acquisition, you need at least one longer session per week. Fifteen minutes daily is the floor that keeps material from decaying between deeper sessions, not the total training load." },
    ],
    uk: [
      { question: "Скільки годин на тиждень справді достатньо?", answer: "3–6 годин цілеспрямованої практики на тиждень дадуть стабільний прогрес, якщо сесії використовують інтервальне пригадування. Обʼєм менш важливий, ніж що ти робиш під час сесії." },
      { question: "Коли краще вчитися при повній занятості?", answer: "Той слот, який можеш захистити стабільно. Ранки — від непередбачуваних вечорів; коротка обідня сесія — для стрічки; довше на вихідних — для консолідації. Вибирай патерн, який тримаєш 5 із 7 днів." },
      { question: "Як не вигоріти?", answer: "Обмежуй тривалість сесії, тримай один справжній день відпочинку, розділяй нове й повторення. Повторення легше — планируй на втомлені дні, нове на пікові." },
      { question: "Чи можна прогресувати на 15 хвилинах у день?", answer: "Для підтримки й лексики — так. Для нового навику — потрібна хоча б одна довша сесія на тиждень. 15 хв — це floor, який не дає розпастися між глибшими сесіями." },
    ],
    es: [
      { question: "¿Cuántas horas semanales son suficientes?", answer: "De 3 a 6 horas de práctica enfocada por semana avanzan con fiabilidad, si aplican recuperación espaciada. El volumen importa menos que lo que hace cada sesión." },
      { question: "¿Cuándo estudiar con trabajo a jornada completa?", answer: "El horario que puedas defender de forma consistente. Mañanas antes del trabajo protegen de tardes impredecibles; comidas cortas mantienen la racha; un bloque más largo en fin de semana consolida." },
      { question: "¿Cómo evitar el burnout?", answer: "Limita la duración, protege un día real de descanso y separa adquisición de repaso. Los repasos son menos exigentes; prográmalos en días cansados y guarda material nuevo para picos de energía." },
      { question: "¿Progresa uno con 15 minutos al día?", answer: "Para mantenimiento y vocabulario, sí. Para adquirir una habilidad nueva necesitas al menos una sesión larga semanal. 15 minutos son el suelo, no la carga total." },
    ],
    de: [
      { question: "Wie viele Stunden pro Woche reichen wirklich?", answer: "Drei bis sechs Stunden fokussierter, strukturierter Übung pro Woche bringen zuverlässig voran, sofern verteilter Abruf statt passives Wiederholen genutzt wird." },
      { question: "Wann lernt man am besten neben Vollzeitjob?", answer: "Der Slot, den du konsistent verteidigen kannst. Morgens vor der Arbeit schützt vor unvorhersehbaren Abenden; kurze Mittagsreviews halten Serien; längere Sitzungen am Wochenende konsolidieren." },
      { question: "Wie vermeide ich Burnout?", answer: "Begrenze die Sitzungslänge, halte einen echten Ruhetag frei, trenne Aufnahme von Wiederholung. Reviews sind weniger anstrengend — plane sie an müden Tagen." },
      { question: "Kann man mit 15 Minuten pro Tag wirklich Fortschritte machen?", answer: "Für Erhaltung und Vokabular ja. Für den Erwerb neuer Fähigkeiten braucht es zusätzlich eine längere Wochensitzung. 15 Minuten sind das Minimum, nicht die Gesamttrainingslast." },
    ],
  },
  "how-to-track-learning-progress": {
    en: [
      { question: "Why is time spent studying a bad measure of progress?", answer: "Time is input, not output. Two people can spend the same three hours and end up with wildly different retention because the quality of retrieval, the level of understanding, and the challenge of the material all differ. Track what you can actually do, not how long you spent trying." },
      { question: "What metrics actually indicate real learning?", answer: "Retrieval accuracy without notes, ability to apply concepts to unseen problems, and how fast you can explain the idea to someone else. All three test whether the knowledge is retrievable, transferable, and coherent — the properties that matter." },
      { question: "How often should I check progress?", answer: "Weekly for tactical adjustments, monthly for direction. Daily metrics are noisy and encourage over-reaction to normal variance. Weekly reveals real trends. Monthly reveals whether the strategy itself is working." },
      { question: "What if my accuracy is dropping over time?", answer: "It usually means either the material got harder, the review interval got too long, or you added new items too fast. Slow the intake, tighten intervals, and prioritize items you keep missing. The scheduler cannot compensate for overload." },
    ],
    uk: [
      { question: "Чому час навчання — погана метрика?", answer: "Час — це вхід, не результат. Двоє за 3 години отримають різне утримання через різну якість пригадування, розуміння та складність. Відстежуй що можеш зробити, не скільки просидів." },
      { question: "Які метрики показують реальне навчання?", answer: "Точність пригадування без нотаток, здатність застосувати до нових задач, швидкість пояснення іншій людині. Ці три — про retrievable, transferable, coherent knowledge." },
      { question: "Як часто перевіряти прогрес?", answer: "Тижнево для тактичних правок, місячно для напрямку. Щоденні метрики шумні. Тижневі показують тренди; місячні — чи працює стратегія." },
      { question: "Що робити, якщо точність падає?", answer: "Або матеріал ускладнився, або інтервал завеликий, або ти забагато нового додав. Уповільни введення, стисни інтервали, пріоритезуй items що постійно провалюються." },
    ],
    es: [
      { question: "¿Por qué el tiempo de estudio no mide progreso?", answer: "El tiempo es entrada, no salida. Dos personas pueden pasar tres horas y tener retenciones muy distintas según la calidad de recuperación, comprensión y dificultad. Mide lo que puedes hacer, no cuánto lo intentaste." },
      { question: "¿Qué métricas indican aprendizaje real?", answer: "Precisión de recuperación sin apuntes, capacidad de aplicar conceptos a problemas nuevos y rapidez para explicárselo a alguien. Prueban conocimiento recuperable, transferible y coherente." },
      { question: "¿Con qué frecuencia revisar el progreso?", answer: "Semanal para ajustes tácticos, mensual para dirección. Las métricas diarias son ruidosas. Las semanales revelan tendencias; las mensuales, si la estrategia funciona." },
      { question: "¿Y si la precisión cae con el tiempo?", answer: "Suele significar material más difícil, intervalos demasiado largos o ítems nuevos añadidos muy rápido. Baja la entrada, ajusta intervalos y prioriza lo que fallas." },
    ],
    de: [
      { question: "Warum ist Lernzeit ein schlechtes Fortschrittsmaß?", answer: "Zeit ist Input, kein Output. Zwei Personen können drei Stunden aufbringen und stark unterschiedliche Behaltensleistung erzielen. Verfolge, was du tatsächlich kannst, nicht wie lange du es versucht hast." },
      { question: "Welche Metriken zeigen echtes Lernen?", answer: "Abrufgenauigkeit ohne Notizen, Anwendung auf neue Probleme, Geschwindigkeit beim Erklären an andere. Diese drei prüfen abrufbares, übertragbares und kohärentes Wissen." },
      { question: "Wie oft Fortschritt prüfen?", answer: "Wöchentlich für taktische Anpassungen, monatlich für die Richtung. Tägliche Metriken sind zu verrauscht. Wöchentlich zeigt Trends; monatlich, ob die Strategie greift." },
      { question: "Was tun, wenn die Genauigkeit sinkt?", answer: "Meist wurde das Material schwerer, das Intervall zu lang, oder du hast zu schnell Neues hinzugefügt. Reduziere die Zufuhr, verkürze Intervalle, priorisiere häufig fehlerhafte Items." },
    ],
  },
  "the-second-brain-for-learning": {
    en: [
      { question: "Is a second brain the same as a note-taking system?", answer: "No. A note-taking system stores content. A second brain does that plus organizes it into retrievable, cross-linked knowledge you can actually reuse — often paired with retrieval practice so material stays alive rather than sitting in a graveyard of notes you never revisit." },
      { question: "Do I need Notion, Obsidian, or Roam?", answer: "The tool matters less than the workflow. A flat folder with disciplined filenames beats any elaborate app used without a habit. Pick the tool your rhythm actually holds; abandon-rate is higher for feature-heavy apps than simple ones." },
      { question: "How is a second brain different from just saving articles?", answer: "Saving is collecting. A second brain adds atomic distillation (one idea per note), linking (surfacing connections), and periodic review (keeping the graph live). Without those three, saved articles become a landfill you never open." },
      { question: "How does spaced repetition fit into a second brain?", answer: "Spaced repetition takes the atomic notes and forces you to actually retrieve them on schedule. Without retrieval, knowledge stays in the notes and never makes it into your head. The second brain becomes a launchpad for practice, not a substitute for it." },
    ],
    uk: [
      { question: "Second brain — це те саме, що система нотаток?", answer: "Ні. Система нотаток зберігає контент. Second brain робить це плюс організовує в retrievable, cross-linked знання, зазвичай у парі з інтервальним пригадуванням, щоб матеріал жив, а не осідав кладовищем." },
      { question: "Чи потрібен Notion, Obsidian чи Roam?", answer: "Інструмент менш важливий за workflow. Плоска папка з дисципліною імен переможе будь-який app без звички. Обирай той, ритм якого ти справді тримаєш." },
      { question: "Чим це відрізняється від збереження статей?", answer: "Збереження — колекціонування. Second brain додає atomic distillation, лінкування та регулярний перегляд. Без цих трьох — це смітник." },
      { question: "Як інтервальне повторення вбудовується у second brain?", answer: "Інтервальне повторення бере атомарні нотатки і змушує пригадувати за графіком. Без пригадування знання лишається у файлах і не потрапляє в голову." },
    ],
    es: [
      { question: "¿Un second brain es igual a un sistema de notas?", answer: "No. Un sistema de notas guarda contenido. Un second brain lo organiza en conocimiento recuperable y enlazado, normalmente junto a la repetición espaciada para que el material siga vivo." },
      { question: "¿Necesito Notion, Obsidian o Roam?", answer: "La herramienta importa menos que el flujo. Una carpeta plana con nombres disciplinados vence a cualquier app sin hábito. Elige la que tu ritmo sostenga." },
      { question: "¿En qué se diferencia de guardar artículos?", answer: "Guardar es coleccionar. Un second brain añade destilación atómica, enlaces y revisión periódica. Sin esos tres, es un vertedero." },
      { question: "¿Cómo encaja la repetición espaciada?", answer: "La repetición espaciada obliga a recuperar las notas atómicas según un calendario. Sin recuperación, el conocimiento se queda en los archivos." },
    ],
    de: [
      { question: "Ist ein Second Brain dasselbe wie ein Notizsystem?", answer: "Nein. Ein Notizsystem speichert Inhalte. Ein Second Brain organisiert sie in abrufbares, vernetztes Wissen, oft gekoppelt mit Spaced Repetition, damit das Material lebendig bleibt." },
      { question: "Brauche ich Notion, Obsidian oder Roam?", answer: "Das Werkzeug ist weniger wichtig als der Workflow. Ein flacher Ordner mit disziplinierten Dateinamen schlägt jede aufwendige App ohne Gewohnheit." },
      { question: "Was unterscheidet es vom bloßen Sammeln von Artikeln?", answer: "Sammeln ist Anhäufen. Ein Second Brain fügt atomare Destillation, Verlinkung und regelmäßige Wiederholung hinzu. Ohne diese drei ist es eine Deponie." },
      { question: "Wie passt Spaced Repetition dazu?", answer: "Spaced Repetition zwingt zum planmäßigen Abruf der atomaren Notizen. Ohne Abruf bleibt das Wissen in Dateien und erreicht nie den Kopf." },
    ],
  },
};

function splitFrontmatter(source) {
  if (!source.startsWith("---\n")) return null;
  const end = source.indexOf("\n---\n", 4);
  if (end === -1) return null;
  return { yaml: source.slice(4, end), body: source.slice(end + 5) };
}

function writeMd(file, fm, body, order) {
  const ordered = {};
  for (const k of order) if (k in fm && fm[k] !== undefined) ordered[k] = fm[k];
  for (const k of Object.keys(fm)) if (!(k in ordered)) ordered[k] = fm[k];
  const yaml = YAML.stringify(ordered, {
    defaultStringType: "QUOTE_DOUBLE",
    defaultKeyType: "PLAIN",
    lineWidth: 0,
    minContentWidth: 0,
  });
  writeFileSync(file, `---\n${yaml}---\n${body}`);
}

const STATIC_KEY_ORDER = [
  "slug","locale","routePath","category","title","subtitle","metaTitle","metaDescription",
  "author","readTime","heroAsset","heroAlt","publishedAt","modifiedAt","faq","relatedPosts",
];

const GENERATED_KEY_ORDER = [
  "schemaVersion","draftId","slug","locale","pageType","title","metaDescription",
  "createdAt","translationGroupId","heroImage","relatedPosts","faq","references",
  "compared","videoUrl","itemCount","importUrl","author","sources",
];

let staticFilled = 0;
for (const locale of readdirSync(STATIC_ROOT)) {
  const dir = join(STATIC_ROOT, locale);
  try { if (!statSync(dir).isDirectory()) continue; } catch { continue; }
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".md")) continue;
    const slug = name.replace(/\.md$/, "");
    const file = join(dir, name);
    const parsed = splitFrontmatter(readFileSync(file, "utf8"));
    if (!parsed) continue;
    const fm = YAML.parse(parsed.yaml);
    if (STATIC_CARD_BY_SLUG[slug]) fm.heroAsset = STATIC_CARD_BY_SLUG[slug];
    fm.author = AUTHOR;
    fm.faq = FAQ[slug]?.[locale] ?? FAQ[slug]?.en ?? [];
    writeMd(file, fm, parsed.body, STATIC_KEY_ORDER);
    staticFilled++;
  }
}
console.log(`static: filled ${staticFilled}`);

let generatedFilled = 0;
for (const locale of readdirSync(GENERATED_ROOT)) {
  const dir = join(GENERATED_ROOT, locale);
  try { if (!statSync(dir).isDirectory()) continue; } catch { continue; }
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".md") && !name.endsWith(".mdx")) continue;
    const slug = name.replace(/\.mdx?$/, "");
    const file = join(dir, name);
    const parsed = splitFrontmatter(readFileSync(file, "utf8"));
    if (!parsed) continue;
    const fm = YAML.parse(parsed.yaml);
    if (GENERATED_HERO_BY_SLUG[slug]) fm.heroImage = GENERATED_HERO_BY_SLUG[slug];
    writeMd(file, fm, parsed.body, GENERATED_KEY_ORDER);
    generatedFilled++;
  }
}
console.log(`generated: hero updated for ${generatedFilled}`);
