import { ArrowUpRight } from "lucide-react";
import capsuleImg from "../assets/capsule.png";
import vialImg from "../assets/vial.png";
import syrupImg from "../assets/syrup.png";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    image: capsuleImg,
    title: "Capsule Medicines",
    description:
      "Precision-dosed oral capsules engineered for optimal absorption, stability, and patient compliance across therapeutic categories.",
    alt: "Capsule medicines",
  },
  {
    image: vialImg,
    title: "Injectable Solutions",
    description:
      "Sterile injectable formulations manufactured under controlled environments for hospitals, clinics, and critical care applications.",
    alt: "Injectable pharmaceutical vial",
  },
  {
    image: syrupImg,
    title: "Syrup Formulations",
    description:
      "Palatable liquid medicines with accurate dosing systems, ideal for pediatric, geriatric, and swallow-sensitive patient groups.",
    alt: "Syrup formulations",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-20 bg-linear-to-b from-slate-50 to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pharma-600">
                Our Products
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Comprehensive Pharmaceutical Portfolio
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Explore our core product lines designed to meet diverse clinical
                and commercial healthcare demands.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-pharma-600 transition-all duration-300 hover:gap-2 hover:text-pharma-800"
            >
              Request catalog
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={index * 100}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md hover:border-pharma-200 hover:shadow-2xl hover:shadow-blue-500/15">
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-linear-to-br from-pharma-50 via-white to-slate-50 p-8">
                  <div className="absolute inset-0 bg-linear-to-t from-white/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="relative z-10 max-h-44 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-pharma-700">
                    {product.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-pharma-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
