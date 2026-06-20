const track = (eventName) => {
  if (typeof window.clarity === "function" && eventName) {
    window.clarity("event", eventName);
  }
};

document.querySelectorAll("[data-clarity-event]").forEach((element) => {
  element.addEventListener("click", () => {
    track(element.getAttribute("data-clarity-event"));
  });
});
