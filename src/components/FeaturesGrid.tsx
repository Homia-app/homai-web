"use client";

import { Sparkles, ShoppingBag, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturesGrid() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-brand" />,
      title: t("features.item1Title"),
      description: t("features.item1Desc")
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-brand" />,
      title: t("features.item2Title"),
      description: t("features.item2Desc")
    },
    {
      icon: <Maximize2 className="w-8 h-8 text-brand" />,
      title: t("features.item3Title"),
      description: t("features.item3Desc")
    }
  ];

  return (
    <section id="features" className="py-20 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
            {t("features.badge")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            {t("features.title")}
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-bg-soft border border-surface-soft p-8 rounded-2xl transition-all duration-300 hover:border-brand/35 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-surface-soft/85 flex items-center justify-center mb-6 group-hover:bg-brand/5 group-hover:scale-105 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
