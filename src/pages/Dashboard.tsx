import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CoffeePurchase from "@/components/CoffeePurchase";
import CoffeeCounter from "@/components/CoffeeCounter";
import AffiliateSection from "@/components/AffiliateSection";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const [totalRaised, setTotalRaised] = useState(0);
  const [purchases, setPurchases] = useState<any[]>([]);

  useEffect(() => {
    fetchTotalRaised();
    fetchPurchases();
    subscribeToUpdates();
  }, []);

  const fetchTotalRaised = async () => {
    try {
      const { data, error } = await supabase.rpc('get_total_raised');
      if (error) throw error;
      setTotalRaised(data || 0);
    } catch (error) {
      console.error('Error fetching total:', error);
    }
  };

  const fetchPurchases = async () => {
    try {
      const { data, error } = await supabase
        .from('coffee_purchases')
        .select('*')
        .order('purchase_date', { ascending: false });
      
      if (error) throw error;
      setPurchases(data || []);
    } catch (error) {
      console.error('Error fetching purchases:', error);
    }
  };

  const subscribeToUpdates = () => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'coffee_purchases' },
        () => {
          fetchTotalRaised();
          fetchPurchases();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24">
        <div className="space-y-16">
          <CoffeeCounter total={totalRaised} />
          
          <CoffeePurchase />
          
          <div className="max-w-2xl mx-auto">
            <AffiliateSection />
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Purchase History</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Reference ID</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchases.map((purchase) => (
                    <TableRow key={purchase.id}>
                      <TableCell>
                        {new Date(purchase.purchase_date).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-mono">
                        {purchase.reference_code}
                      </TableCell>
                      <TableCell>{purchase.quantity}</TableCell>
                      <TableCell className="text-right">
                        ${purchase.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;