// Mobile navigation: the ☰ button opens a full-screen menu; Escape or a link tap closes it.
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  };

  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  // leaving the mobile layout (rotate / resize) with the menu open
  matchMedia("(min-width: 1000px)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
})();
