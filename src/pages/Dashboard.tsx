import Navbar from "@/components/Navbar";
import CoffeePurchase from "@/components/CoffeePurchase";
import CoffeeCounter from "@/components/CoffeeCounter";
import AffiliateSection from "@/components/AffiliateSection";
import Footer from "@/components/Footer";

const Dashboard = () => {
  // This would come from your backend in a real app
  const totalRaised = 125000;

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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;