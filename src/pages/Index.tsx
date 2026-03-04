import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection, CLISection, FooterSection } from '@/components/LandingSections';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <CLISection />
      <FooterSection />
    </div>
  );
};

export default Index;
