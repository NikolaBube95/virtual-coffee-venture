import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const AffiliateSection = () => {
  const affiliateLink = "https://5bucks.com/ref/123";

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink);
    console.log("Link copied!");
  };

  return (
    <div className="affiliate-card">
      <h2 className="text-2xl font-bold mb-4">Join Our Affiliate Program</h2>
      <p className="text-gray-300 mb-6">
        Share with your friends and earn $1 for every coffee they purchase!
      </p>
      
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={affiliateLink}
          readOnly
          className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
        />
        <Button
          onClick={handleCopy}
          variant="outline"
          size="icon"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AffiliateSection;