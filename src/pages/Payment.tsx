
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Loader2 } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePayment = () => {
    setIsProcessing(true);
    toast({
      title: "Processing Payment",
      description: "Please wait while we verify your transaction."
    });
    
    // Simulate payment processing with a 50% chance of success
    setTimeout(() => {
      setIsProcessing(false);
      const isSuccessful = Math.random() > 0.5;
      
      if (isSuccessful) {
        toast({
          title: "Payment Successful!",
          description: "Welcome to the elite club."
        });
        navigate("/success");
      } else {
        toast({
          title: "Payment Failed",
          description: "Unable to process your payment."
        });
        navigate("/payment-failed");
      }
    }, 2000);
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
          
          <div className="bg-black/20 p-6 rounded-xl mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Elite Membership</span>
              <span className="text-gold font-bold">$999.00</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Processing Fee</span>
              <span className="text-gray-300">$0.00</span>
            </div>
            <div className="border-t border-gray-800 my-4"></div>
            <div className="flex items-center justify-between font-bold">
              <span>Total</span>
              <span className="text-gold">$999.00</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="premium-button w-full flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  Process Payment
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Payment;
