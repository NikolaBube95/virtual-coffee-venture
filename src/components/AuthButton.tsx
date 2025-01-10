import { Button } from "@/components/ui/button";

const AuthButton = () => {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  return (
    <Button 
      onClick={handleLogin}
      className="bg-primary hover:bg-primary/90"
    >
      Sign In with Google
    </Button>
  );
};

export default AuthButton;