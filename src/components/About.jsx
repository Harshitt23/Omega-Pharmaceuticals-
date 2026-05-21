import { Award, FlaskConical, HeartPulse, Microscope } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: HeartPulse,
    title: "Patient-Centered Mission",
    description:
      "Every formulation is developed with patient safety and therapeutic efficacy at the core of our operations.",
  },
  {
    icon: Microscope,
    title: "Innovation & Research",
    description:
      "Continuous investment in R&D drives next-generation medicines that meet evolving global healthcare needs.",
  },
  {
    icon: Award,
    title: "Pharmaceutical Standards",
    description:
      "We adhere to strict GMP, FDA-aligned protocols, and international quality benchmarks across all production lines.",
  },
  {
    icon: FlaskConical,
    title: "Healthcare Quality",
    description:
      "From raw materials to final packaging, multi-stage quality assurance ensures consistent, reliable products.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pharma-600">
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pioneering Excellence in Pharmaceutical Care
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Omega Pharmacy is dedicated to advancing healthcare through
            high-quality medicine manufacturing, scientific innovation, and
            unwavering commitment to pharmaceutical integrity. We partner with
            healthcare professionals to deliver solutions that improve lives and
            strengthen communities.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 80}>
              <article className="card-hover group h-full rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm hover:border-pharma-200 hover:shadow-lg hover:shadow-blue-500/10">
                <span className="icon-hover inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pharma-100 text-pharma-700 group-hover:bg-pharma-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/20">
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-pharma-700">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
