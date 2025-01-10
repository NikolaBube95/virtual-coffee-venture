import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { KeyBenefits } from "@/components/landing/KeyBenefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";
import AuthButton from "@/components/AuthButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#4C0E95]">
      {/* Header */}
      <header className="fixed w-full top-0 bg-[#4C0E95]/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/d5040d4a-0fd9-4fc7-858b-961e866e097d.png" 
              alt="5bucks logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex gap-4">
            <AuthButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <Hero />
          <HowItWorks />
          <KeyBenefits />
          <Testimonials />
          <CallToAction />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;