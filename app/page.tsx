import { CustomCursor } from "@/components/ui/CustomCursor";
import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ReadingProgressBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
