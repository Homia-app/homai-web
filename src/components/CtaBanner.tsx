"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-16 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Brand Violet Background */}
        <div className="relative rounded-3xl bg-brand overflow-hidden px-8 py-16 sm:px-16 sm:py-24 text-center shadow-xl">
          
          {/* Subtle Abstract Background Shapes for Texture */}
          <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] rounded-full bg-white/5 blur-[50px] translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 -z-10 w-[200px] h-[200px] rounded-full bg-white/5 blur-[40px] -translate-x-1/4 translate-y-1/4" />
          
          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
              {t("cta.badge")}
            </span>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {t("cta.title")}
            </h2>
            
            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              {t("cta.sub")}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#download"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand bg-white rounded-full hover:bg-slate-50 transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                {t("cta.ctaPrimary")}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
              
              <Link
                href="#catalog"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {t("cta.ctaSecondary")}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
