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
  const mobileNav = burger.closest("header")?.querySelector(".mobile-nav");

  if (!mobileNav) return;

  burger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
  });
});

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const wasOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      const wrap = openItem.querySelector(".faq-answer-wrap");
      wrap.style.height = "0";
      wrap.style.opacity = "0";
      openItem.classList.remove("open");
    });

    if (!wasOpen) {
      item.classList.add("open");
      const wrap = item.querySelector(".faq-answer-wrap");
      const inner = wrap.querySelector(".faq-answer-inner");
      wrap.style.height = inner.scrollHeight + "px";
      wrap.style.opacity = "1";
    }
  });
});
