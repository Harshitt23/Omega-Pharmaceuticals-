import { ShieldCheck } from "lucide-react";
import capsuleImg from "../assets/capsule.png";
import vialImg from "../assets/vial.png";
import syrupImg from "../assets/syrup.png";

const collageItems = [
  {
    id: "vial",
    image: vialImg,
    label: "Injectables",
    alt: "Pharmaceutical injectable solution",
    featured: true,
  },
  {
    id: "capsule",
    image: capsuleImg,
    label: "Capsules",
    alt: "Capsule medicines",
    featured: false,
  },
  {
    id: "syrup",
    image: syrupImg,
    label: "Syrups",
    alt: "Syrup formulations",
    featured: false,
  },
];

function CollageCell({ item }) {
  if (item.featured) {
    return (
      <div className="group col-span-2 flex min-h-[200px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-pharma-50 via-white to-slate-50 shadow-lg shadow-blue-500/5 transition-all duration-500 hover:border-pharma-200 hover:shadow-xl hover:shadow-blue-500/10 sm:min-h-[240px] lg:min-h-[260px]">
        <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
          <img
            src={item.image}
            alt={item.alt}
            className="max-h-[180px] w-full max-w-[280px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:max-h-[220px] lg:max-h-[240px]"
          />
        </div>
        <div className="flex items-center justify-between border-t border-slate-100/80 bg-white/60 px-4 py-3 backdrop-blur-sm sm:px-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-pharma-600">
            {item.label}
          </span>
          <span className="rounded-full bg-pharma-100 px-3 py-1 text-xs font-medium text-pharma-700">
            Featured
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex min-h-[160px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-pharma-50/40 shadow-md shadow-slate-200/50 transition-all duration-500 hover:-translate-y-0.5 hover:border-pharma-200 hover:shadow-lg hover:shadow-blue-500/10 sm:min-h-[180px]">
      <div className="flex flex-1 items-center justify-center p-4 sm:p-5">
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[120px] w-full max-w-[140px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.05] sm:max-h-[140px]"
        />
      </div>
      <div className="border-t border-slate-100/80 bg-white/70 px-4 py-2.5 text-center backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {item.label}
        </span>
      </div>
    </div>
  );
}

export default function HeroCollage() {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-3 shadow-2xl shadow-blue-500/10 backdrop-blur-sm sm:p-4 lg:p-5">
        <div className="mb-3 flex justify-end sm:mb-4">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3 py-2 shadow-md transition-transform duration-300 hover:-translate-y-0.5 sm:px-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pharma-100 text-pharma-600">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-pharma-600 sm:text-xs">
                GMP Certified
              </p>
              <p className="text-xs font-bold text-slate-800 sm:text-sm">
                ISO 9001 Standards
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {collageItems.map((item) => (
            <CollageCell key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
