import { useState } from "react";
import { Mail, Globe, MapPin, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_ITEMS = [
  { icon: Mail, label: "info@ritvish.com", href: "mailto:info@ritvish.com" },
  // Shown as plain text, not a link, until ritvish.com points at the site.
  // The domain is registered and its Zoho mail works, but no host serves the
  // web address yet, so a link would go nowhere. Restore
  // href: "https://ritvish.com" once it resolves.
  { icon: Globe, label: "ritvish.com", href: undefined },
  { icon: MapPin, label: "Trichy, Tamil Nadu, India", href: undefined },
];

// Form delivery. Both settings come from GitHub repository variables that the
// deploy workflow passes into the build (locally, put them in .env.local):
//   VITE_FORM_ENDPOINT   FormSubmit's URL, tried first
//   VITE_WEB3FORMS_KEY   a Web3Forms access key, tried if the first fails
// Each service is a free third party that can go down — FormSubmit returned
// HTTP 500 for every address on 30 Sept 2026 — so a send tries them in order
// and only fails if all do. A service with no setting is simply skipped, and
// with none configured the form falls back to a mailto: link. The Web3Forms
// key is safe to ship in the page: it can only submit to the inbox it was
// issued for. See README.md.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const SEND_TIMEOUT_MS = 12000;

// POSTs JSON and throws unless the service clearly accepted it. A 200 alone
// isn't proof of delivery: FormSubmit answers 200 with success:"false" while
// its destination address still awaits the one-time activation click.
async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
    // Without a timeout a hung service would leave the button on "Sending…"
    // and never reach the next service.
    signal: AbortSignal.timeout?.(SEND_TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const result = await response.json().catch(() => ({}));
  if (result.success === false || result.success === "false") {
    throw new Error(result.message || "Submission was not accepted");
  }
}

const subjectFor = (form) =>
  `Quote request from ${form.name || "website visitor"}`;

const PROVIDERS = [
  FORM_ENDPOINT && {
    name: "FormSubmit",
    send: (form) =>
      postJson(FORM_ENDPOINT, { ...form, _subject: subjectFor(form) }),
  },
  WEB3FORMS_KEY && {
    name: "Web3Forms",
    send: (form) =>
      postJson("https://api.web3forms.com/submit", {
        ...form,
        access_key: WEB3FORMS_KEY,
        subject: subjectFor(form),
        from_name: "RIQS website",
      }),
  },
].filter(Boolean);

// True when at least one delivery service is configured.
const HAS_SERVICE = PROVIDERS.length > 0;

// `half` fields sit side by side from the sm breakpoint, keeping the form
// short enough for the section to fit a laptop window.
const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name", half: false },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
  { name: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel", half: true },
];

// What a visitor is told when a send fails. The form depends on a free
// third-party service that can go down — it returned HTTP 500 for every
// address on 30 Sept 2026 — so a failed send is never a dead end: the error
// box also offers to open the visitor's own email app with their message
// already filled in, addressed to the real info@ritvish.com mailbox.
const ERROR_COPY = {
  offline: "You seem to be offline. Check your connection, then press Try again.",
  rejected:
    "Our message service isn't responding right now. Press Try again in a moment, or send it by email instead.",
};

const inputClass =
  "w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-navy-900 focus:border-steel-500 focus:outline-none focus:ring-1 focus:ring-steel-500";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");
  // Why the last send failed — a key of ERROR_COPY.
  const [errorKind, setErrorKind] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Falls back to opening the visitor's mail client when no endpoint is
  // configured. That fallback silently fails for anyone on webmail, which is
  // why configuring a delivery service matters for real lead capture.
  const mailtoHref = () => {
    const subject = encodeURIComponent(
      `Quote Request from ${form.name || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    return `mailto:info@ritvish.com?subject=${subject}&body=${body}`;
  };

  const submitViaMailto = () => {
    window.location.href = mailtoHref();
    setStatus("sent");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!HAS_SERVICE) {
      submitViaMailto();
      return;
    }

    setStatus("sending");
    setErrorKind(null);

    // Try each service in turn and stop at the first that accepts the
    // message. Sequential, never parallel: sending to both would deliver the
    // enquiry twice.
    for (const provider of PROVIDERS) {
      try {
        await provider.send(form);
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
        return;
      } catch (err) {
        // Logged so a failure can be diagnosed from the browser console:
        // "Failed to fetch" with no status usually means the service answered
        // with an error the browser hides (a 5xx carries no CORS headers).
        console.warn(`Contact form: ${provider.name} failed`, err);
      }
    }

    console.error("Contact form: every delivery service failed");
    // The form keeps what the visitor typed, so a retry is one click.
    setErrorKind(navigator.onLine === false ? "offline" : "rejected");
    setStatus("error");
  };

  return (
    <section id="contact" className="section-y bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Get In Touch
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Request Inspection / Get a Quote
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-steel-300">
            Need Reliable Inspection Support?
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* The intro copy sits beside the form rather than above both
              columns, so the section fits a laptop window. */}
          <Reveal className="space-y-6">
            <div className="space-y-3 text-base leading-relaxed text-steel-100/90">
              <p>
                Tell us about your project, inspection requirement or quality
                challenge.
              </p>
              <p>
                Our team can review your requirements and provide an
                appropriate inspection or quality service solution.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Contact RIQS</p>
              <p className="mt-1 text-sm text-steel-100/80">
                RIQS – Ritvish Inspection &amp; Quality Services
              </p>
            </div>
            <ul className="space-y-3">
              {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 text-steel-100">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-steel-600/30 text-steel-300">
                    <Icon size={20} />
                  </span>
                  {href ? (
                    <a href={href} className="hover:text-white">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl bg-white p-6 shadow-xl"
            >
              {status === "sent" ? (
                <div
                  className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center"
                  role="status"
                >
                  <p className="text-lg font-semibold text-navy-900">
                    {HAS_SERVICE
                      ? "Thank you — your message has been sent."
                      : "Thank you — your email client should now be open."}
                  </p>
                  <p className="text-sm text-gray-600">
                    {HAS_SERVICE
                      ? "We'll get back to you as soon as possible."
                      : "If it didn't open, email us directly at info@ritvish.com."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {FIELDS.map(({ name, label, type, required, autoComplete, half }) => (
                    <div key={name} className={half ? "" : "sm:col-span-2"}>
                      <label
                        htmlFor={name}
                        className="mb-1 block text-sm font-medium text-navy-900"
                      >
                        {label}
                        {!required && (
                          <span className="ml-1 font-normal text-gray-500">
                            (optional)
                          </span>
                        )}
                      </label>
                      <input
                        id={name}
                        name={name}
                        type={type}
                        required={required}
                        autoComplete={autoComplete}
                        value={form[name]}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-navy-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <p aria-live="polite" className="sr-only">
                    {status === "sending" ? "Sending your message" : ""}
                  </p>

                  {/* role="alert" so screen readers announce the failure the
                      moment it appears. */}
                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 sm:col-span-2"
                    >
                      <AlertCircle
                        size={18}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                      />
                      <div>
                        <p className="font-semibold">Your message wasn&apos;t sent.</p>
                        <p className="mt-1">
                          {ERROR_COPY[errorKind] ?? ERROR_COPY.rejected} Everything
                          you typed is still in the form.
                        </p>
                        <a
                          href={mailtoHref()}
                          className="mt-2 inline-block font-semibold underline hover:text-red-900"
                        >
                          Email it to info@ritvish.com instead
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-md bg-steel-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-steel-400 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                  >
                    {status === "sending"
                      ? "Sending…"
                      : status === "error"
                        ? "Try again"
                        : "Submit"}
                  </button>

                  <p className="text-xs leading-relaxed text-gray-500 sm:col-span-2">
                    We use these details only to reply to your enquiry.{" "}
                    <a
                      href={`${import.meta.env.BASE_URL}privacy.html`}
                      className="font-medium text-steel-600 underline hover:text-steel-500"
                    >
                      Privacy Notice
                    </a>
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
