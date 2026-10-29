// Contact form: sends without leaving the page and shows the result under the button.
// Without JavaScript the form still posts to /api/contact, which redirects back with ?sent=1 or ?error=1.
(() => {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".contact-form__status");
  if (!form || !status) return;

  const show = (text, ok) => {
    status.textContent = text;
    status.classList.toggle("is-error", !ok);
  };

  const params = new URLSearchParams(location.search);
  if (params.has("sent")) show("Thank you. Your message has been sent and we’ll be in touch soon.", true);
  if (params.has("error")) show("Your message couldn’t be sent. Please try again or email hr@nysonian.com.", false);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    button.disabled = true;
    show("Sending…", true);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error);
      form.reset();
      show("Thank you. Your message has been sent and we’ll be in touch soon.", true);
    } catch (error) {
      show(error.message || "Your message couldn’t be sent. Please try again or email hr@nysonian.com.", false);
    } finally {
      button.disabled = false;
    }
  });
})();
