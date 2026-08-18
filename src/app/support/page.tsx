"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Support() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Customer Support",
      subtitle: "We are here to help. Reach out to us with any questions or support requests.",
      intro: "How to contact us:",
      emailLabel: "Email Support",
      emailDesc: "Send us an email and we'll get back to you within 24-48 hours.",
      responseTime: "Response time: 24-48 hours",
      infoTitle: "What to include in your message:",
      infoItems: [
        "Your name and registered email address",
        "A clear description of the issue or inquiry",
        "Screenshots or error messages if applicable"
      ]
    },
    ar: {
      title: "دعم العملاء",
      subtitle: "نحن هنا لمساعدتك. تواصل معنا لأي استفسارات أو طلبات دعم.",
      intro: "كيفية الاتصال بنا:",
      emailLabel: "الدعم عبر البريد الإلكتروني",
      emailDesc: "أرسل لنا بريدًا إلكترونيًا وسنقوم بالرد عليك في غضون ٢٤-٤٨ ساعة.",
      responseTime: "وقت الرد: ٢٤-٤٨ ساعة",
      infoTitle: "ما يجب تضمينه في رسالتك:",
      infoItems: [
        "اسمك وعنوان بريدك الإلكتروني المسجل",
        "وصف واضح للمشكلة أو الاستفسار",
        "لقطات شاشة أو رسائل الخطأ إن وجدت"
      ]
    },
    fr: {
      title: "Support Client",
      subtitle: "Nous sommes là pour vous aider. Contactez-nous pour toute question ou demande d'assistance.",
      intro: "Comment nous contacter :",
      emailLabel: "Support par E-mail",
      emailDesc: "Envoyez-nous un e-mail et nous vous répondrons dans les 24 à 48 heures.",
      responseTime: "Délai de réponse : 24-48 heures",
      infoTitle: "Ce qu'il faut inclure dans votre message :",
      infoItems: [
        "Votre nom et adresse e-mail enregistrée",
        "Une description claire du problème ou de la demande",
        "Des captures d'écran ou messages d'erreur si applicable"
      ]
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen flex flex-col bg-bg-soft antialiased">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Document Content */}
      <main className="flex-grow py-12 md:py-20 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Card Container */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-surface-soft shadow-[0_4px_24px_rgba(15,23,42,0.02)]">
            
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
                  href="mailto:contact@homia-app.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-all duration-200"
                >
                  contact@homia-app.com
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

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
