import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface AffiliateBalanceProps {
  userId: string;
}

const AffiliateBalance = ({ userId }: AffiliateBalanceProps) => {
  const { toast } = useToast();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchAffiliateBalance();
  }, [userId]);

  const fetchAffiliateBalance = async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_user_affiliate_balance', { user_uuid: userId });
      
      if (error) throw error;
      setBalance(data || 0);
    } catch (error) {
      console.error('Error fetching affiliate balance:', error);
    }
  };

  const handleWithdraw = async () => {
    toast({
      title: "Coming soon!",
      description: "Withdrawal functionality will be available soon",
    });
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Your Affiliate Balance</h2>
      <p className="text-3xl font-bold text-[#9b87f5] mb-6">
        ${balance.toFixed(2)}
      </p>
      <Button 
        onClick={handleWithdraw}
        className="w-full bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white"
        disabled={balance <= 0}
      >
        Withdraw Funds
      </Button>
    </div>
  );
};

export default AffiliateBalance;