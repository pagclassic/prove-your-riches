
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calculator } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const wealthyHabits = [
  "Buying expensive coffee daily",
  "Having a yacht (or two)",
  "Owning multiple houses",
  "Flying private jets",
  "Collecting rare art",
];

const WealthCalculator = () => {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleHabitToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScore(prev => prev + (event.target.checked ? 20 : -20));
  };

  const calculateWealth = () => {
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
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black"
    >
      <div className="glass p-8 rounded-2xl max-w-xl w-full space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Wealth Calculator
            <Calculator className="text-gold h-6 w-6" />
          </h2>
        </div>

        <div className="space-y-4">
          {wealthyHabits.map((habit, index) => (
            <div key={habit} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={`habit-${index}`}
                onChange={handleHabitToggle}
                className="w-4 h-4 accent-gold"
              />
              <label htmlFor={`habit-${index}`} className="text-gray-300 cursor-pointer">
                {habit}
              </label>
            </div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={calculateWealth}
            className="premium-button w-full"
          >
            Calculate My Wealth
          </button>
        </motion.div>

        <div className="text-center text-sm text-gray-400">
          Current wealth score: {score}/100
        </div>
      </div>
    </motion.div>
  );
};

export default WealthCalculator;
