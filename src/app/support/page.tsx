"use client";

import DocumentLayout from "@/components/DocumentLayout";
import { useLanguage } from "@/context/LanguageContext";
import { supportContent } from "@/locales/support";
import { SUPPORT_EMAIL } from "@/config/constants";

export default function Support() {
  const { language } = useLanguage();

  const currentContent = supportContent[language as keyof typeof supportContent] || supportContent.en;

  return (
    <DocumentLayout>
      {/* Header section */}
      <div className="border-b border-surface-soft pb-6 mb-8 text-start">
        <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
          {currentContent.title}
        </h1>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
          {currentContent.subtitle}
        </p>
      </div>

      {/* Support Action Card */}
      <div className="bg-bg-soft rounded-2xl p-6 border border-surface-soft mb-8 text-start">
        <h2 className="font-heading text-lg font-bold text-slate-900 mb-2">
          {currentContent.emailLabel}
        </h2>
        <p className="text-slate-600 text-sm md:text-base mb-4">
          {currentContent.emailDesc}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-all duration-200"
          >
            {SUPPORT_EMAIL}
          </a>
          <span className="text-xs text-slate-400">
            {currentContent.responseTime}
          </span>
        </div>
      </div>

      {/* Recommended Information Checklist */}
      <div className="text-start">
        <h3 className="text-slate-800 font-semibold mb-4 text-sm md:text-base">
          {currentContent.infoTitle}
        </h3>
        <ul className="space-y-3">
          {currentContent.infoItems.map((item, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand/10 text-brand font-bold text-xs shrink-0 mt-0.5">
                ✓
              </span>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </DocumentLayout>
  );
}
