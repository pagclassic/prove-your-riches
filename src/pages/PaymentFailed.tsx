
import { motion } from "framer-motion";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

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
        className="glass p-8 rounded-2xl max-w-md w-full text-center space-y-8"
      >
        <div className="flex justify-center">
          <div className="bg-red-500/20 p-4 rounded-full">
            <AlertTriangle className="text-red-500 w-16 h-16" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold leading-tight">
            Payment <span className="text-red-500">Failed</span>
          </h2>
          
          <p className="text-lg text-gray-300">
            Unfortunately, we couldn't process your payment
          </p>
        </div>

        <div className="bg-black/30 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-red-400">Are You Really Elite?</h3>
          <p className="text-gray-400 mb-4">
            It seems your financial status doesn't match your aspirations.
            Our elite verification system couldn't confirm your wealth status.
          </p>
          <p className="text-gray-400 text-sm italic">
            Perhaps try again when your bank balance reflects your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="bg-white/10 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/payment")}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentFailed;
