import { Button } from "@/components/ui/button";
import { useState } from "react";
import LoginDialog from "./auth/LoginDialog";
import SignupDialog from "./auth/SignupDialog";

const AuthButton = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <Button 
          onClick={openLogin}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          Sign In
        </Button>

        <Button 
          onClick={openSignup}
          className="bg-primary hover:bg-primary/90"
        >
          Sign Up
        </Button>
      </div>

      <LoginDialog 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onOpenSignup={openSignup}
      />

      <SignupDialog 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onOpenLogin={openLogin}
      />
    </>
  );
};

export default AuthButton;