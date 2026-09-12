import { useState } from "react";
import { Mail, Globe, Phone, MapPin, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_ITEMS = [
  { icon: Mail, label: "info@riqsinspection.com", href: "mailto:info@riqsinspection.com" },
  { icon: Globe, label: "www.riqsinspection.com", href: "https://www.riqsinspection.com" },
  // Placeholder phone number — replace with the real number once available.
  { icon: Phone, label: "+974 XXX XXXX (placeholder)", href: undefined },
  { icon: MapPin, label: "Doha, Qatar", href: undefined },
];

// Where the form posts. For the deployed site VITE_FORM_ENDPOINT comes from a
// GitHub repository variable the deploy workflow passes into the build;
// locally, put it in .env.local. Unset falls back to a mailto: link. Any
// service that accepts a JSON POST works — see README.md.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

// `half` fields sit side by side from the sm breakpoint, keeping the form
// short enough for the section to fit a laptop window.
const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name", half: false },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
  { name: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel", half: true },
];

// What a visitor is told when a send fails. Deliberately no fallback email
// address: the one the site shows elsewhere doesn't exist yet, and pointing
// people at it would lose the enquiry a second time.
const ERROR_COPY = {
  offline: "You seem to be offline. Check your connection, then press Try again.",
  rejected: "Something went wrong on our end. Please press Try again in a moment.",
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
  // why configuring FORM_ENDPOINT matters for real lead capture.
  const submitViaMailto = () => {
    const subject = encodeURIComponent(
      `Quote Request from ${form.name || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.location.href = `mailto:info@riqsinspection.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      submitViaMailto();
      return;
    }

    setStatus("sending");
    setErrorKind(null);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `Quote request from ${form.name || "website visitor"}`,
        }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      // A 200 alone isn't proof of delivery: FormSubmit answers 200 with
      // success:"false" while its destination address still awaits the
      // one-time activation click, so check the body too.
      const result = await response.json().catch(() => ({}));
      if (result.success === false || result.success === "false") {
        throw new Error(result.message || "Submission was not accepted");
      }
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      // The form keeps what the visitor typed, so a retry is one click.
      setErrorKind(navigator.onLine === false ? "offline" : "rejected");
      setStatus("error");
    }
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
                    {FORM_ENDPOINT
                      ? "Thank you — your message has been sent."
                      : "Thank you — your email client should now be open."}
                  </p>
                  <p className="text-sm text-gray-600">
                    {FORM_ENDPOINT
                      ? "We'll get back to you as soon as possible."
                      : "If it didn't open, email us directly at info@riqsinspection.com."}
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
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
