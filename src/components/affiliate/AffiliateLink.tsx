import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

interface AffiliateLinkProps {
  userId: string;
  onInvite: (email: string) => void;
}

const AffiliateLink = ({ userId, onInvite }: AffiliateLinkProps) => {
  const { toast } = useToast();
  const [inviteEmail, setInviteEmail] = useState("");
  const affiliateLink = `${window.location.origin}?ref=${userId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink);
    toast({
      title: "Link copied!",
      description: "Share it with your friends to start earning",
    });
  };

  const handleInvite = () => {
    if (!inviteEmail) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      });
      return;
    }
    onInvite(inviteEmail);
    setInviteEmail("");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          value={affiliateLink}
          readOnly
          className="flex-1 bg-white/5 border-white/20 text-white"
        />
        <Button
          onClick={handleCopy}
          variant="outline"
          size="icon"
          className="border-white/20 text-white hover:bg-white/10"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          type="email"
          placeholder="Enter friend's email"
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
          className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50"
        />
        <Button
          onClick={handleInvite}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
        >
          Invite
        </Button>
      </div>
    </div>
  );
};

export default AffiliateLink;