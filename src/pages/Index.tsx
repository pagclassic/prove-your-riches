
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, Diamond, Trophy } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black relative overflow-hidden"
    >
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-8 z-10"
      >
        {/* Elite Status Section */}
        <motion.div variants={childVariants} className="flex justify-center mb-6">
          <Crown className="text-gold w-12 h-12 animate-float" />
        </motion.div>

        <motion.div variants={childVariants} className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Think You're Part of the <span className="text-gold">Elite</span>?
            <br />
            <span className="text-2xl md:text-4xl text-gray-400">Most People Aren't...</span>
            <br />
            <span className="text-gold">Dare to Prove Your Worth?</span>
          </h1>
          
          <motion.p
            className="text-gray-400 text-lg md:text-xl"
            variants={childVariants}
          >
            Only the top 1% will qualify. Are you one of them?
          </motion.p>
        </motion.div>

        <motion.div
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button
            onClick={() => navigate("/payment")}
            className="premium-button group relative"
          >
            <span className="inline-flex items-center gap-2">
              Prove Your Elite Status
              <Diamond className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </span>
          </button>
        </motion.div>

        {/* Exclusive Stats */}
        <motion.div variants={childVariants} className="pt-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gold text-2xl md:text-3xl font-bold">99%</div>
              <div className="text-gray-400 text-sm">Get Rejected</div>
            </div>
            <div>
              <div className="text-gold text-2xl md:text-3xl font-bold">$2M+</div>
              <div className="text-gray-400 text-sm">Average Net Worth</div>
            </div>
            <div>
              <div className="text-gold text-2xl md:text-3xl font-bold">Elite</div>
              <div className="text-gray-400 text-sm">Status Only</div>
            </div>
          </div>
        </motion.div>

        {/* Exclusive Members */}
        <motion.div variants={childVariants} className="glass p-6 rounded-xl mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-gold w-5 h-5" />
            <h3 className="text-xl font-semibold">Elite Members Only</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">James B.</span>
              <span className="text-gold">Verified Billionaire</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Elizabeth R.</span>
              <span className="text-gold">Ultra High Net Worth</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Alexander P.</span>
              <span className="text-gold">Private Jet Owner</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default Index;
