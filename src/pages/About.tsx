import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#4C0E95]">
      {/* Header - Same as Index */}
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

      {/* Main Content */}
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
            <div className="prose prose-invert">
              <p className="text-white/80 mb-8">
                Welcome to 5bucks – The Smart Way to Invest Your Coffee Money!
              </p>
              
              <p className="text-white/80 mb-12">
                At 5bucks, we believe in the power of small habits to create big changes. Our mission is simple: to help you turn your daily coffee spending into meaningful investments that can lead you to financial freedom. Every time you skip your regular coffee purchase and choose to invest the same amount in our app, you are making a choice for your future.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Story</h2>
              <p className="text-white/80 mb-12">
                We started with a simple idea: what if instead of spending a few dollars on a cup of coffee every day, you invested that money and watched it grow? Inspired by the power of compound interest and the opportunity to make investing accessible to everyone, we developed 5bucks to make financial growth as easy as grabbing your daily cup of coffee.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">What We Offer</h2>
              <p className="text-white/80 mb-12">
                Our platform offers an easy and seamless way to invest your daily "coffee money" into high-performing assets. Whether you're new to investing or an experienced investor, our app takes the complexity out of the equation. We automatically invest your funds, track your progress, and even offer a chance to win up to $1 million!
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-4 mb-12">
                <li>
                  <strong className="text-white">Investing Made Easy:</strong> No complex financial jargon or market expertise needed. Just buy your virtual coffee, and we'll take care of the rest.
                </li>
                <li>
                  <strong className="text-white">Grow Your Wealth:</strong> With compounding working for you, your small daily contributions could add up to something substantial over time.
                </li>
                <li>
                  <strong className="text-white">Million-Dollar Opportunity:</strong> Stick with the program, and you could win $1 million as part of our exciting rewards program.
                </li>
                <li>
                  <strong className="text-white">Transparency:</strong> We're committed to helping you grow your money and giving you full visibility of your investment journey.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Join Us Today</h2>
              <p className="text-white/80 mb-8">
                Start small, dream big, and watch your money grow. Join 5bucks today and turn your daily coffee habit into a smart financial decision!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 5bucks. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link>
              <Link to="/about" className="text-sm text-gray-400 hover:text-white">About</Link>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;