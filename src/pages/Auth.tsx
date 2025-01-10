import { useState } from "react";
import LoginDialog from "@/components/auth/LoginDialog";
import SignupDialog from "@/components/auth/SignupDialog";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const handleOpenSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleOpenLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseSignup = () => setShowSignup(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-background">
      <LoginDialog
        isOpen={showLogin}
        onClose={handleCloseLogin}
        onOpenSignup={handleOpenSignup}
      />
      <SignupDialog
        isOpen={showSignup}
        onClose={handleCloseSignup}
        onOpenLogin={handleOpenLogin}
      />
    </div>
  );
};

export default Auth;