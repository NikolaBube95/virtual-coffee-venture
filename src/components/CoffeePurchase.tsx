import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, Plus, Minus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/auth/AuthProvider";
import { useToast } from "@/hooks/use-toast";

const CoffeePurchase = () => {
  const [coffeeCount, setCoffeeCount] = useState(1);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleIncrement = () => {
    setCoffeeCount(prev => Math.min(prev + 1, 200));
  };

  const handleDecrement = () => {
    setCoffeeCount(prev => Math.max(prev - 1, 1));
  };

  const handlePurchase = async () => {
    if (!user) return;

    try {
      const amount = coffeeCount * 5;
      const { error } = await supabase
        .from('coffee_purchases')
        .insert({
          user_id: user.id,
          quantity: coffeeCount,
          amount: amount
        });

      if (error) throw error;

      toast({
        title: "Purchase successful!",
        description: `You bought ${coffeeCount} coffee${coffeeCount > 1 ? 's' : ''} for $${amount}`,
      });

      setCoffeeCount(1);
    } catch (error) {
      console.error('Purchase error:', error);
      toast({
        title: "Purchase failed",
        description: "There was an error processing your purchase",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 animate-fadeIn bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center max-w-2xl text-white">
        Instead of buying your coffee today, invest here and have a chance of winning 1 million dollars
      </h1>
      
      <div className="relative">
        <img src="/lovable-uploads/a102f7ef-cf24-4cea-909b-1f43f9990663.png" alt="Virtual Coffee" className="w-32 h-32" />
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          className="rounded-full border-white/20 text-white hover:bg-white/10"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="text-2xl font-bold min-w-[3ch] text-center text-white">
          {coffeeCount}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          className="rounded-full border-white/20 text-white hover:bg-white/10"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <Button 
        onClick={handlePurchase}
        className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white"
        size="lg"
      >
        <Coffee className="mr-2" />
        Buy for ${(coffeeCount * 5).toFixed(2)}
      </Button>
    </div>
  );
};

export default CoffeePurchase;