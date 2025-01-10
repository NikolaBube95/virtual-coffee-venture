import { Button } from "@/components/ui/button";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-app-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/b688ffc2-59e6-4dd2-bfc3-d94b36742b2b.png" 
            alt="5bucks logo" 
            className="h-8 w-auto"
          />
        </div>
        <div className="flex items-center space-x-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;