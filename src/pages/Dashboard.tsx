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

  const examplePurchases = [
    {
      id: 'example-1',
      purchase_date: new Date('2024-03-15'),
      reference_code: 'EXAMPLE01',
      quantity: 2,
      amount: 10.00
    },
    {
      id: 'example-2',
      purchase_date: new Date('2024-03-14'),
      reference_code: 'EXAMPLE02',
      quantity: 1,
      amount: 5.00
    },
    {
      id: 'example-3',
      purchase_date: new Date('2024-03-13'),
      reference_code: 'EXAMPLE03',
      quantity: 3,
      amount: 15.00
    }
  ];

  const displayPurchases = purchases.length > 0 ? purchases : examplePurchases;

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24">
        <div className="space-y-16">
          <CoffeeCounter total={totalRaised} />
          
          <CoffeePurchase />
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Purchase History</h2>
            <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-white/60">Date</TableHead>
                    <TableHead className="text-white/60">Purchase ID</TableHead>
                    <TableHead className="text-white/60">Quantity</TableHead>
                    <TableHead className="text-white/60 text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayPurchases.map((purchase) => (
                    <TableRow key={purchase.id} className="border-white/10">
                      <TableCell className="text-white">
                        {new Date(purchase.purchase_date).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-mono text-white">
                        {purchase.reference_code}
                      </TableCell>
                      <TableCell className="text-white">{purchase.quantity}</TableCell>
                      <TableCell className="text-right text-white">
                        ${purchase.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <AffiliateSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;