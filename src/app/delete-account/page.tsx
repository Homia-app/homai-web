"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function DeleteAccount() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Delete Your Account and Data",
      subtitle: "To request deletion of your account and associated data for Homia app.",
      intro: "Please follow these steps:",
      steps: [
        "Open the Homia app and Sign In/Authenticate",
        "Go to Profiles Section",
        "Select “Delete Account” and confirm that you want to remove your account with all related data after which you will be Signed Out from the app."
      ]
    },
    ar: {
      title: "حذف حسابك وبياناتك",
      subtitle: "لطلب حذف حسابك والبيانات المرتبطة به لتطبيق هوميا (Homia).",
      intro: "يرجى اتباع الخطوات التالية:",
      steps: [
        "افتح تطبيق هوميا وقم بتسجيل الدخول / المصادقة",
        "انتقل إلى قسم الملف الشخصي (Profiles)",
        "حدد \"حذف الحساب\" (Delete Account) وأكد رغبتك في إزالة حسابك مع جميع البيانات ذات الصلة، وبعد ذلك سيتم تسجيل خروجك من التطبيق."
      ]
    },
    fr: {
      title: "Supprimer votre compte et vos données",
      subtitle: "Pour demander la suppression de votre compte et des données associées pour l'application Homia.",
      intro: "Veuillez suivre ces étapes :",
      steps: [
        "Ouvrez l'application Homia et connectez-vous / authentifiez-vous",
        "Allez dans la section Profils",
        "Sélectionnez « Supprimer le compte » et confirmez que vous souhaitez supprimer votre compte ainsi que toutes les données associées, après quoi vous serez déconnecté de l'application."
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

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
