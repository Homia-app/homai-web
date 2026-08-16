"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SupplierStrip() {
  const { t } = useLanguage();
  const suppliers = ["TERRA", "MODERNA", "CLAY & CO", "MURALIST", "KILN"];

  return (
    <section id="suppliers" className="w-full bg-bg-soft border-t border-b border-surface-soft py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 items-center">
          {/* Centered Uppercase Label */}
          <span className="text-xs font-bold tracking-[0.2em] text-text-muted uppercase">
            {t("suppliers.title")}
          </span>

          {/* Grayscale Logo Row */}
          <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
            {suppliers.map((supplier, index) => (
              <div
                key={index}
                className="text-slate-400 hover:text-slate-800 transition-colors duration-300 font-heading font-bold text-lg md:text-xl tracking-[0.15em] select-none cursor-default py-2"
              >
                {supplier}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
