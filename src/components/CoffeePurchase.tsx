import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, Plus, Minus } from "lucide-react";

const CoffeePurchase = () => {
  const [coffeeCount, setCoffeeCount] = useState(1);

  const handleIncrement = () => {
    setCoffeeCount(prev => Math.min(prev + 1, 200));
  };

  const handleDecrement = () => {
    setCoffeeCount(prev => Math.max(prev - 1, 1));
  };

  const handlePurchase = () => {
    console.log(`Purchasing ${coffeeCount} coffees`);
  };

  return (
    <div className="flex flex-col items-center space-y-8 animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-bold text-center max-w-2xl">
        Instead of buying your coffee today, invest here and have a chance of winning 1 million dollars
      </h1>
      
      <div className="relative">
        <img src="/lovable-uploads/a102f7ef-cf24-4cea-909b-1f43f9990663.png" alt="Virtual Coffee" className="w-32 h-32" />
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          className="rounded-full"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="text-2xl font-bold min-w-[3ch] text-center">
          {coffeeCount}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          className="rounded-full"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <Button 
        onClick={handlePurchase}
        className="coffee-button"
        size="lg"
      >
        Buy for ${(coffeeCount * 5).toFixed(2)}
      </Button>
    </div>
  );
};

export default CoffeePurchase;