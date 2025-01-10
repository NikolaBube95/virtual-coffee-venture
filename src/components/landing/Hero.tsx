import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <div className="flex justify-center mb-8">
        <img 
          src="/lovable-uploads/2e3b7316-0bc0-4483-9dc6-5f40a07de38d.png" 
          alt="5bucks mascot" 
          className="w-32 h-32 object-contain animate-bounce" 
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Turn Your Coffee Habit Into a Million-Dollar Opportunity!
      </h1>
      <p className="text-xl text-white/80">
        Why spend money on coffee when you can invest it and watch your wealth grow?
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          size="lg"
          className="bg-[#A0FF42] hover:bg-[#A0FF42]/90 text-[#4C0E95] font-bold"
          asChild
        >
          <Link to="/signup">Start Investing Now</Link>
        </Button>
        <Button 
          size="lg"
          variant="outline" 
          className="border-white/20 text-white hover:bg-white/10"
          asChild
        >
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  );
};