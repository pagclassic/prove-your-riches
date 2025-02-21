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
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  useEffect(() => {
    // Simulate calculating user's rank and active members
    const randomRank = Math.floor(Math.random() * 100) + 1;
    setRank(randomRank);
    // Random percentile between 99.1 and 99.9
    const randomPercentile = (99.1 + Math.random() * 0.8).toFixed(1);
    setNetWorthPercentile(randomPercentile);
    // Random number of active elite members
    setMemberCount(Math.floor(Math.random() * (999 - 800 + 1)) + 800);
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

  const premiumPackages = [
    {
      id: "silver",
      name: "Silver Elite",
      price: "999",
      features: [
        "Access to networking events",
        "Basic investment insights",
        "Priority support",
      ],
    },
    {
      id: "gold",
      name: "Gold Prestige",
      price: "2,499",
      features: [
        "All Silver benefits",
        "Private wealth consultations",
        "Exclusive investment opportunities",
        "Quarterly mastermind sessions",
      ],
    },
    {
      id: "platinum",
      name: "Platinum Dynasty",
      price: "9,999",
      features: [
        "All Gold benefits",
        "Private jet partnerships",
        "Luxury property access",
        "Personal wealth concierge",
        "Elite global events access",
      ],
    },
  ];

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    navigate(`/checkout/${packageId}`);
  };

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

        {/* Premium Packages */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gold">Choose Your Elite Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-black/30 p-6 rounded-xl border-2 ${
                  pkg.id === 'platinum' ? 'border-gold' : 'border-gray-800'
                }`}
              >
                <h4 className="text-xl font-semibold mb-2">{pkg.name}</h4>
                <div className="text-3xl font-bold text-gold mb-4">
                  ${pkg.price}
                  <span className="text-sm text-gray-400">/year</span>
                </div>
                <ul className="text-left space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePackageSelect(pkg.id)}
                  className={`w-full py-2 rounded-lg transition-colors ${
                    pkg.id === 'platinum'
                      ? 'bg-gold text-black hover:bg-gold/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Select Package
                </button>
              </motion.div>
            ))}
          </div>
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

        {/* Premium Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/20 p-4 rounded-xl">
            <Rocket className="w-6 h-6 text-gold mb-2" />
            <h4 className="font-semibold mb-1">Priority Access</h4>
            <p className="text-sm text-gray-400">Skip the line at exclusive events</p>
          </div>
          <div className="bg-black/20 p-4 rounded-xl">
            <Globe2 className="w-6 h-6 text-gold mb-2" />
            <h4 className="font-semibold mb-1">Global Network</h4>
            <p className="text-sm text-gray-400">Connect with elite worldwide</p>
          </div>
          <div className="bg-black/20 p-4 rounded-xl">
            <Wallet className="w-6 h-6 text-gold mb-2" />
            <h4 className="font-semibold mb-1">Wealth Insights</h4>
            <p className="text-sm text-gray-400">Exclusive investment data</p>
          </div>
          <div className="bg-black/20 p-4 rounded-xl">
            <Building className="w-6 h-6 text-gold mb-2" />
            <h4 className="font-semibold mb-1">VIP Properties</h4>
            <p className="text-sm text-gray-400">Premier real estate access</p>
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
            Flex On Your Friends
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Success;
