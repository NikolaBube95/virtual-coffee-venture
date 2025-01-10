import { Button } from "@/components/ui/button";
import { useAuth } from "./auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Button 
          onClick={() => signOut()}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Button 
        onClick={() => navigate("/auth")}
        variant="ghost"
        className="text-white hover:bg-white/10"
      >
        Sign In
      </Button>

      <Button 
        onClick={() => navigate("/auth")}
        className="bg-primary hover:bg-primary/90"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default AuthButton;