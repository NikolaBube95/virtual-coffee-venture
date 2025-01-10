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

interface SignupDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

const SignupDialog = ({ isOpen, onClose, onOpenLogin }: SignupDialogProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (signUpError) throw signUpError;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              email: formData.email,
              first_name: formData.firstName,
              last_name: formData.lastName,
              phone: formData.phone,
            }
          ]);

        if (profileError) throw profileError;
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error with Google signup:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-app-background border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-white">Create Account</DialogTitle>
          <DialogDescription className="text-center text-white/70">
            Start your investment journey today
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignup} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-white/5 border-white/10 text-white"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/5 border-white/10 text-white"
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white/5 border-white/10 text-white"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-white/5 border-white/10 text-white"
          />
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign Up"}
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
          onClick={handleGoogleSignup}
        >
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>

        <div className="text-center text-sm text-white/70">
          Already have an account?{" "}
          <button
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
            className="text-primary hover:underline"
          >
            Sign in
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;