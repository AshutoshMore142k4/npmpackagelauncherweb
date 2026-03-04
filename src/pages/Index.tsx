import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection, CLISection, DocsSection, FooterSection } from '@/components/LandingSections';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <CLISection />
      <DocsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
