import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DocumentLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export default function DocumentLayout({
  children,
  maxWidth = "max-w-3xl",
}: DocumentLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-soft antialiased">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Document Content */}
      <main className="flex-grow py-12 md:py-20 flex items-center">
        <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 w-full`}>
          {/* Card Container */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-surface-soft shadow-[0_4px_24px_rgba(15,23,42,0.02)]">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
