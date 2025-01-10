import { Progress } from "@/components/ui/progress";

const CoffeeCounter = ({ total }: { total: number }) => {
  const percentage = (total / 1000000) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Progress value={percentage} className="h-4" />
      <div className="mt-2 text-center text-sm text-gray-400">
        ${total.toLocaleString()} raised of $1,000,000
      </div>
    </div>
  );
};

export default CoffeeCounter;