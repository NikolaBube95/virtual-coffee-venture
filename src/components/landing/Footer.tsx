import { Link } from "react-router-dom";

export const Footer = () => {
  return (
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
  );
};