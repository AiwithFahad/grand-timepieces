import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import { Collections } from "@/components/Collections";
import { BrandStory } from "@/components/BrandStory";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <HeroCarousel />
      <ProductGrid />
      <Collections />
      <BrandStory />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
