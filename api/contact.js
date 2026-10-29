// Contact form handler (Vercel function): validates the message and emails it to the team through Resend.
// Needs RESEND_API_KEY in the Vercel project settings. CONTACT_TO and CONTACT_FROM are optional overrides.
const TO = process.env.CONTACT_TO || "hr@nysonian.com";
const FROM = process.env.CONTACT_FROM || "Nysonian Website <contact@nysonian.com>";
const SUBJECTS = ["General", "Careers", "Partnerships", "Press"];

const escape = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

module.exports = async (req, res) => {
  const wantsJson = (req.headers.accept || "").includes("application/json");
  const reply = (status, error) => {
    if (wantsJson) return res.status(status).json(error ? { ok: false, error } : { ok: true });
    res.statusCode = 303;
    res.setHeader("Location", error ? "/contact?error=1" : "/contact?sent=1");
    res.end();
  };

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = req.body || {};
  const field = (key, max) => String(body[key] || "").trim().slice(0, max);
  const name = field("name", 200);
  const email = field("email", 320);
  const subject = SUBJECTS.includes(body.subject) ? body.subject : "General";
  const message = field("message", 5000);

  // bots fill the hidden "company" field; pretend it worked so they move on
  if (field("company", 200)) return reply(200);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply(400, "Please fill in your name, a valid email and a message.");
  }
  if (!process.env.RESEND_API_KEY) return reply(500, "The form isn't set up yet. Please email hr@nysonian.com.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Website enquiry (${subject}): ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${subject}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escape(name)}<br><strong>Email:</strong> ${escape(email)}<br><strong>Topic:</strong> ${subject}</p><p style="white-space:pre-wrap">${escape(message)}</p>`,
    }),
  }).catch(() => null);

  if (!response || !response.ok) return reply(502, "Your message couldn't be sent. Please try again or email hr@nysonian.com.");
  return reply(200);
};
