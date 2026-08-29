import { useState } from "react";
import { Mail, Globe, Phone, MapPin } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Mail, label: "info@riqsinspection.com", href: "mailto:info@riqsinspection.com" },
  { icon: Globe, label: "www.riqsinspection.com", href: "https://www.riqsinspection.com" },
  // Placeholder phone number — replace with the real number once available.
  { icon: Phone, label: "+974 XXX XXXX (placeholder)", href: undefined },
  { icon: MapPin, label: "Doha, Qatar", href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // No real backend is wired up yet: submitting opens the user's email
  // client via a mailto: link pre-filled with the form data. To wire this up
  // for real, replace this handler with a fetch() POST to your backend, or
  // swap in a service like Formspree (https://formspree.io) or EmailJS
  // (https://www.emailjs.com/).
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request from ${form.name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:info@riqsinspection.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Contact Us
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg font-semibold text-white">
              RIQS – Ritvish Inspection &amp; Quality Services
            </p>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 text-steel-100">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-steel-600/30 text-steel-300">
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
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-6 shadow-xl sm:p-8"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center">
                <p className="text-lg font-semibold text-navy-900">
                  Thank you — your email client should now be open.
                </p>
                <p className="text-sm text-gray-600">
                  If it didn't open, email us directly at info@riqsinspection.com.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy-900">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-navy-900 focus:border-steel-500 focus:outline-none focus:ring-1 focus:ring-steel-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-navy-900 focus:border-steel-500 focus:outline-none focus:ring-1 focus:ring-steel-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy-900">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-navy-900 focus:border-steel-500 focus:outline-none focus:ring-1 focus:ring-steel-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-navy-900 focus:border-steel-500 focus:outline-none focus:ring-1 focus:ring-steel-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-steel-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-steel-400"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
