import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AffiliateRelationship {
  id: string;
  referred_id: string;
  earnings: number;
  created_at: string;
  profiles: {
    email: string | null;
    first_name: string | null;
    last_name: string | null;
  } | null;
}

const AffiliateSection = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [balance, setBalance] = useState(0);
  const [affiliates, setAffiliates] = useState<AffiliateRelationship[]>([]);
  const affiliateLink = `${window.location.origin}?ref=${user?.id}`;

  useEffect(() => {
    if (user) {
      fetchAffiliateBalance();
      fetchAffiliates();
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

  const fetchAffiliates = async () => {
    try {
      console.log('Fetching affiliates for user:', user?.id);
      const { data, error } = await supabase
        .from('affiliate_relationships')
        .select(`
          id,
          referred_id,
          earnings,
          created_at,
          profiles:referred_id(
            email,
            first_name,
            last_name
          )
        `)
        .eq('referrer_id', user?.id);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Received affiliate data:', data);
      setAffiliates(data || []);
    } catch (error) {
      console.error('Error fetching affiliates:', error);
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

  const formatName = (affiliate: AffiliateRelationship) => {
    if (!affiliate.profiles) return 'Unknown User';
    const firstName = affiliate.profiles.first_name || '';
    const lastName = affiliate.profiles.last_name || '';
    return firstName || lastName ? `${firstName} ${lastName}`.trim() : affiliate.profiles.email || 'Unknown User';
  };

  return (
    <div className="space-y-8">
      {/* Join Our Affiliate Program Section */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Join Our Affiliate Program</h2>
        <p className="text-white/80 mb-6">
          Share with your friends and earn 20% for every coffee they purchase!
        </p>
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={affiliateLink}
            readOnly
            className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
          />
          <Button
            onClick={handleCopy}
            variant="outline"
            size="icon"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Referred Users Table Section */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Your Referred Users</h2>
        <div className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white/60">User</TableHead>
                <TableHead className="text-white/60">Date Joined</TableHead>
                <TableHead className="text-white/60 text-right">Earnings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {affiliates.length === 0 ? (
                <TableRow className="border-white/10">
                  <TableCell colSpan={3} className="text-center text-white/60">
                    No referrals yet. Share your link to start earning!
                  </TableCell>
                </TableRow>
              ) : (
                affiliates.map((affiliate) => (
                  <TableRow key={affiliate.id} className="border-white/10">
                    <TableCell className="text-white">
                      {formatName(affiliate)}
                    </TableCell>
                    <TableCell className="text-white">
                      {new Date(affiliate.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right text-white">
                      ${affiliate.earnings.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Withdrawal Section */}
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
    </div>
  );
};

export default AffiliateSection;