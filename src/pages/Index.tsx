import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button 
              className="bg-[#A685FF] hover:bg-[#A685FF]/90 text-white"
              asChild
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/2e3b7316-0bc0-4483-9dc6-5f40a07de38d.png" 
                alt="5bucks mascot" 
                className="w-32 h-32 object-contain animate-bounce" 
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Turn Your Coffee Habit Into a Million-Dollar Opportunity!
            </h1>
            <p className="text-xl text-white/80">
              Why spend money on coffee when you can invest it and watch your wealth grow?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-[#A0FF42] hover:bg-[#A0FF42]/90 text-[#4C0E95] font-bold"
                asChild
              >
                <Link to="/signup">Start Investing Now</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-32 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="affiliate-card">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/2e3b7316-0bc0-4483-9dc6-5f40a07de38d.png" 
                    alt="5bucks mascot" 
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Buy Virtual Coffee</h3>
                <p className="text-white/80">Skip the local café and purchase a virtual coffee within our app.</p>
              </div>
              <div className="affiliate-card">
                <h3 className="text-xl font-bold mb-4">Invest Instead</h3>
                <p className="text-white/80">Instead of spending it, we use that $5 to invest in a carefully chosen portfolio.</p>
              </div>
              <div className="affiliate-card">
                <h3 className="text-xl font-bold mb-4">Watch It Grow</h3>
                <p className="text-white/80">Your $5 is working for you, compounding and growing into a future investment.</p>
              </div>
              <div className="affiliate-card">
                <h3 className="text-xl font-bold mb-4">Achieve Your Goal</h3>
                <p className="text-white/80">As you consistently invest, you get closer to winning $1,000,000!</p>
              </div>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="mt-32 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="affiliate-card">
                <h3 className="text-xl font-bold mb-4">Small, Consistent Investments</h3>
                <p className="text-white/80">Build a habit of investing small amounts that add up over time.</p>
              </div>
              <div className="affiliate-card">
                <h3 className="text-xl font-bold mb-4">Simple & Hassle-Free</h3>
                <p className="text-white/80">Our app makes investing easy, automatic, and fun.</p>
              </div>
              <div className="affiliate-card">
                <h3 className="text-xl font-bold mb-4">Chance to Win $1 Million</h3>
                <p className="text-white/80">Investing in yourself has never been this rewarding.</p>
              </div>
            </div>
          </div>

          {/* New CTA Section */}
          <div className="mt-32 bg-[#A0FF42]/10 py-16 rounded-3xl">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/2e3b7316-0bc0-4483-9dc6-5f40a07de38d.png" 
                  alt="5bucks mascot" 
                  className="w-24 h-24 object-contain" 
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Start Your Investment Journey?</h2>
              <p className="text-xl text-white/80">Join thousands of smart investors who've already made the switch!</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-[#A0FF42] hover:bg-[#A0FF42]/90 text-[#4C0E95] font-bold"
                  asChild
                >
                  <Link to="/signup">Create Account</Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-32 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="affiliate-card">
                <p className="text-white/80 italic mb-4">"I never thought about my coffee habit this way! I'm excited to see my daily small investments turning into something much bigger."</p>
                <p className="text-white font-bold">– Sarah T.</p>
              </div>
              <div className="affiliate-card">
                <p className="text-white/80 italic mb-4">"It's such a simple way to start investing, and now I'm watching my money grow instead of just drinking it away."</p>
                <p className="text-white font-bold">– Mark J.</p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-32 max-w-3xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/2e3b7316-0bc0-4483-9dc6-5f40a07de38d.png" 
                alt="5bucks mascot" 
                className="w-20 h-20 object-contain" 
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to turn your coffee habit into a future full of possibilities?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-[#A0FF42] hover:bg-[#A0FF42]/90 text-[#4C0E95] font-bold"
                asChild
              >
                <Link to="/signup">Start Investing Now</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © 2024 5bucks. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/about" className="text-sm text-white/60 hover:text-white">
                About Us
              </Link>
              <Link to="/privacy" className="text-sm text-white/60 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-white/60 hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
