import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, Plus, Minus, CreditCard, Wallet } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/auth/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CoffeePurchase = () => {
  const [coffeeCount, setCoffeeCount] = useState(1);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleIncrement = () => {
    setCoffeeCount(prev => Math.min(prev + 1, 200));
  };

  const handleDecrement = () => {
    setCoffeeCount(prev => Math.max(prev - 1, 1));
  };

  const handleBalancePurchase = async () => {
    if (!user) return;

    try {
      const { data: balanceData, error: balanceError } = await supabase
        .rpc('get_user_affiliate_balance', { user_uuid: user.id });

      if (balanceError) throw balanceError;

      const amount = coffeeCount * 5;
      if (balanceData < amount) {
        toast({
          title: "Insufficient balance",
          description: "Your affiliate balance is not enough for this purchase",
          variant: "destructive",
        });
        return;
      }

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
        description: `You bought ${coffeeCount} coffee${coffeeCount > 1 ? 's' : ''} using your balance`,
      });

      setCoffeeCount(1);
      setIsPaymentDialogOpen(false);
    } catch (error) {
      console.error('Purchase error:', error);
      toast({
        title: "Purchase failed",
        description: "There was an error processing your purchase",
        variant: "destructive",
      });
    }
  };

  const handleStripePurchase = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase.functions.invoke('create-coffee-checkout', {
        body: { quantity: coffeeCount }
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Stripe checkout error:', error);
      toast({
        title: "Checkout failed",
        description: "There was an error initiating the checkout",
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
        <img 
          src="/lovable-uploads/dedeef59-35c1-4ad9-92eb-c49163dc067c.png" 
          alt="Coffee Investment Mascot" 
          className="w-32 h-32"
        />
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

      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white"
            size="lg"
          >
            <Coffee className="mr-2" />
            Buy your coffee now ${(coffeeCount * 5).toFixed(2)}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Choose payment method</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Button
              onClick={handleStripePurchase}
              className="w-full"
              size="lg"
            >
              <CreditCard className="mr-2" />
              Pay with Card
            </Button>
            <Button
              onClick={handleBalancePurchase}
              className="w-full"
              size="lg"
              variant="outline"
            >
              <Wallet className="mr-2" />
              Pay with Balance
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CoffeePurchase;