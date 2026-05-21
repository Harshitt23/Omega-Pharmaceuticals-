import { Pill, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <a
                href="#home"
                className="group flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-90"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pharma-600 text-white transition-transform duration-300 group-hover:scale-105">
                  <Pill className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-semibold tracking-[0.2em] text-pharma-400">
                    OMEGA
                  </span>
                  <span className="block text-base font-bold text-white">
                    PHARMACY
                  </span>
                </div>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
                Advancing global healthcare through safe, innovative, and
                high-quality pharmaceutical manufacturing.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Contact Information
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3 transition-colors duration-300 hover:text-slate-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pharma-400" />
                  <span>
                    First Floor, Tower A, Vatika City Centre, 
                    <br />
                    Sector 83, Gurugram, Haryana, INDIA (122012)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-pharma-400" />
                  <a
                    href="tel:+91-7818852886"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    +91-7818852886
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {year} Omega Pharmacy. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Pharmaceutical excellence you can trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
