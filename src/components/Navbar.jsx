import { useState } from "react";
import { Menu, X, Pill } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-90"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-pharma-600 to-pharma-800 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/30">
            <Pill className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <span className="block text-xs font-semibold tracking-[0.2em] text-pharma-600">
              OMEGA
            </span>
            <span className="block text-sm font-bold tracking-wide text-slate-900 sm:text-base">
              PHARMACY
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-sm font-medium text-slate-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary hidden rounded-full bg-linear-to-r from-pharma-600 to-pharma-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/30 md:inline-block"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-all duration-300 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-pharma-50 hover:text-pharma-700"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              className="block rounded-full bg-linear-to-r from-pharma-600 to-pharma-700 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
              onClick={closeMenu}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
