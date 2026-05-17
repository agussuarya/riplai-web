import { Hero } from "@/components/landing/Hero";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { PricingCards } from "@/components/landing/PricingCards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeatureGrid />
      <HowItWorks />
      <Testimonials />
      <PricingCards />
    </>
  );
}
