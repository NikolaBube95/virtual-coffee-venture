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
      <Button 
        onClick={openLogin}
        className="bg-primary hover:bg-primary/90"
      >
        Sign In
      </Button>

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