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

import { ar } from "@/locales/ar";
import { en } from "@/locales/en";
import { fr } from "@/locales/fr";

const translations = { ar, en, fr };


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
