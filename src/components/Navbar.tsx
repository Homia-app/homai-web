"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-soft/90 backdrop-blur-md border-b border-surface-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Mark + Wordmark */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-[0_4px_12px_rgba(98,67,255,0.2)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 538 0 L 725 187 L 439 473 L 422 498 L 413 531 L 416 532 L 470 504 L 528 480 L 579 463 L 639 448 L 721 437 L 875 440 L 875 1023 L 611 1023 L 610 733 L 569 750 L 513 781 L 463 815 L 413 856 L 413 1023 L 148 1023 L 148 528 L 156 464 L 172 410 L 201 351 L 244 294 L 537 1 Z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900">
              Homia
            </span>
          </Link>

          {/* Minimal Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-text-muted hover:text-brand transition-colors duration-200"
            >
              {t("nav.features")}
            </Link>
            <Link
              href="#catalog"
              className="text-sm font-medium text-text-muted hover:text-brand transition-colors duration-200"
            >
              {t("nav.collections")}
            </Link>
            <Link
              href="#suppliers"
              className="text-sm font-medium text-text-muted hover:text-brand transition-colors duration-200"
            >
              {t("nav.suppliers")}
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-text-muted hover:text-brand transition-colors duration-200"
            >
              {t("nav.about")}
            </Link>
          </nav>

          {/* Primary CTA + Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher Pills */}
            <div className="flex items-center gap-1 border border-slate-200 bg-surface-soft/40 p-1 rounded-full text-xs">
              {(["ar", "en", "fr"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-200 ${
                    language === lang
                      ? "bg-brand text-white shadow-sm"
                      : "text-slate-500 hover:text-brand"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <Link
              href="#download"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-brand rounded-full hover:bg-brand/90 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(98,67,255,0.3)]"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile Actions Container (Menu Toggle + Quick Selector) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language Selector (Mini dropdown/select for mobile header to save space) */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-surface-soft/80 border border-slate-200 rounded-full px-2.5 py-1 text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand"
            >
              <option value="ar">العربية</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-soft border-b border-surface-soft px-4 pt-4 pb-6 absolute top-full left-0 w-full shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-muted hover:text-brand transition-colors duration-200 py-2 border-b border-slate-100"
            >
              {t("nav.features")}
            </Link>
            <Link
              href="#catalog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-muted hover:text-brand transition-colors duration-200 py-2 border-b border-slate-100"
            >
              {t("nav.collections")}
            </Link>
            <Link
              href="#suppliers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-muted hover:text-brand transition-colors duration-200 py-2 border-b border-slate-100"
            >
              {t("nav.suppliers")}
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-muted hover:text-brand transition-colors duration-200 py-2 border-b border-slate-100"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full mt-2 px-6 py-3 text-base font-semibold text-white bg-brand rounded-full hover:bg-brand/90 transition-all duration-200"
            >
              {t("nav.cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
