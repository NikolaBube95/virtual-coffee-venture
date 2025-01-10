import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Terms = () => {
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

      {/* Main Content */}
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
            <div className="prose prose-invert">
              <p className="text-white/80">Effective Date: 01.06.2023</p>
              
              <p className="text-white/80 mt-6">These Terms and Conditions ("Terms") govern your use of the services provided by 5bucks, including our website, mobile application, and any other services we offer (collectively, the "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80">By accessing or using our Services, you acknowledge that you have read, understood, and agree to these Terms. We reserve the right to modify or update these Terms at any time, and any changes will be effective immediately upon posting.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of the Services</h2>
              <p className="text-white/80">You must be at least 18 years of age to use our Services. By using our Services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Account Registration</h2>
              <p className="text-white/80">To use our Services, you may need to create an account. When registering, you must provide accurate and complete information, including a valid email address.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Purchases and Payments</h2>
              <p className="text-white/80">You agree to pay for any purchases made through the app, such as the purchase of virtual coffee. Payments will be processed through a third-party payment processor.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Investments</h2>
              <p className="text-white/80">When you purchase virtual coffee, the money will be used for investments as described in our platform. While we strive to ensure your investments are sound, all investments carry inherent risks.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Million-Dollar Prize</h2>
              <p className="text-white/80">By participating in the app, you are eligible to win a prize of up to $1 million. The exact conditions and eligibility requirements for the prize will be outlined in a separate prize agreement.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Privacy and Data Collection</h2>
              <p className="text-white/80">We collect personal information as described in our Privacy Policy. By using the Services, you consent to our collection, use, and disclosure of your information.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Contact Us</h2>
              <p className="text-white/80">If you have any questions or concerns regarding these Terms, please contact us at:</p>
              <p className="text-white/80">5 Bucks IO<br />Email: info@5bucks.io<br />Phone: +1 332 5551 222</p>
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
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;