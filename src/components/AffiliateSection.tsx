import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

const AffiliateSection = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [balance, setBalance] = useState(0);
  const affiliateLink = `${window.location.origin}?ref=${user?.id}`;

  useEffect(() => {
    if (user) {
      fetchAffiliateBalance();
    }
  }, [user]);

  const fetchAffiliateBalance = async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_user_affiliate_balance', { user_uuid: user?.id });
      
      if (error) throw error;
      setBalance(data || 0);
    } catch (error) {
      console.error('Error fetching affiliate balance:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink);
    toast({
      title: "Link copied!",
      description: "Share it with your friends to start earning",
    });
  };

  const handleWithdraw = async () => {
    toast({
      title: "Coming soon!",
      description: "Withdrawal functionality will be available soon",
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Join Our Affiliate Program</h2>
        <p className="text-gray-300 mb-6">
          Share with your friends and earn 20% for every coffee they purchase!
        </p>
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={affiliateLink}
            readOnly
            className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
          />
          <Button
            onClick={handleCopy}
            variant="outline"
            size="icon"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Your Affiliate Balance</h2>
        <p className="text-3xl font-bold text-primary mb-6">
          ${balance.toFixed(2)}
        </p>
        <Button 
          onClick={handleWithdraw}
          className="w-full"
          disabled={balance <= 0}
        >
          Withdraw Funds
        </Button>
      </div>
    </div>
  );
};

export default AffiliateSection;