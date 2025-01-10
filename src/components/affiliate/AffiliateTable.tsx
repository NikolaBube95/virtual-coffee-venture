import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface AffiliateRelationship {
  id: string;
  referred_id: string;
  earnings: number;
  created_at: string;
  referred_user: {
    email: string | null;
  };
}

interface AffiliateTableProps {
  userId: string;
}

const AffiliateTable = ({ userId }: AffiliateTableProps) => {
  const [affiliates, setAffiliates] = useState<AffiliateRelationship[]>([]);

  useEffect(() => {
    fetchAffiliates();
  }, [userId]);

  const fetchAffiliates = async () => {
    try {
      console.log('Fetching affiliates for user:', userId);
      const { data, error } = await supabase
        .from('affiliate_relationships')
        .select(`
          id,
          referred_id,
          earnings,
          created_at,
          referred_user:profiles!referred_id(email)
        `)
        .eq('referrer_id', userId);

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

  return (
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
                  {affiliate.referred_user?.email || 'Unknown User'}
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
  );
};

export default AffiliateTable;