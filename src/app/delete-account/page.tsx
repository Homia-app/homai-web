"use client";

import DocumentLayout from "@/components/DocumentLayout";
import { useLanguage } from "@/context/LanguageContext";
import { deleteAccountContent } from "@/locales/deleteAccount";

export default function DeleteAccount() {
  const { language } = useLanguage();

  const currentContent = deleteAccountContent[language as keyof typeof deleteAccountContent] || deleteAccountContent.en;

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

      {/* Instruction intro */}
      <p className="text-slate-800 font-semibold mb-6 text-start">
        {currentContent.intro}
      </p>

      {/* Steps List */}
      <ol className="space-y-4 text-start">
        {currentContent.steps.map((step, idx) => (
          <li key={idx} className="flex gap-4 items-start">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm shrink-0">
              {idx + 1}
            </span>
            <p className="text-slate-600 leading-relaxed pt-0.5 text-sm md:text-base">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </DocumentLayout>
  );
}
