"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ar" | "en" | "fr";
export type Direction = "rtl" | "ltr";

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    "nav.features": "المميزات",
    "nav.collections": "المجموعات",
    "nav.suppliers": "الموردون",
    "nav.about": "من نحن",
    "nav.cta": "احصل على التطبيق",
    
    "hero.titlePart1": "اكتشف، عاين،",
    "hero.titleHighlight": "واشترِ",
    "hero.titlePart2": "فنًا لجدرانك.",
    "hero.subtitle": "هوميا تجلب التصميم الداخلي الحديث لبيتك. استخدم سوق الواقع المعزز التفاعلي لمعاينة السيراميك المصنوع يدويًا وتصميمات جدران هندسية على جدرانك في الوقت الفعلي.",
    "hero.ctaPrimary": "تنزيل لنظام iOS",
    "hero.ctaSecondary": "عرض الكتالوج",
    "hero.socialProof": "موضع ثقة أكثر من ١٢,٠٠٠ مصمم ومالك منزل.",
    
    "suppliers.title": "الموردون المنسقون المميزون",
    
    "features.badge": "إعادة تعريف التصميم",
    "features.title": "تصميم داخلي معزز بالواقع",
    "features.subtitle": "تغلق هوميا الفجوة بين الخيال والتنفيذ. نجمع بين الحوسبة المكانية والبراعة اليدوية الراقية لتقديم تجربة طلب سلسة.",
    "features.item1Title": "معاينة ثلاثية الأبعاد فورية",
    "features.item1Desc": "اعرض بلاط السيراميك وأنماط الجدران الهندسية على جدرانك مباشرة. شاهد الألوان والتركيبات على الفور.",
    "features.item2Title": "سوق مباشر من الأستوديو",
    "features.item2Desc": "اطلب مباشرة من فنانين عالميين وموردين مستقلين. اكتشف مجموعات فريدة لن تجدها في أي مكان آخر.",
    "features.item3Title": "مسح مساحي دقيق",
    "features.item3Desc": "تقوم أداة مسح وتخطيط المساحة الذكية بقياس جدرانك وحساب الكمية المطلوبة بدقة ٩٩٪ لتجنب الهدر.",
    
    "gallery.badge": "سوق منسق",
    "gallery.title": "استكشف المجموعات المنسقة",
    "gallery.cta": "تصفح الكتالوج الكامل",
    "gallery.viewProduct": "عرض",
    "gallery.prod1": "بلاط الجدران الهندسي المنشوري",
    "gallery.prod2": "مزهرية عضوية مصنوعة يدويًا",
    "gallery.prod3": "أصيص فخاري مضلع",
    "gallery.prod4": "طقم أطباق عشاء سيراميك حرفي",
    
    "cta.badge": "ابدأ على الفور",
    "cta.title": "ادخل فن السيراميك الراقي إلى مساحتك المعيشية",
    "cta.sub": "قم بتنزيل تطبيق هوميا لنظام iOS. استخدم ميزة الواقع المعزز لمعاينة الأنماط، تخصيص التخطيط، والشراء.",
    "cta.ctaPrimary": "تنزيل لنظام iOS",
    "cta.ctaSecondary": "استكشف كتالوج الويب",
    
    "footer.tagline": "هوميا هو سوق تصميم داخلي معزز بالواقع المعزز. عاين بلاط السيراميك الفاخر وأنماط الجدران في مساحتك قبل الشراء.",
    "footer.prod": "المنتج",
    "footer.comp": "الشركة",
    "footer.res": "الموارد",
    "footer.support": "الدعم",
    "footer.privacy": "الخصوصية",
    "footer.terms": "الشروط",
    "footer.press": "الملف الصحفي",
    "footer.newsletter": "انضم إلى نشرتنا الإخبارية",
    "footer.newsletterSub": "اشترك للحصول على نصائح التصميم، تحديثات الموردين، وإصدارات المجموعات الحصرية.",
    "footer.newsletterPlaceholder": "أدخل بريدك الإلكتروني",
    "footer.newsletterSuccess": "شكراً لك! لقد تم اشتراكك بنجاح.",
    "footer.copyright": "جميع الحقوق محفوظة. هوميا للتكنولوجيا ش.م.م."
  },
  en: {
    "nav.features": "Features",
    "nav.collections": "Collections",
    "nav.suppliers": "Suppliers",
    "nav.about": "About",
    "nav.cta": "Get App",
    
    "hero.titlePart1": "Discover, preview, and",
    "hero.titleHighlight": "buy",
    "hero.titlePart2": "art for your walls.",
    "hero.subtitle": "Homia brings modern editorial interior design directly into your home. Use our interactive AR marketplace to preview handcrafted ceramics and geometric wall tiles on your walls in real time.",
    "hero.ctaPrimary": "Download for iOS",
    "hero.ctaSecondary": "View Catalog",
    "hero.socialProof": "Trusted by over 12,000+ designers and homeowners.",
    
    "suppliers.title": "Featured Curated Suppliers",
    
    "features.badge": "Design Redefined",
    "features.title": "Augmented Interior Design",
    "features.subtitle": "Homia closes the gap between imagination and execution. We combine spatial computing with high-end craftsmanship to deliver a frictionless studio ordering experience.",
    "features.item1Title": "Real-Time AR Preview",
    "features.item1Desc": "Project ceramic tiles and geometric wall patterns directly onto your walls with zero lag. See colors, glazes, and grout configurations instantly.",
    "features.item2Title": "Direct-to-Studio Marketplace",
    "features.item2Desc": "Order directly from curated global artisans and independent suppliers. Discover unique collections you won't find anywhere else.",
    "features.item3Title": "Precision Spatial Scan",
    "features.item3Desc": "Our intelligent layout scanning tool automatically measures your walls, computes tile coverage, and aligns patterns with 99% accuracy.",
    
    "gallery.badge": "Curated Marketplace",
    "gallery.title": "Explore Curated Collections",
    "gallery.cta": "Browse Full Catalog",
    "gallery.viewProduct": "View",
    "gallery.prod1": "Prism Geometric Wall Tiles",
    "gallery.prod2": "Hand-Thrown Organic Vase",
    "gallery.prod3": "Fluted Terracotta Planter",
    "gallery.prod4": "Artisanal Ceramic Dinner Set",
    
    "cta.badge": "Get Started Instantly",
    "cta.title": "Bring Editorial Ceramic Art into Your Living Space",
    "cta.sub": "Download the Homia app for iOS. Use our real-time AR viewer to preview styles, customize layouts, and purchase handcrafted designs.",
    "cta.ctaPrimary": "Download for iOS",
    "cta.ctaSecondary": "Explore Web Catalog",
    
    "footer.tagline": "Homia is an AR-powered interior design marketplace. Preview premium ceramics and wall patterns directly in your space before buying.",
    "footer.prod": "Product",
    "footer.comp": "Company",
    "footer.res": "Resources",
    "footer.support": "Support",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.press": "Press Kit",
    "footer.newsletter": "Join Our Newsletter",
    "footer.newsletterSub": "Subscribe to get design advice, supplier updates, and exclusive collection drops.",
    "footer.newsletterPlaceholder": "Enter your email",
    "footer.newsletterSuccess": "Thank you! You have been successfully subscribed.",
    "footer.copyright": "Homia Technologies Inc. All rights reserved."
  },
  fr: {
    "nav.features": "Fonctionnalités",
    "nav.collections": "Collections",
    "nav.suppliers": "Fournisseurs",
    "nav.about": "À propos",
    "nav.cta": "Obtenir l'app",
    
    "hero.titlePart1": "Découvrez, visualisez, et",
    "hero.titleHighlight": "achetez",
    "hero.titlePart2": "de l'art pour vos murs.",
    "hero.subtitle": "Homia apporte le design d'intérieur éditorial moderne chez vous. Utilisez notre marketplace AR interactive pour prévisualiser des céramiques artisanales et des motifs muraux géométriques en temps réel.",
    "hero.ctaPrimary": "Télécharger pour iOS",
    "hero.ctaSecondary": "Voir le catalogue",
    "hero.socialProof": "Approuvé par plus de 12 000 designers et propriétaires.",
    
    "suppliers.title": "Fournisseurs Sélectionnés",
    
    "features.badge": "Design Redéfini",
    "features.title": "Design d'Intérieur Augmenté",
    "features.subtitle": "Homia comble le fossé entre imagination et réalisation. Nous combinons l'informatique spatiale et l'artisanat haut de gamme pour une expérience de commande fluide.",
    "features.item1Title": "Aperçu AR en temps réel",
    "features.item1Desc": "Projetez des carreaux de céramique directement sur vos murs. Visualisez les couleurs et les motifs instantanément dans votre propre espace.",
    "features.item2Title": "Studio en direct",
    "features.item2Desc": "Commandez directement auprès d'artisans mondiaux et de fournisseurs indépendants. Découvrez des collections uniques.",
    "features.item3Title": "Scan spatial de précision",
    "features.item3Desc": "Notre outil de scan mesure automatiquement vos murs, calcule la surface nécessaire et aligne les motifs à 99% de précision.",
    
    "gallery.badge": "Marché Sélectionné",
    "gallery.title": "Explorer les Collections",
    "gallery.cta": "Parcourir le catalogue complet",
    "gallery.viewProduct": "Voir",
    "gallery.prod1": "Carreaux géométriques Prism",
    "gallery.prod2": "Vase organique façonné main",
    "gallery.prod3": "Jardinière en terre cuite cannelée",
    "gallery.prod4": "Service d'assiettes en céramique artisanale",
    
    "cta.badge": "Commencer Instantanément",
    "cta.title": "Sublimez votre intérieur avec l'art de la céramique",
    "cta.sub": "Téléchargez l'application Homia pour iOS. Utilisez notre visualiseur AR pour essayer les styles, personnaliser et acheter.",
    "cta.ctaPrimary": "Télécharger pour iOS",
    "cta.ctaSecondary": "Explorer le catalogue web",
    
    "footer.tagline": "Homia est un marché de design d'intérieur en réalité augmentée. Prévisualisez des céramiques et des designs muraux haut de gamme directement chez vous.",
    "footer.prod": "Produit",
    "footer.comp": "Entreprise",
    "footer.res": "Ressources",
    "footer.support": "Support",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions",
    "footer.press": "Dossier de Presse",
    "footer.newsletter": "Rejoindre la Newsletter",
    "footer.newsletterSub": "Abonnez-vous pour recevoir des conseils de design, des nouveautés fournisseurs et des lancements exclusifs.",
    "footer.newsletterPlaceholder": "Entrez votre email",
    "footer.newsletterSuccess": "Merci ! Vous avez été inscrit avec succès.",
    "footer.copyright": "Tous droits réservés. Homia Technologies Inc."
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Set Arabic ("ar") as default language
  const [language, setLanguageState] = useState<Language>("ar");

  const direction: Direction = language === "ar" ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const dict = translations[language];
    return (dict as Record<string, string>)[key] || key;
  };

  useEffect(() => {
    // Dynamically update document properties for accessibility & layouts
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
