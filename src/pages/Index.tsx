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
            <Coffee className="w-6 h-6 text-[#A0FF42]" />
            <span className="text-xl font-bold text-white">5bucks</span>
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
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Turn Your Daily Coffee Into a Million Dollar Opportunity
            </h1>
            <p className="text-xl text-white/80">
              Instead of buying your coffee today, invest here and have a chance of winning 1 million dollars!
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="bg-[#A0FF42] hover:bg-[#A0FF42]/90 text-[#4C0E95] font-bold"
                asChild
              >
                <Link to="/signup">Start Investing</Link>
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
      <footer className="border-t border-white/10 py-8">
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