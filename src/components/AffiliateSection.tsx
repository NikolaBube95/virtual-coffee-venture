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
import { Input } from "@/components/ui/input";

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

interface AffiliateInvitation {
  id: string;
  email: string;
  status: string;
  created_at: string;
}

const AffiliateSection = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [balance, setBalance] = useState(0);
  const [affiliates, setAffiliates] = useState<AffiliateRelationship[]>([]);
  const [inviteEmail, setInviteEmail] = useState("");
  const [invitations, setInvitations] = useState<AffiliateInvitation[]>([]);
  const affiliateLink = `${window.location.origin}?ref=${user?.id}`;

  useEffect(() => {
    if (user) {
      fetchAffiliateBalance();
      fetchAffiliates();
      fetchInvitations();
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

  const fetchInvitations = async () => {
    try {
      const { data, error } = await supabase
        .from('affiliate_invitations')
        .select('*')
        .eq('referrer_id', user?.id);

      if (error) throw error;
      setInvitations(data || []);
    } catch (error) {
      console.error('Error fetching invitations:', error);
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
          profiles(
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

  const handleInvite = async () => {
    if (!inviteEmail) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('affiliate_invitations')
        .insert([
          {
            referrer_id: user?.id,
            email: inviteEmail,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Invitation sent!",
        description: "We'll notify you when they join",
      });
      
      setInviteEmail("");
      fetchInvitations();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
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
        
        <div className="space-y-4">
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

          <div className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter friend's email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50"
            />
            <Button
              onClick={handleInvite}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Invite
            </Button>
          </div>

          {invitations.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-white/80 mb-2">Pending Invitations</h3>
              <div className="space-y-2">
                {invitations.map((invitation) => (
                  <div
                    key={invitation.id}
                    className="text-sm text-white/60 flex justify-between items-center"
                  >
                    <span>{invitation.email}</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      {invitation.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
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