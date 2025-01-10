const Privacy = () => {
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
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            <div className="prose prose-invert">
              <p className="text-white/80">At 5bucks, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our services.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-white/80">When you use our app, we may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Personal Information: This includes your name, email address, payment details, and other information you provide when you create an account or make a purchase.</li>
                <li>Usage Data: We automatically collect information about how you use the app, including your interactions, preferences, and behaviors within the app.</li>
                <li>Transaction Data: We collect data related to the purchases you make, such as the amount spent on virtual coffee, and other financial transactions.</li>
                <li>Device and Log Data: This includes technical information like your IP address, browser type, device type, and the pages you visit.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-white/80">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Provide and improve our services</li>
                <li>Personalize your experience</li>
                <li>Communicate with you</li>
                <li>Conduct analytics</li>
                <li>Process payments</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Protect Your Information</h2>
              <p className="text-white/80">We implement a variety of security measures to maintain the safety of your personal information when you use the app, including encryption and secure servers.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Sharing Your Information</h2>
              <p className="text-white/80">We do not sell, trade, or transfer your personal information to third parties unless required by law or with your consent.</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Rights and Choices</h2>
              <p className="text-white/80">You have the following rights:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Access and correction of your personal information</li>
                <li>Deletion of your personal data</li>
                <li>Opt-out of communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contact Us</h2>
              <p className="text-white/80">If you have any questions about our Privacy Policy, please contact us at:</p>
              <p className="text-white/80">Email: support@5bucks.com</p>
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

export default Privacy;