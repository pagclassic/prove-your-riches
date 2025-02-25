
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [amount, setAmount] = useState("");
  
  const handlePayment = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount greater than 0",
        variant: "destructive"
      });
      return;
    }

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

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    
    // Ensure only one decimal point
    const parts = value.split('.');
    if (parts.length > 2) return;
    
    // Limit decimal places to 2
    if (parts[1] && parts[1].length > 2) return;
    
    setAmount(value);
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
            <p className="text-sm">Enter your desired amount and process the payment</p>
          </div>
          
          <div className="bg-black/20 p-6 rounded-xl mb-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-gray-400">Enter Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <Input
                    id="amount"
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    className="pl-7 bg-black/30 border-gray-800 text-white"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="border-t border-gray-800 my-4"></div>
              <div className="flex items-center justify-between font-bold">
                <span>Total</span>
                <span className="text-gold">${amount || '0.00'}</span>
              </div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <button
              onClick={handlePayment}
              disabled={isProcessing || !amount}
              className="premium-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
