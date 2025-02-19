
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Payment = () => {
  const navigate = useNavigate();
  
  const handlePayment = () => {
    // In a real app, handle payment processing here
    navigate("/success");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black"
    >
      <div className="glass p-8 rounded-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Time to <span className="text-gold">prove</span> yourself
        </h2>
        <div className="space-y-6">
          <div className="text-center text-gray-300">
            <p className="mb-4">Ready to join the elite?</p>
            <p className="text-sm">Press the button below to process your payment</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <button
              onClick={handlePayment}
              className="premium-button w-full"
            >
              Process Payment
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Payment;
