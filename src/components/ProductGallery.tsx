"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductGallery() {
  const { t } = useLanguage();

  const products = [
    {
      image: "/images/geometric_wall_tiles.jpg",
      title: t("gallery.prod1"),
      supplier: "Moderna",
      price: "$18.50 / sq ft",
      link: "#"
    },
    {
      image: "/images/ceramic_vase.jpg",
      title: t("gallery.prod2"),
      supplier: "Kiln",
      price: "$120.00",
      link: "#"
    },
    {
      image: "/images/terracotta_pot.jpg",
      title: t("gallery.prod3"),
      supplier: "Terra",
      price: "$85.00",
      link: "#"
    },
    {
      image: "/images/ceramic_plates.jpg",
      title: t("gallery.prod4"),
      supplier: "Clay & Co",
      price: "$145.00",
      link: "#"
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
              {t("gallery.badge")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              {t("gallery.title")}
            </h2>
          </div>
          <Link
            href="#catalog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand/80 transition-colors duration-200"
          >
            {t("gallery.cta")}
            <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-surface-soft shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Product Image (4:5 Aspect Ratio) */}
              <div className="relative w-full aspect-[4/5] bg-surface-soft overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-all duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-medium text-text-muted">
                    {t("gallery.viewProduct")} {product.supplier}
                  </span>
                  <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-brand transition-colors duration-200 line-clamp-1">
                    {product.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-brand">
                    {product.price}
                  </span>
                  
                  {/* Subtle View Button */}
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-brand transition-colors duration-200 flex items-center gap-0.5">
                    {t("gallery.viewProduct")}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
