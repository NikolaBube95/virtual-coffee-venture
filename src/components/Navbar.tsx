import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-app-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Coffee className="w-6 h-6 text-secondary" />
          <span className="text-xl font-bold">5bucks</span>
        </div>
        <div className="flex items-center space-x-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;