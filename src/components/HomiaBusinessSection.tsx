"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Receipt, 
  Package, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  Store, 
  ShoppingBag, 
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomiaBusinessSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"invoices" | "products" | "analytics" | "arsync">("invoices");

  const tabs = [
    {
      id: "invoices" as const,
      icon: Receipt,
      title: t("business.tabInvoices"),
      desc: t("business.tabInvoicesDesc"),
      image: "/images/business/screen_invoices.webp",
      highlight: "LOOPINV-880 • 25,000 DA",
      badge: "Real-time Invoicing",
    },
    {
      id: "products" as const,
      icon: Package,
      title: t("business.tabProducts"),
      desc: t("business.tabProductsDesc"),
      image: "/images/business/screen_product_form.webp",
      highlight: "Doors, Paint, Tiles & Furniture",
      badge: "Rapid Listing < 60s",
    },
    {
      id: "analytics" as const,
      icon: TrendingUp,
      title: t("business.tabAnalytics"),
      desc: t("business.tabAnalyticsDesc"),
      image: "/images/business/screen_analytics.webp",
      highlight: "70M DA Revenue • +8.2%",
      badge: "30-Day Growth Analytics",
    },
    {
      id: "arsync" as const,
      icon: Sparkles,
      title: t("business.tabArSync"),
      desc: t("business.tabArSyncDesc"),
      image: "/images/business/screen_products_list.webp",
      highlight: "Instant 3D Customer Projection",
      badge: "Automated AR Sync",
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const stats = [
    { value: t("business.statRevenue"), label: t("business.statRevenueLabel") },
    { value: t("business.statGrowth"), label: t("business.statGrowthLabel") },
    { value: t("business.statSpeed"), label: t("business.statSpeedLabel") },
    { value: t("business.statAcceptance"), label: t("business.statAcceptanceLabel") },
  ];

  return (
    <section id="business" className="relative py-24 bg-[#0A0915] text-white overflow-hidden">
      {/* Background Ambient Violet & Indigo Glow Orbs */}
      <div className="absolute top-1/4 start-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-brand/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 -z-10 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-light backdrop-blur-md">
            <div className="w-5 h-5 rounded-md overflow-hidden bg-black flex items-center justify-center border border-white/10 shrink-0">
              <Image 
                src="/images/business/admin-logo.png" 
                alt="Homia Business Logo" 
                width={20} 
                height={20} 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="tracking-wide uppercase text-slate-300">
              {t("business.badge")}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {t("business.title")}
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {t("business.subtitle")}
          </p>
        </div>

        {/* Interactive Feature Tabs + App Mockup Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl">
          
          {/* Left Column: Interactive Tab Buttons */}
          <div className="lg:col-span-6 space-y-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-start p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 group ${
                    isActive
                      ? "bg-brand/15 border-brand/50 shadow-[0_8px_30px_rgba(98,67,255,0.2)]"
                      : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/15"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-brand text-white shadow-md shadow-brand/40 scale-105"
                        : "bg-white/5 text-slate-400 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-heading text-lg font-bold transition-colors ${
                          isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {tab.title}
                      </h3>
                      {isActive && (
                        <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand/30 text-indigo-300 border border-brand/40">
                          {tab.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {tab.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual App Mockup Card */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Ambient Backlight behind the phone display */}
            <div className="absolute w-[240px] h-[240px] rounded-full bg-brand/30 blur-[70px] pointer-events-none" />

            {/* Container for the Active Mockup Screen */}
            <div className="relative w-full max-w-[320px] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 bg-black group">
              <div className="relative aspect-[9/18.5] w-full">
                <Image
                  src={currentTab.image}
                  alt={currentTab.title}
                  fill
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Highlight Pill on the Screen */}
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-black/85 border border-white/20 backdrop-blur-md flex items-center gap-3 shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-brand/40 border border-brand/50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-start overflow-hidden">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold truncate">
                    {currentTab.badge}
                  </p>
                  <p className="text-xs font-bold text-white truncate">
                    {currentTab.highlight}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Business Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:bg-white/[0.05] transition-colors"
            >
              <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 text-brand">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* The Duality Showcase: Two Apps, One Platform */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              {t("business.dualityTitle")}
            </h3>
            <p className="text-sm sm:text-base text-slate-400">
              {t("business.dualitySubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
            
            {/* App 1: Homia for Shoppers & Designers */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-brand/40 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/30">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 538 0 L 725 187 L 439 473 L 422 498 L 413 531 L 416 532 L 470 504 L 528 480 L 579 463 L 639 448 L 721 437 L 875 440 L 875 1023 L 611 1023 L 610 733 L 569 750 L 513 781 L 463 815 L 413 856 L 413 1023 L 148 1023 L 148 528 L 156 464 L 172 410 L 201 351 L 244 294 L 537 1 Z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-300">
                    Consumer App
                  </span>
                </div>

                <div className="space-y-2 text-start">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {t("business.shopperAppTitle")}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {t("business.shopperAppDesc")}
                  </p>
                </div>

                <ul className="space-y-2.5 text-start text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span>Real-time spatial wall AR visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span>Wall scan & automated tile coverage calculator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span>Direct-from-studio transparent ordering</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold rounded-full bg-brand text-white hover:bg-brand/90 transition-all duration-200 shadow-lg shadow-brand/25"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t("business.shopperAppCta")}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>

            {/* App 2: Homia Business for Store Owners */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-brand/20 via-white/[0.04] to-purple-900/20 border border-brand/40 flex flex-col justify-between shadow-[0_15px_40px_rgba(98,67,255,0.15)] hover:border-brand/70 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-black border border-white/20 p-2 flex items-center justify-center shadow-lg">
                    <Image
                      src="/images/business/admin-logo.png"
                      alt="Homia Business Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand/30 border border-brand/40 text-indigo-300">
                    Merchant App
                  </span>
                </div>

                <div className="space-y-2 text-start">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    {t("business.ownerAppTitle")}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t("business.ownerAppDesc")}
                  </p>
                </div>

                <ul className="space-y-2.5 text-start text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real-time invoice generation & order acceptance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fast product listing (doors, paint, tiles, decor)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Live revenue & 30-day sales growth analytics</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="mailto:contact@homia-app.com?subject=Join%20Homia%20Business%20as%20Store%20Owner"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold rounded-full bg-white text-slate-950 hover:bg-slate-100 transition-all duration-200 shadow-lg"
                >
                  <Store className="w-4 h-4" />
                  <span>{t("business.ownerAppCta")}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}