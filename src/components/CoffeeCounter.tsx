import { Progress } from "@/components/ui/progress";

const CoffeeCounter = ({ total }: { total: number }) => {
  const percentage = (total / 1000000) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Global Investors Goal</h2>
      <Progress value={percentage} className="h-4 bg-white/10" />
      <div className="mt-4 text-center text-lg text-white">
        <span className="font-bold text-[#9b87f5]">${total.toLocaleString()}</span>
        <span className="text-white/60"> raised of </span>
        <span className="font-bold text-[#9b87f5]">$1,000,000</span>
      </div>
    </div>
  );
};

export default CoffeeCounter;