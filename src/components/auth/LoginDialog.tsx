import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignup: () => void;
}

const LoginDialog = ({ isOpen, onClose, onOpenSignup }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error with Google login:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-app-background border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-white">Welcome Back</DialogTitle>
          <DialogDescription className="text-center text-white/70">
            Sign in to continue your investment journey
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-app-background px-2 text-white/70">Or continue with</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full border-white/10 text-white hover:bg-white/5"
          onClick={handleGoogleLogin}
        >
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>

        <div className="text-center text-sm text-white/70">
          Don't have an account?{" "}
          <button
            onClick={() => {
              onClose();
              onOpenSignup();
            }}
            className="text-primary hover:underline"
          >
            Sign up
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;