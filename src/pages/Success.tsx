
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

const Success = () => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Prove You're Rich",
        text: "Think you're rich? Prove it like I did!",
        url: window.location.origin,
      });
    } catch (err) {
      console.error("Error sharing:", err);
    }
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
        className="glass p-8 rounded-2xl max-w-2xl w-full text-center space-y-8"
      >
        <h2 className="text-4xl font-bold leading-tight">
          Ohh shit, you proved me wrong.
          <br />
          You are actually <span className="text-gold">rich</span>.
        </h2>
        
        <p className="text-gray-300">Now it's time to challenge your friends!</p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleShare}
            className="premium-button inline-flex items-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Challenge Friends
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Success;
