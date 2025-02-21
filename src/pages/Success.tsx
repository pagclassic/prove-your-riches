
import { motion } from "framer-motion";
import { Share2, Trophy, Crown, Star, Diamond, Gem, Rocket, Globe2, Wallet, Users, Building } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [rank, setRank] = useState<number>(0);
  const [netWorthPercentile, setNetWorthPercentile] = useState<string>("99.9");
  const [memberCount, setMemberCount] = useState<number>(0);

  useEffect(() => {
    // Simulate calculating user's rank and active members
    const randomRank = Math.floor(Math.random() * 100) + 1;
    setRank(randomRank);
    // Random percentile between 99.1 and 99.9
    const randomPercentile = (99.1 + Math.random() * 0.8).toFixed(1);
    setNetWorthPercentile(randomPercentile);
    // Random number of active elite members
    setMemberCount(Math.floor(Math.random() * (999 - 800 + 1)) + 800);

    // Show welcome message with free resources
    toast({
      title: "🎉 Welcome to the Elite!",
      description: "Check your email for your free wealth-building guide and market insights report.",
    });
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "I'm Officially Elite! 👑",
        text: `I just proved I'm in the top ${netWorthPercentile}% of wealth! Can you match my status?`,
        url: window.location.origin,
      });
    } catch (err) {
      toast({
        title: "Share Your Success",
        description: "Screenshot this page and post it on social media to flex on your friends!",
      });
    }
  };

  const freeResources = [
    {
      title: "Market Analysis",
      description: "Latest trends and opportunities in the market",
      icon: <Globe2 className="w-6 h-6 text-gold" />,
      link: "/resources/market-analysis"
    },
    {
      title: "Networking Guide",
      description: "Connect with other successful individuals",
      icon: <Users className="w-6 h-6 text-gold" />,
      link: "/resources/networking"
    },
    {
      title: "Investment Basics",
      description: "Fundamental strategies for wealth building",
      icon: <Wallet className="w-6 h-6 text-gold" />,
      link: "/resources/investment-basics"
    },
    {
      title: "Property Insights",
      description: "Real estate market opportunities",
      icon: <Building className="w-6 h-6 text-gold" />,
      link: "/resources/property"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass p-8 rounded-2xl max-w-4xl w-full text-center space-y-8"
      >
        {/* Header Section */}
        <div className="relative">
          <div className="flex justify-center">
            <Crown className="text-gold w-16 h-16 animate-float" />
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-gold/10 rounded-full px-4 py-1 text-sm">
              <span className="text-gold">{memberCount} active members</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight">
            Welcome to the <span className="text-gold">Elite</span>
          </h2>
          
          <p className="text-2xl text-gray-300">
            You're in the top <span className="text-gold font-bold">{netWorthPercentile}%</span>
          </p>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-3 gap-4 py-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-black/30 p-4 rounded-full">
              <Trophy className="w-8 h-8 text-gold" />
            </div>
            <span className="text-sm text-gray-300">Elite Status</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-black/30 p-4 rounded-full">
              <Star className="w-8 h-8 text-gold" />
            </div>
            <span className="text-sm text-gray-300">Top {rank}</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-black/30 p-4 rounded-full">
              <Diamond className="w-8 h-8 text-gold" />
            </div>
            <span className="text-sm text-gray-300">Verified Rich</span>
          </div>
        </div>

        {/* Free Resources Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gold">Your Exclusive Resources</h3>
          <p className="text-gray-400">Access these valuable insights to start your elite journey</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {freeResources.map((resource, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-black/20 p-6 rounded-xl cursor-pointer"
                onClick={() => navigate(resource.link)}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-black/30 p-3 rounded-lg">
                    {resource.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Preview */}
        <div className="bg-black/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-gold">Elite Community Highlights</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">📈 Weekly Market Insights</span>
              <span className="text-gold">Free Access</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">👥 Networking Events</span>
              <span className="text-gold">Monthly Access</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">📚 Educational Resources</span>
              <span className="text-gold">Unlimited Access</span>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleShare}
            className="premium-button inline-flex items-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Share Your Achievement
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Success;
