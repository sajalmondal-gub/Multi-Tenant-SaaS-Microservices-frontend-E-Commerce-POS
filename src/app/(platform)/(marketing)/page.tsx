import { HeroSection } from "@/components/marketing/HeroSection";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { TestimonialSection } from "@/components/marketing/TestimonialSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeatureGrid />
      <TestimonialSection />
    </>
  );
}
