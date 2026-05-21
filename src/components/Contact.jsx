import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pharma-600">
                Contact Us
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Let&apos;s Discuss Your Pharmaceutical Needs
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Reach out to our team for product inquiries, partnerships, or
                general information. We respond within one business day.
              </p>

              <ul className="mt-10 space-y-5">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content: (
                      <>
                      Omega Pharmacy, 2714 Osborne Rd, Suite K 
                      <br />
                      Saint Marys, GA – 31558
                      </>
                    ),
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: (
                      <a
                        href="Phone:912-226-7622 "
                        className="text-sm text-slate-600 transition-colors duration-300 hover:text-pharma-600"
                      >
                        912-226-7622 
                      </a>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <p className="text-sm text-slate-600">
                        info@ophtechnics.com
                      </p>
                    ),
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
                  >
                    <span className="icon-hover flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pharma-100 text-pharma-700 group-hover:bg-pharma-600 group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <div className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.content}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="card-hover rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-pharma-400 focus:bg-white focus:ring-2 focus:ring-pharma-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-pharma-400 focus:bg-white focus:ring-2 focus:ring-pharma-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-pharma-400 focus:bg-white focus:ring-2 focus:ring-pharma-500/20"
                  />
                </div>
              </div>

              {submitted && (
                <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 transition-opacity duration-300">
                  Thank you! Your message has been received.
                </p>
              )}

              <button
                type="submit"
                className="btn-primary group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pharma-600 to-pharma-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 sm:w-auto"
              >
                Submit
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
