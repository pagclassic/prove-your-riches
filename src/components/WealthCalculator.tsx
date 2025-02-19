
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const wealthyHabits = [
  "Buying expensive coffee daily",
  "Having a yacht (or two)",
  "Owning multiple houses",
  "Flying private jets",
  "Collecting rare art",
];

const loadingMessages = [
  "Counting your gold bars...",
  "Verifying offshore accounts...",
  "Checking yacht ownership...",
  "Validating private jet licenses...",
  "Measuring diamond collection..."
];

const WealthCalculator = () => {
  const [score, setScore] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleHabitToggle = (index: number) => {
    setScore(prev => prev + (document.getElementById(`habit-${index}`)?.checked ? 20 : -20));
  };

  const calculateWealth = async () => {
    setIsCalculating(true);
    
    // Simulate loading with different messages
    for (let i = 0; i < loadingMessages.length; i++) {
      setCurrentLoadingMessage(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    if (score >= 60) {
      toast({
        title: "Impressive wealth detected! 🎉",
        description: "You seem legitimately rich. Let's verify it!",
      });
      navigate("/payment");
    } else {
      toast({
        variant: "destructive",
        title: "Not rich enough... 😢",
        description: "Try acquiring more expensive habits!",
      });
      setIsCalculating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="glass p-8 rounded-2xl max-w-xl w-full space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Wealth Calculator</h2>
        <Calculator className="text-gold h-6 w-6" />
      </div>

      <div className="space-y-4">
        {wealthyHabits.map((habit, index) => (
          <TooltipProvider key={habit}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={`habit-${index}`}
                    onChange={() => handleHabitToggle(index)}
                    className="w-4 h-4 accent-gold"
                  />
                  <label htmlFor={`habit-${index}`} className="text-gray-300 cursor-pointer">
                    {habit}
                  </label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Only rich people do this! 💰</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      {isCalculating ? (
        <div className="text-center text-gray-300 animate-pulse">
          {loadingMessages[currentLoadingMessage]}
        </div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={calculateWealth}
            className="premium-button w-full inline-flex items-center justify-center gap-2"
          >
            Calculate My Wealth
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}

      <div className="text-center text-sm text-gray-400">
        Current wealth score: {score}/100
      </div>
    </motion.div>
  );
};

export default WealthCalculator;
