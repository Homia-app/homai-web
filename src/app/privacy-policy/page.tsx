"use client";

import DocumentLayout from "@/components/DocumentLayout";
import { useLanguage } from "@/context/LanguageContext";
import { privacyPolicyContent } from "@/locales/privacyPolicy";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const currentContent = privacyPolicyContent[language as keyof typeof privacyPolicyContent] || privacyPolicyContent.en;

  return (
    <DocumentLayout maxWidth="max-w-4xl">
      {/* Header info */}
      <div className="border-b border-surface-soft pb-8 mb-10 text-start">
        <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          {currentContent.title}
        </h1>
        <p className="text-sm font-semibold text-brand tracking-wide">
          {currentContent.effectiveDate}
        </p>
      </div>

      {/* Intro paragraph */}
      <div className="text-slate-600 leading-relaxed text-base mb-10 text-start whitespace-pre-line">
        {currentContent.intro}
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {currentContent.sections.map((section, idx) => (
          <section key={idx} className="space-y-4 text-start">
            <h2 className="font-heading text-xl font-bold text-slate-900">
              {section.title}
            </h2>
            
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}

            {/* Render subsections if any (mainly Section 1) */}
            {"subsections" in section && section.subsections && (
              <div className="mt-4 space-y-6 pl-4 rtl:pl-0 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-surface-soft">
                {section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <h3 className="font-sans font-semibold text-slate-800 text-sm">
                      {sub.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 rtl:pl-0 rtl:pr-2 text-slate-600 text-sm leading-relaxed">
                      {sub.items.map((item, iIdx) => (
                        <li key={iIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Render flat list items if any (Section 2, 7, etc) */}
            {"items" in section && section.items && (
              <ul className="list-disc list-inside space-y-1.5 pl-4 rtl:pl-0 rtl:pr-4 text-slate-600 leading-relaxed">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx}>{item}</li>
                ))}
              </ul>
            )}

            {/* Render explicit footer text if any */}
            {"footerText" in section && section.footerText && (
              <div className="text-slate-600 mt-2 text-sm leading-relaxed">
                {section.footerText}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Bottom consent text */}
      <div className="mt-16 pt-8 border-t border-surface-soft text-start">
        <p className="text-base font-semibold text-slate-900">
          {currentContent.consentText}
        </p>
      </div>
    </DocumentLayout>
  );
}
