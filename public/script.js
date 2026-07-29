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

  mobileNav.querySelectorAll("a, button").forEach((el) => {
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
