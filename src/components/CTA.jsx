import { Globe, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="relative mx-4 overflow-hidden rounded-3xl sm:mx-6 lg:mx-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pharma-700 via-pharma-600 to-pharma-800 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-blue-300/20 blur-2xl" />

        <ScrollReveal className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="icon-hover mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur hover:bg-white/25">
            <Globe className="h-7 w-7" />
          </span>
          <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
            Delivering Safe & Reliable Pharmaceutical Products Worldwide.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Partner with Omega Pharmacy for scalable manufacturing, regulatory
            compliance, and dependable supply chain solutions tailored to your
            market.
          </p>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-pharma-800 shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
          >
            Start a Partnership
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
