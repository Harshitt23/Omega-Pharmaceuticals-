import { ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import HeroCollage from "./HeroCollage";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative overflow-hidden bg-linear-to-b from-white via-pharma-50/50 to-slate-50 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pb-32"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-pharma-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pharma-200 bg-white px-4 py-2 text-sm font-medium text-pharma-700 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <ShieldCheck className="h-4 w-4 text-pharma-600" />
              Trusted Healthcare Manufacturing
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Advanced{" "}
              <span className="bg-linear-to-r from-pharma-600 to-pharma-800 bg-clip-text text-transparent">
                Pharmaceutical
              </span>{" "}
              Solutions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Omega Pharmacy delivers precision-formulated medicines backed by
              rigorous quality control, innovative research, and a commitment to
              safer healthcare outcomes for patients and providers worldwide.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-pharma-600 to-pharma-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800"
              >
                Contact Our Team
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-10 sm:gap-8">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "120+", label: "Formulations" },
                { value: "99.8%", label: "Quality Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <dt className="text-2xl font-bold text-pharma-700 sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={150} className="w-full">
          <HeroCollage />
        </ScrollReveal>
      </div>
    </section>
  );
}
