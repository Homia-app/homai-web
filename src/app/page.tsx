import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SupplierStrip from "@/components/SupplierStrip";
import FeaturesGrid from "@/components/FeaturesGrid";
import ProductGallery from "@/components/ProductGallery";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-soft select-none antialiased">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Split Screen Hero Section */}
        <HeroSection />

        {/* Featured Supplier Logo Strip */}
        <SupplierStrip />

        {/* Features 3-Column Grid */}
        <FeaturesGrid />

        {/* Curated Marketplace Gallery */}
        <ProductGallery />

        {/* Violet Call-to-Action Banner */}
        <CtaBanner />
      </main>

      {/* Multi-column Footer */}
      <Footer />
    </div>
  );
}
