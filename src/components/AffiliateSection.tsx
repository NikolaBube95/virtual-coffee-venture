import { useAuth } from "@/components/auth/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AffiliateLink from "./affiliate/AffiliateLink";
import AffiliateInvitations from "./affiliate/AffiliateInvitations";
import AffiliateTable from "./affiliate/AffiliateTable";
import AffiliateBalance from "./affiliate/AffiliateBalance";

const AffiliateSection = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleInvite = async (email: string) => {
    try {
      const { error } = await supabase
        .from('affiliate_invitations')
        .insert([
          {
            referrer_id: user?.id,
            email: email,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Invitation sent!",
        description: "We'll notify you when they join",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (!user) return null;

  return (
    <div className="space-y-8">
      {/* Join Our Affiliate Program Section */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Join Our Affiliate Program</h2>
        <p className="text-white/80 mb-6">
          Share with your friends and earn 20% for every coffee they purchase!
        </p>
        
        <AffiliateLink userId={user.id} onInvite={handleInvite} />
        <AffiliateInvitations userId={user.id} />
      </div>

      {/* Referred Users Table Section */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Your Referred Users</h2>
        <AffiliateTable userId={user.id} />
      </div>

      {/* Balance Section */}
      <AffiliateBalance userId={user.id} />
    </div>
  );
};

export default AffiliateSection;