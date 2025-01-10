import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface AffiliateInvitation {
  id: string;
  email: string;
  status: string;
  created_at: string;
}

interface AffiliateInvitationsProps {
  userId: string;
}

const AffiliateInvitations = ({ userId }: AffiliateInvitationsProps) => {
  const [invitations, setInvitations] = useState<AffiliateInvitation[]>([]);

  useEffect(() => {
    fetchInvitations();
  }, [userId]);

  const fetchInvitations = async () => {
    try {
      const { data, error } = await supabase
        .from('affiliate_invitations')
        .select('*')
        .eq('referrer_id', userId);

      if (error) throw error;
      setInvitations(data || []);
    } catch (error) {
      console.error('Error fetching invitations:', error);
    }
  };

  if (invitations.length === 0) return null;

  return (
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
  );
};

export default AffiliateInvitations;