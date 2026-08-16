"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Twitter, MessageSquare, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-[#0B0A14] text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Branding, Links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo + Tagline */}
          <div className="md:col-span-4 space-y-6">
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
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Homia
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed text-start">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-3 gap-8 md:col-span-5">
            {/* Column 1: Product */}
            <div className="space-y-4 text-start">
              <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
                {t("footer.prod")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors duration-200">
                    {t("nav.features")}
                  </Link>
                </li>
                <li>
                  <Link href="#catalog" className="hover:text-white transition-colors duration-200">
                    {t("nav.collections")}
                  </Link>
                </li>
                <li>
                  <Link href="#download" className="hover:text-white transition-colors duration-200">
                    {t("nav.cta")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-4 text-start">
              <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
                {t("footer.comp")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors duration-200">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="#suppliers" className="hover:text-white transition-colors duration-200">
                    {t("nav.suppliers")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    {t("footer.press")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4 text-start">
              <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
                {t("footer.res")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    {t("footer.support")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    {t("footer.terms")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 space-y-4 text-start">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
              {t("footer.newsletter")}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t("footer.newsletterSub")}
            </p>
            <form onSubmit={handleSubmit} className="relative mt-2">
              <input
                type="email"
                required
                placeholder={t("footer.newsletterPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "success"}
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/60 disabled:opacity-50 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={status === "success" || status === "loading"}
                className="absolute end-1.5 top-1.5 p-2 bg-brand rounded-full text-white hover:bg-brand/90 transition-colors duration-200 disabled:opacity-50"
                aria-label="Subscribe"
              >
                {status === "loading" ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin block" />
                ) : (
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                )}
              </button>
            </form>
            {status === "success" && (
              <p className="text-xs text-emerald-400 mt-2 font-medium">
                {t("footer.newsletterSuccess")}
              </p>
            )}
          </div>

        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4.5 h-4.5" />
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-4.5 h-4.5" />
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="MessageSquare"
            >
              <MessageSquare className="w-4.5 h-4.5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
