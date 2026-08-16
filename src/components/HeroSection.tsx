"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-12 lg:py-24">
      {/* Background Soft Violet Blurred Orb */}
      <div className="absolute end-0 top-1/4 -z-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-brand/10 blur-[80px] sm:blur-[120px] ltr:translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/4 animate-pulse duration-5000" />
      <div className="absolute start-0 bottom-10 -z-10 w-[200px] h-[200px] rounded-full bg-brand/5 blur-[60px] ltr:-translate-x-1/2 rtl:translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 text-start space-y-8 max-w-2xl">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              {t("hero.titlePart1")}{" "}
              <span className="text-brand">{t("hero.titleHighlight")}</span>{" "}
              {t("hero.titlePart2")}
            </h1>
            
            <p className="text-lg text-text-muted leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* CTA Pill Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#download"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand rounded-full hover:bg-brand/90 transition-all duration-200 shadow-[0_8px_30px_rgba(98,67,255,0.3)] hover:translate-y-[-1px]"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
              
              <Link
                href="#catalog"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-surface-soft/80 border border-slate-200/50 rounded-full hover:bg-surface-soft transition-all duration-200"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>

            {/* Social Proof Row */}
            <div className="pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-bg-soft shadow-sm">
                  <Image
                    src="/images/avatar_1.jpg"
                    alt="Homia user headshot"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-bg-soft shadow-sm">
                  <Image
                    src="/images/avatar_2.jpg"
                    alt="Homia user headshot"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-bg-soft shadow-sm">
                  <Image
                    src="/images/avatar_3.jpg"
                    alt="Homia user headshot"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                  <span className="text-sm font-semibold text-slate-800 ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-text-muted">
                  {t("hero.socialProof")}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end rtl:lg:justify-start relative">
            {/* Soft violet blurred orb specifically behind the phone */}
            <div className="absolute top-1/2 left-1/2 -z-10 w-[260px] h-[260px] rounded-full bg-brand/35 blur-[60px] -translate-x-1/2 -translate-y-1/2" />
            
            {/* Phone Mockup Wrapper with float animation */}
            <div className="relative w-[280px] h-[580px] sm:w-[310px] sm:h-[640px] animate-float">
              {/* Phone Outer Frame */}
              <div className="absolute inset-0 rounded-[44px] border-[11px] border-slate-900 bg-slate-950 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] overflow-hidden">
                
                {/* Speaker Ear Piece */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Inner Screen Content */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/ar_phone_preview.jpg"
                    alt="Homia AR Interface Preview"
                    fill
                    sizes="(max-width: 768px) 280px, 310px"
                    priority
                    className="object-cover object-center"
                  />
                </div>

              </div>

              {/* Decorative glare lines/reflections for the phone glass */}
              <div className="absolute top-0 right-0 w-full h-full rounded-[44px] border-[1px] border-white/20 pointer-events-none z-30" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
