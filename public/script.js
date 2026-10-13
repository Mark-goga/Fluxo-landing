const track = (name, params = {}) => {
  if (!name) return;
  if (typeof window.clarity === "function") {
    window.clarity("event", name);
    Object.entries(params).forEach(([key, value]) => {
      if (value != null && value !== "") window.clarity("set", key, String(value));
    });
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};

window.fluxoTrack = track;

document.querySelectorAll("[data-clarity-event]").forEach((element) => {
  element.addEventListener("click", () => {
    const from = element.getAttribute("data-from");
    track(element.getAttribute("data-clarity-event"), from ? { from } : {});
  });
});

document.querySelectorAll(".burger").forEach((burger) => {
  const header = burger.closest("header");
  const mobileNav = header?.querySelector(".mobile-nav");

  if (!mobileNav) return;

  const setOpen = (open) => {
    mobileNav.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  burger.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!mobileNav.classList.contains("open"));
  });

  document.addEventListener("click", (event) => {
    if (!mobileNav.classList.contains("open")) return;
    const target = event.target;
    if (mobileNav.contains(target) || burger.contains(target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileNav.classList.contains("open")) setOpen(false);
  });

  // Links and actions close the menu; the theme switch stays in place so you can see the change.
  mobileNav.querySelectorAll("a, button:not([data-theme-toggle])").forEach((el) => {
    el.addEventListener("click", () => setOpen(false));
  });
});

document.querySelectorAll("[data-faq-accordion]").forEach((accordion) => {
  accordion.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      if (!item) return;

      const wasOpen = item.classList.contains("open");

      accordion.querySelectorAll(".faq-item.open").forEach((openItem) => {
        const wrap = openItem.querySelector(".faq-answer-wrap");
        const question = openItem.querySelector(".faq-question");
        if (wrap instanceof HTMLElement) {
          wrap.style.height = "0";
          wrap.style.opacity = "0";
        }
        question?.setAttribute("aria-expanded", "false");
        openItem.classList.remove("open");
      });

      if (!wasOpen) {
        const wrap = item.querySelector(".faq-answer-wrap");
        const inner = wrap?.querySelector(".faq-answer-inner");
        if (!(wrap instanceof HTMLElement) || !(inner instanceof HTMLElement)) return;

        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        wrap.style.height = `${inner.scrollHeight}px`;
        wrap.style.opacity = "1";
      }
    });
  });
});

// Scroll reveal — blocks fade/slide in as they enter the viewport.
(() => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  const reveal = (el, delay) => {
    if (!(el instanceof HTMLElement) || el.classList.contains("reveal")) return;
    el.classList.add("reveal");
    if (delay) el.style.setProperty("--reveal-delay", delay + "s");
    observer.observe(el);
  };

  const revealAll = (selector) => {
    document.querySelectorAll(selector).forEach((el) => reveal(el));
  };

  const revealStaggered = (selector, step = 0.08, max = 0.4) => {
    document.querySelectorAll(selector).forEach((el, i) => reveal(el, Math.min(i * step, max)));
  };

  // Section headings / block sections.
  [
    ".hero",
    ".why-fluxo > .section-title",
    ".features > .section-title",
    ".pricing-header",
    ".pricing-billing",
    ".faq-header",
    ".cta-title",
    ".cta-form",
    ".cta-note",
  ].forEach(revealAll);

  // Repeating cards reveal one after another for a lively cascade.
  revealStaggered(".cards-grid > .card");
  revealStaggered(".features-grid > .feat-card");
  revealStaggered(".pricing-grid > .pricing-card-wrap");
  revealStaggered(".faq-item", 0.05, 0.3);
})();

// Footer CTA photo fades/zooms in when the section scrolls into view.
(() => {
  const cta = document.querySelector(".cta");
  if (!cta || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  cta.classList.add("cta--bg-anim");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        cta.classList.add("is-bg-visible");
        observer.disconnect();
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(cta);
})();

// Smooth, inertial wheel/trackpad scrolling (Lenis, vendored in /vendor).
// Touch keeps native scrolling; skipped entirely for reduced-motion users.
(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const self = document.currentScript;
  if (!(self instanceof HTMLScriptElement)) return;

  const lib = document.createElement("script");
  lib.src = new URL("vendor/lenis-1.3.26.min.js", self.src).href;
  lib.async = true;
  lib.onload = () => {
    if (typeof window.Lenis !== "function") return;
    const lenis = new window.Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
    window.fluxoLenis = lenis;

    // The lead modal and mobile nav lock the page via body overflow; pause with them.
    const sync = () => (document.body.style.overflow === "hidden" ? lenis.stop() : lenis.start());
    new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ["style"] });
    sync();
  };
  document.head.append(lib);
})();
